//getting url from input Element
let requestUrlEle = document.getElementById('requestUrl');
//console.log(requestUrl.value)

let requestUrlErrMsgEle = document.getElementById('requestUrlErrMsg');

//getting http method type 
let requestMethodEle = document.getElementById('requestMethod');
//console.log(requestMethod.value);




//getting request body or data to create or data need to update
let requestBodyEle = document.getElementById('requestBody');

let responseStatusEle = document.getElementById('responseStatus');
let responseBodyEle = document.getElementById('responseBody');

let sendRequestBtn = document.getElementById('sendRequestBtn');



requestUrlEle.addEventListener('change', function(event) {
    let url = requestUrlEle.value;
    //window.globalVariable = url;

});



function postOrUpdateData(url, method, data) {

    if (url === '') {
        requestUrlErrMsgEle.textContent = 'Required*';
    } else {
        requestUrlErrMsgEle.textContent = '';
        let options = {
            method: method,
            headers: {
                "Content-Type": "application/json",
                Accept: 'application/json',
                Authorization: "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f",
            },
            body: data
        };

        fetch(url, options)
            .then(function(response) {
                return response.json();
            }).then(function(jsonData) {
                let code = jsonData.code;
                let data = JSON.stringify(jsonData.data);
                responseStatusEle.value = code;
                responseBodyEle.textContent = data;
            });

    }
}


sendRequestBtn.addEventListener('click', function() {


    let url = requestUrlEle.value;
    let method = requestMethodEle.value;


    let data = requestBodyEle.value;

    postOrUpdateData(url, method, data);

});


//form Element
let consoleForm = document.getElementById('consoleForm');

//preventing from default behaviour
consoleForm.addEventListener('submit', function(event) {
    event.preventDefault();
});