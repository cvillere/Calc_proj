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
                        "+", "-", "*", "/", "=", "cl"];

const operatorStrings = ["+", "-", "*", "/"];

const containerDiv = document.body.querySelector(".container");

let displayValue = "";
let runningTotal = "";
let currentOperator = "";

function makeChildDivs (){
    for (i = 0; i < 16; i++) {
        let childDiv = document.createElement("div");
        let childBut = document.createElement("button");
        childDiv.classList.add("buttDiv");
        childBut.classList.add("childButton");
        containerDiv.appendChild(childDiv);
        childDiv.appendChild(childBut);
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
//let displayValue = "";
//let runningTotal = "";
//let currentOperator = "";

let calcDisplay = document.querySelector(".calcbox"); 
buttonsList.forEach(e => 
    e.addEventListener('click', e => {
        //This is a good line of code below, but it is the wrong if condition
        //If condition needs to depend on the displayValue
        let buttonNum = parseInt(e.target.textContent, 10);
        let displayText = `${calcDisplay.value}` + `${buttonNum}`
        calcDisplay.value = displayText
        console.log(displayText);
        console.log(calcDisplay.value);
        console.log(buttonNum);

    }))

function addOperatorClass (calcButtons) {
    calcButtons.forEach(e => {
        if (operatorStrings.includes(e.textContent)){
            e.classList.add("operator")
             }     
        } )
    }

 addOperatorClass(buttonsList);

 let operatorButtons = document.querySelectorAll(".operator");
 function createDisplayValue (operButtons) {
     [...operButtons].forEach(e => 
        e.addEventListener('click', e => {
            currentOperator = e.textContent;
            displayValue = parseInt(calcDisplay.value);
            calcDisplay.value = "";

        }))
 }

 createDisplayValue(operatorButtons);

 /*
 if (displayValue != '' || displayValue != null || displayValue != undefined) {
    calcDisplay.value = "";
    let displayText = `${calcDisplay.value}` + `${e.target.textContent}`;
    calcDisplay.value = displayText;
}

*/