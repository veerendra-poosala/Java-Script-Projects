let newPassword = document.getElementById('newPassword');
let confirmPassword = document.getElementById('confirmPassword');
let newPasswordErrMsg = document.getElementById('newPasswordErrMsg');
let confirmPasswordErrMsg = document.getElementById('confirmPasswordErrMsg');
let updatePasswordForm = document.getElementById('updatePasswordForm');

newPassword.addEventListener('blur', function(event) {
    if (event.target.value === '') {
        newPasswordErrMsg.textContent = 'Required*';

    } else {
        newPasswordErrMsg.textContent = '';
    }
});

confirmPassword.addEventListener('blur', function(event) {
    if (event.target.value === '') {
        confirmPasswordErrMsg.textContent = 'Required*';
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
    }
    if (confirmPassword.value === '') {
        confirmPasswordErrMsg.textContent = 'Required*';

    }
    if (newPassword.value !== confirmPassword.value) {
        confirmPasswordErrMsg.textContent = 'Password must be same';
    } else {
        newPassword.value = '';
        confirmPassword.value = '';
        console.log('login successfully');
    }

});