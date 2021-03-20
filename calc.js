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

const buttonStrings = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                        "+", "-", "*", "/", "=", "cl"]

const containerDiv = document.body.querySelector(".container");

let displayValue = "";
let runningTotal = "";

function makeChildDivs (){
    for (i = 0; i < 16; i++) {
        let childDiv = document.createElement("div");
        let childBut = document.createElement("button");
        childDiv.classList.add("buttDiv");
        childBut.classList.add("childButton")
        containerDiv.appendChild(childDiv);
        childDiv.appendChild(childBut)
    }
}

makeChildDivs();

const buttonsCollection = document.querySelectorAll(".childButton");
const buttonsList = Array.from(buttonsCollection);

function applyButtonStrings (buttons) {
    for (i = 0; i < 16; i++) {
        buttons[i].textContent = `${buttonStrings[i]}`
    }
}

applyButtonStrings(buttonsList);

let calcDisplay = document.querySelector(".calcbox"); 
//let divDisplay = document.querySelector(".divbox");

console.log(calcDisplay.value);

buttonsList.forEach(e => 
    e.addEventListener('click', e => {
        let displayText = `${calcDisplay.value}` + `${e.target.textContent}`
        calcDisplay.value = displayText;
        console.log(calcDisplay.value);
        console.log(displayText);
    }))



 