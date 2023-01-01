let userInput = document.getElementById('userInput');
let requestBody = document.getElementById('requestBody');
let sendPutRequestBtn = document.getElementById('sendPutRequestBtn');
let requestStatus = document.getElementById('requestStatus');
let httpResponse = document.getElementById('httpResponse');
let loadingEle = document.getElementById('loading');

sendPutRequestBtn.onclick = function() {
    let data = requestBody.value;
    let userId = userInput.value;

    if (data === '') {
        alert("Please Enter Valid Data");
    } else if (userId === '') {
        alert('Pleae Enter Valid UserId');
    } else {
        loadingEle.classList.toggle('d-none');
        let url = 'https://gorest.co.in/public-api/users/'+userId;
        let options = {

            method: 'PUT',
            headers: {
                'Content-Type': 'applicaton/json',
                Accept: 'application/json',
                Authorization: 'Bearer 911d92c3cfbc1f02180aae952931d116feb983b5dac1275845b63e71145d20b3'
            },
            body: data

        };

        fetch(url, options)
            .then(function(response) {
                return response.json();
            }).then(function(jsonData) {
                loadingEle.classList.toggle('d-none');
                requestStatus.textContent = jsonData.code;
                httpResponse.textContent = JSON.stringify(jsonData.data);

            });


    }
};