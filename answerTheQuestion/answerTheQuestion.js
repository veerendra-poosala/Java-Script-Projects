let questionsForm = document.getElementById('questionsForm');
let resultMsg = document.getElementById('resultMsg');
questionsForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let selectedRadio = questionsForm.querySelector('input[name="city"]:checked');
    let selectedValue = selectedRadio ? selectedRadio.value : null;

    if (selectedValue === null) {
        resultMsg.textContent = 'Please select the answer';
        resultMsg.classList.remove('correct-answer');
        resultMsg.classList.add('wrong-answer');
    } else if (selectedValue !== 'delhi') {
        resultMsg.textContent = 'Wrong Answer!';
        resultMsg.classList.remove('correct-answer');
        resultMsg.classList.add('wrong-answer');

    } else if (selectedValue === 'delhi') {
        resultMsg.textContent = 'Correct Answer!';
        resultMsg.classList.add('correct-answer');
        resultMsg.classList.remove('wrong-answer');
    }



});