let firstNumber = document.getElementById("firstNumber");
let firstNumberValue = Math.ceil(Math.random() * 100);
firstNumber.textContent = firstNumberValue;

let secondNumber = document.getElementById("secondNumber");
let secondNumberValue = Math.ceil(Math.random() * 100);
secondNumber.textContent = secondNumberValue;

let gameResult = document.getElementById("gameResult");


function checkTotal() {

    let addition = firstNumberValue + secondNumberValue;
    let userValue = document.getElementById("userInput").value;
    //console.log(userValue);
    //console.log(typeof(parseInt(userValue)));
    //console.log(typeof(addition));


    if (parseInt(userValue) === addition) {
        console.log(parseInt(userValue));

        gameResult.textContent = "Congratulations! You got it right!";
        gameResult.style.backgroundColor = "#028a0f";


    } else {
        //console.log(parseInt(userValue));
        gameResult.textContent = "Please Try Again!";
        gameResult.style.backgroundColor = "#1e217c";
    }

}

function restartGame() {
    document.getElementById("userInput").value = "";
    firstNumberValue = Math.ceil(Math.random() * 100);
    secondNumberValue = Math.ceil(Math.random() * 100);
    firstNumber.textContent = firstNumberValue;
    secondNumber.textContent = secondNumberValue;
    gameResult.textContent = "";
    gameResult.color = "#ffffff";
    gameResult.backgroundColor = "#f5f7fa";

}