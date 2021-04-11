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
    if (operator === "+") {
        add(a, parseInt(b));
    } else if (operator === "-") {
        subtract(a, parseInt(b));
    } else if (operator === "*") {
        multiply(a, parseInt(b));
    } else if (operator === "/") {
        divide(a, parseInt(b));
    }
    
}

switch (currentOperator) {
    case "+":
        add(runningTotal, parseInt(calcDisplay.value));
    case "-":
        subtract(runningTotal, parseInt(calcDisplay.value));
    case "/":
        divide(runningTotal, parseInt(calcDisplay.value));
    case "*":
        multiply(runningTotal, parseInt(calcDisplay.value)); 
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
const numberButtonsList = buttonsList.slice(0, 10);


function applyButtonStrings (buttons) {
    for (i = 0; i < 16; i++) {
        buttons[i].textContent = `${buttonStrings[i]}`
    }
}

applyButtonStrings(buttonsList);

function addToRunning () {
    if (currentOperator != '' && runningTotal === '') {
        runningTotal = displayValue;
        calcDisplay.value = "";
        console.log(runningTotal);
     }
}

let calcDisplay = document.querySelector(".calcbox"); 
numberButtonsList.forEach(e => 
    e.addEventListener('click', e => {
        addToRunning();
        let buttonNum = parseInt(e.target.textContent, 10);
        let displayText = `${calcDisplay.value}` + `${buttonNum}`
        calcDisplay.value = displayText

    }))

function addOperatorClass (calcButtons) {
    calcButtons.forEach(e => {
        if (operatorStrings.includes(e.textContent)){
            e.classList.add("operator")
             }     
        })
    }

 addOperatorClass(buttonsList);

 let operatorButtons = document.querySelectorAll(".operator");
 function createDisplayValue (operButtons) {
     [...operButtons].forEach(e => 
        e.addEventListener('click', e => {
            currentOperator = e.target.textContent;
            displayValue = parseInt(calcDisplay.value);
            console.log(currentOperator);
            console.log(displayValue);
        }))
    }

 createDisplayValue(operatorButtons);

 /*
 if (displayValue !== '' || displayValue != null || displayValue != undefined) {
    calcDisplay.value = "";
    let displayText = `${calcDisplay.value}` + `${e.target.textContent}`;
    calcDisplay.value = displayText;
}

*/

//(currentOperator != '') && (runningTotal === '')
//(currentOperator !== '' || currentOperator !== null || currentOperator !== undefined) && (runningTotal === '' || runningTotal === null || runningTotal === undefined)