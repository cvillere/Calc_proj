function add (a, b) {
    return a + b
}

function subtract (a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b
}

function divide (a, b) {
    return a / b
}

function operate (operator, a, b) {
    return operator(a, b)
}

const containerDiv = document.body.querySelector(".container");

function childDivs (){
    for (i = 0; i < 16; i++) {
        let childDiv = document.createElement("div");
        let childBut = document.createElement("button")
        childBut.classList.add("childButton")
        childDiv.classList.add("buttDiv");
        containerDiv.appendChild(childDiv);
        childDiv.appendChild(childBut)
    }
}

childDivs();