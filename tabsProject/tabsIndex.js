
document.getElementById("aboutTab").classList.add("d-none");
document.getElementById("timeToVisitTab").classList.add("d-none")
document.getElementById("attractionsTab").classList.add("d-none")


function aboutPlace() {

    document.getElementById("aboutTab").classList.add("d-block");
    document.getElementById("timeToVisitTab").classList.remove("d-block");
    document.getElementById("attractionsTab").classList.remove("d-block");

    document.getElementById("aboutButton").style.backgroundColor = "white";
    document.getElementById("timeToVisitButton").style.backgroundColor = "#dae2ec";
    document.getElementById("attractionsButton").style.backgroundColor = "#dae2ec";

}

function timetoVisitPlace() {
    document.getElementById("aboutTab").classList.remove("d-block");
    document.getElementById("timeToVisitTab").classList.add("d-block");
    document.getElementById("attractionsTab").classList.remove("d-block")

    document.getElementById("aboutButton").style.backgroundColor = "#dae2ec";
    document.getElementById("timeToVisitButton").style.backgroundColor = "white";
    document.getElementById("attractionsButton").style.backgroundColor = "#dae2ec";


}

function attractionOfPlace() {

    document.getElementById("aboutTab").classList.remove("d-block");
    document.getElementById("timeToVisitTab").classList.remove("d-block");
    document.getElementById("attractionsTab").classList.add("d-block");

    document.getElementById("aboutButton").style.backgroundColor = "#dae2ec";
    document.getElementById("timeToVisitButton").style.backgroundColor = "#dae2ec";
    document.getElementById("attractionsButton").style.backgroundColor = "white";


}