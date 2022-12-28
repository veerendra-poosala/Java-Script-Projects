function changeButtonAppearence() {

    

    let bgColorInput = document.getElementById("bgColorInput").value;
    document.getElementById("customButton").style.backgroundColor = bgColorInput;

    let fontColorInput = document.getElementById("fontColorInput").value;
    document.getElementById("customButton").style.color = fontColorInput;

    let fontSizeInput = document.getElementById("fontSizeInput").value;
    document.getElementById("customButton").style.fontSize = fontSizeInput;

    let fontWeightInput = document.getElementById("fontWeightInput").value;
    document.getElementById("customButton").style.fontWeight = fontWeightInput;

    let paddingInput = document.getElementById("paddingInput").value;
    document.getElementById("customButton").style.padding = paddingInput;

    let borderRadiusInput = document.getElementById("borderRadiusInput").value;
    document.getElementById("customButton").style.borderRadius = borderRadiusInput;


}