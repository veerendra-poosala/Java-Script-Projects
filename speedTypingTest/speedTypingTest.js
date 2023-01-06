//getting required html Elements using thier id's
let quoteDisplayEl = document.getElementById('quoteDisplay');
let timerEl = document.getElementById('timer');
let spanElement = document.getElementById('spanElement');
let quoteInputEl = document.getElementById('quoteInput');


let resultEl = document.getElementById('result');

let submitBtn = document.getElementById('submitBtn');
let resetBtn = document.getElementById('resetBtn');

let spinner = document.getElementById('spinner');

let data = null;
let timerId = null;
let count = 0;

// creating startTimer function
function startTimer() {

    timerId = setInterval(function() {
        count += 1;
        //timerEl.textContent = count;
        spanElement.textContent = count;

    }, 1000);
}

//getting the quoteDisplay Element and filling it with random quote using fetch method
function getTheRandomQuote() {
    let url = 'https://apis.ccbp.in/random-quote';
    spinner.classList.toggle('d-none');
    fetch(url)

        .then(function(response) {

            return response.json();
        }).then(function(jsonData) {
            spinner.classList.toggle('d-none');
            data = jsonData.content;
            quoteDisplayEl.textContent = data;


            startTimer();

        });
}

//calling getTheRandomQuote function
getTheRandomQuote();

submitBtn.addEventListener('click', function(event) {

    let givenInput = quoteDisplayEl.textContent;
    let userInput = quoteInputEl.value;

    if (givenInput.trim() !== userInput.trim()) {
        resultEl.textContent = 'You typed incorrect sentence';

    } else {
        //(givenInput === userInput)
        let lengthOfInput = userInput.length;
        let words = lengthOfInput / 5;

        let seconds = count;
        let wpm = (words / seconds) * 60;
        wpm = Math.ceil(wpm);
        clearInterval(timerId);

        resultEl.textContent = 'You typed in ' + count + ' seconds' + ' and your typing speed is ' + wpm + ' wpm';

    }

});


resetBtn.addEventListener('click', function(event) {

    count = 0;
    clearInterval(timerId);
    quoteInputEl.value = '';
    spanElement.textContent = count;
    resultEl.textContent = '';
    getTheRandomQuote();


});