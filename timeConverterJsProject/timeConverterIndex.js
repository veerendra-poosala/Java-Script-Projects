let hoursInput = document.getElementById('hoursInput');
let minutesInput = document.getElementById('minutesInput');
let convertBtn = document.getElementById('convertBtn');
let timeInSeconds = document.getElementById('timeInSeconds');
let errorMsg = document.getElementById('errorMsg');


function convetToSeconds() {
    let hours = parseInt(hoursInput.value);
    let minutes = parseInt(minutesInput.value);
    let seconds = hours * 3600 + minutes * 60;
    return seconds;
}

convertBtn.addEventListener('click', function() {
    let hours = hoursInput.value;
    let minutes = minutesInput.value;

    if (hours === '') {
        errorMsg.textContent = 'Please Enter a valid number of hours';
        errorMsg.classList.add('d-block');
        timeInSeconds.classList.remove('d-block');
    } else if (minutes === '') {
        errorMsg.textContent = 'Please Enter a valid number of minutes';
        errorMsg.classList.add('d-block');
        timeInSeconds.classList.remove('d-block');
    } else {
        let seconds = convetToSeconds();
        //console.log(typeof(seconds))
        if (!isNaN(seconds)) {
            errorMsg.classList.remove('d-block');
            timeInSeconds.textContent = seconds + ' s';
            timeInSeconds.classList.add('d-block');
            hoursInput.value = '';
            minutesInput.value = '';
        } else {
            errorMsg.textContent = 'Please Enter a valid numbers';
            errorMsg.classList.add('d-block');
            timeInSeconds.classList.remove('d-block');
        }

    }

});