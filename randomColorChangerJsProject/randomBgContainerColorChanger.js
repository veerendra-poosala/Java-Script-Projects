let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

function changeBgColor() {

    let max = bgColorsArray.length;
    //console.log(max);
    let pickRandomColor = Math.ceil(Math.random() * (max - 1))
    let randomColor = bgColorsArray[pickRandomColor]
    //console.log(pickRandomColor)
    //console.log(randomColor)
    document.getElementById("bgContainer").style.backgroundColor = randomColor;
}