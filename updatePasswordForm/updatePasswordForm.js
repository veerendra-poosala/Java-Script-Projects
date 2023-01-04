let newPassword = document.getElementById('newPassword');
let confirmPassword = document.getElementById('confirmPassword');
let newPasswordErrMsg = document.getElementById('newPasswordErrMsg');
let confirmPasswordErrMsg = document.getElementById('confirmPasswordErrMsg');
let updatePasswordForm = document.getElementById('updatePasswordForm');
let successMsg = document.getElementById('successMsg');

newPassword.addEventListener('blur', function(event) {
    if (event.target.value === '') {
        newPasswordErrMsg.textContent = 'Required*';
        successMsg.textContent = ''

    } else {
        newPasswordErrMsg.textContent = '';
    }
});

confirmPassword.addEventListener('blur', function(event) {
    if (event.target.value === '') {
        confirmPasswordErrMsg.textContent = 'Required*';
        successMsg.textContent = ''
    } else {
        confirmPasswordErrMsg.textContent = '';
    }
});

updatePasswordForm.addEventListener('submit', function(event) {
    event.preventDefault();
    newPasswordErrMsg.textContent = '';
    confirmPasswordErrMsg.textContent = '';
    if (newPassword.value === '') {
        newPasswordErrMsg.textContent = 'Required*';
        successMsg.textContent = ''
    }
    if (confirmPassword.value === '') {
        confirmPasswordErrMsg.textContent = 'Required*';
        successMsg.textContent = ''

    }
    if (newPassword.value !== confirmPassword.value) {
        confirmPasswordErrMsg.textContent = 'Password must be same';
        successMsg.textContent = ''
    } else {
        newPassword.value = '';
        confirmPassword.value = '';
        successMsg.textContent = 'Login Successfully :)'
    }

});