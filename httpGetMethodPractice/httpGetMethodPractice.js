let sendGetRequestBtn = document.getElementById('sendGetRequestBtn');
let requestStatusEle = document.getElementById('requestStatus');
let responseBodyEle = document.getElementById('httpResponse');
let loadingEle = document.getElementById('loading');


sendGetRequestBtn.onclick = function() {
    loadingEle.classList.toggle('d-none');
    let requestStatus;
    let responseBody;
    let options = {
        method: 'GET',
    };
    let url = 'https://gorest.co.in/public-api/users';
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            loadingEle.classList.toggle('d-none');
            requestStatus = jsonData.code;
            responseBody = JSON.stringify(jsonData.data);
            requestStatusEle.textContent = requestStatus;
            responseBodyEle.textContent = responseBody;

        });
};