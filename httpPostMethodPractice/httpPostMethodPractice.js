let requestBodyEle = document.getElementById('requestBody');
let sendPostRequestBtn = document.getElementById('sendPostRequestBtn');
let requestStatus = document.getElementById('requestStatus');
let responseBody = document.getElementById('httpResponse');
let loadingEle = document.getElementById('loading');


sendPostRequestBtn.onclick = function() {
    loadingEle.classList.toggle('d-none');
    let url = 'https://gorest.co.in/public-api/users';
    let requestBody = requestBodyEle.value;

    let options = {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer 911d92c3cfbc1f02180aae952931d116feb983b5dac1275845b63e71145d20b3'

        },
        body: requestBody

    };
    //console.log(requestBody)
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            loadingEle.classList.toggle('d-none');
            requestStatus.textContent = jsonData.code;
            responseBody.textContent = JSON.stringify(jsonData.data);

        });
};

//{"id":23655,"name":"Ravi","email":"xyz12374@gmail.com","gender":"male","status":"active"}

//{"id":30813,"name":"amaleswar","email":"xyz12374@gmail.com","gender":"male","status":"active"}

/*{
"name":"sri ram",
"email": "sriram12345@gmail.com",
"gender":"Male",
"status":"Active"

}
*/