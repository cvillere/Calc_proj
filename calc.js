const add = (firstNum, secondNum) => {
    return firstNum + secondNum;
};

const subtract = (numOne, numTwo) => {
    return numOne - numTwo;
};

const multiply = (oneNum, twoNum) => {
    return oneNum * twoNum;
};

const divide = (threeNum, fourNum) => {
    return threeNum / fourNum;
};

const operate = (operator, myNum, hisNum) => {
    return operator(myNum, hisNum);
}

const btn = document.querySelectorAll(".format")


btn.forEach(element => {    
    //assign variable to numeric value of button
    //the value attribute of the display ==== above variable
    //const displayBox = document.querySelector("#calcbox");
    element.addEventListener("click", () => {
        
        const buttonValue = element.textContent;
        document.getElementById("calcbox").innerText = buttonValue;
    
        });
    });





//const displayValue = document.getElementById("calcbox").getAttribute("type")
