let nameEl = document.getElementById('name');
let emailEl = document.getElementById('email');
let nameErrMsgEl = document.getElementById('nameErrMsg');
let emailErrMsgEl = document.getElementById('emailErrMsg');
let submitBtn = document.getElementById('submitBtn');

let selectStatusEle = document.getElementById('status');
//console.log(status.value)
let genderMale = document.getElementById('genderMale');
let genderFemale = document.getElementById('genderFemale');
let resultMsg = document.getElementById('resultMsg');


let addUserForm = document.getElementById('addUserForm');


//creating data Object
let data = {

    name: '',
    email: '',
    status: 'Inactive',
    gender: 'Male'

};

addUserForm.addEventListener('submit', function(event) {
    event.preventDefault();
});

nameEl.addEventListener('blur', function(event) {
    resultMsg.textContent = '';
    if (event.target.value === '') {
        nameErrMsgEl.textContent = 'Required*';
    } else {
        nameErrMsgEl.textContent = '';
    }
});

emailEl.addEventListener('blur', function(event) {
    resultMsg.textContent = '';
    if (event.target.value === '') {
        emailErrMsgEl.textContent = 'Required*';
    } else {
        emailErrMsgEl.textContent = '';
    }
});

nameEl.addEventListener('change', function(event) {
    if (event.target.value === '') {
        nameErrMsgEl.textContent = 'Required*';
    } else {
        data.name = event.target.value;
        nameErrMsgEl.textContent = '';
    }
});

emailEl.addEventListener('change', function(event) {
    if (event.target.value === '') {
        emailErrMsgEl.textContent = 'Required*';
    } else {
        data.email = event.target.value;
        emailErrMsgEl.textContent = '';
    }
});

selectStatusEle.addEventListener('change', function(event) {
    data.status = event.target.value;
    //console.log(JSON.stringify(data));
});

addUserForm.addEventListener('change', function(event) {

    let selectRadio = addUserForm.querySelector('input[name="gender"]:checked');
    let genderValue = selectRadio.value;
    data.gender = genderValue;
    //console.log(JSON.stringify(data));


});

function addUser() {
    let url = 'https://gorest.co.in/public-api/users';

    let options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: 'application/json',
            Authorization: "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f",
        },
        body: JSON.stringify(data)

    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        }).then(function(jsonData) {
            if (jsonData.code === 422) {
                emailErrMsgEl.textContent = 'Email has already been taken';
                
            }if (jsonData.code === 201 || jsonData.code === 200){
                resultMsg.textContent = 'Added User Successfully';
            }

        });

}

submitBtn.addEventListener('click', function(event) {
    addUser();
    nameEl.value = '';
    emailEl.value = '';

});