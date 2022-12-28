let numbers = [17, 31, 77, 20, 63];

let userInput = document.getElementById('userInput');


let findBtn = document.getElementById('findBtn');
findBtn.onclick = function() {

    let givenNumber = parseInt(userInput.value);

    let index = numbers.findIndex(function(eachNumber) {

        if (eachNumber === givenNumber) {
            return true;
        } else {
            return false;
        }

    });

    let indexOfNumber = document.getElementById('indexOfNumber');
    indexOfNumber.textContent = (index);
    userInput.value = '';

};