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
       return add(a, parseInt(b));
    } else if (operator === "-") {
       return subtract(a, parseInt(b));
    } else if (operator === "*") {
       return multiply(a, parseInt(b));
    } else if (operator === "/") {
       return divide(a, parseInt(b));
    }
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
const equalsButtonArray = buttonsList.slice(14, 15);
const clearButtonArray = buttonsList.slice(15, 16)
console.log(clearButtonArray);

function applyButtonStrings (buttons) {
    for (i = 0; i < 16; i++) {
        buttons[i].textContent = `${buttonStrings[i]}`
    }
}

applyButtonStrings(buttonsList);

//This works on the 1st run through, but not after
function addToTotal () {
    if (currentOperator != '' && runningTotal === '') {
        runningTotal = displayValue;
        calcDisplay.value = "";
        console.log(runningTotal);
     }
}

let calcDisplay = document.querySelector(".calcbox"); 
numberButtonsList.forEach(e => 
    e.addEventListener('click', e => {
        addToTotal();
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

 //clearCalc added to see if addToTotal will work for future runs
 equalsButtonArray.forEach(e =>
    e.addEventListener("click", e => {
    console.log(currentOperator);
    console.log(runningTotal);
    console.log(typeof(runningTotal));
    console.log(typeof(parseInt(calcDisplay.value)));
    console.log(operate(currentOperator, runningTotal, calcDisplay.value));
    calcDisplay.value = operate(currentOperator, runningTotal, calcDisplay.value)
    clearCalc();
}));

 function clearCalc () {
     displayValue = "";
     runningTotal = "";
     currentOperator = "";
 }

 