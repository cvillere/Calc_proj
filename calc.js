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

function roundingNumber(val, decimals){
    if (val % 1 != 0) {
        val = parseFloat(val);
        return parseFloat(val.toFixed(decimals))
    } else {
        return parseInt(val);
    }
}

//going to have to add classes to . and bk and use grid column
const buttonStrings = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                        "+", "-", "*", "/", "=", "cl", ".", "bk"];
const operatorStrings = ["+", "-", "*", "/"];

const containerDiv = document.body.querySelector(".container");

let displayValue = "";
let runningTotal = "";
let currentOperator = "";

function makeChildDivs (){
    for (i = 0; i < 18; i++) {
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
const clearButtonArray = buttonsList.slice(15, 16);
const decimalButtonArray = buttonsList.slice(16, 17);
const bkspButtonArray = buttonsList.slice(17, 18);

function applyButtonStrings (buttons) {
    for (i = 0; i < 18; i++) {
        buttons[i].textContent = `${buttonStrings[i]}`
    }
}

applyButtonStrings(buttonsList);

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
            displayValue = roundingNumber((calcDisplay.value), 2);
            console.log(currentOperator);
            console.log(displayValue);
        }))
    }

 createDisplayValue(operatorButtons);

 //clearCalc added to see if addToTotal will work for future runs
 equalsButtonArray.forEach(e =>
    e.addEventListener("click", e => {
    if (currentOperator === "" || runningTotal === "" || displayValue === "") {
        calcDisplay.value = "hit clear button & start over";
    } else if (currentOperator === "/" && (runningTotal === "0" || calcDisplay.value === "0")) {
        calcDisplay.value = "No 0 Division!!!";
    } else {
        calcDisplay.value = roundingNumber(operate(currentOperator, runningTotal, calcDisplay.value), 2);
        clearValues();
    }
}));

 function clearValues () {
     displayValue = "";
     runningTotal = "";
     currentOperator = "";
 }

 function clearCalc () {
    displayValue = "";
    runningTotal = "";
    currentOperator = "";
    calcDisplay.value = "";
 }

 clearButtonArray.forEach(e =>
    e.addEventListener("click", e => {clearCalc()}));

function decimalButton(theValue) {
    if (theValue.includes(".", 0) === false) {
        let buttonDec = e.target.textContent
        let displayString = `${calcDisplay.value}` + `${buttonDec}`
        calcDisplay.value = displayString
    }
}

decimalButtonArray.forEach(e =>
    e.addEventListener("click", e => {
    e.target.classList.add("stretchdec");
    //let decimalDiv = document.querySelector("childButton");
    //decimalDiv.classList.add("stretchdec")
    decimalButton(calcDisplay.value);
    }))

console.log(decimalButtonArray);
 
