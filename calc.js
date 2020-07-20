//All of these functions are going to need to be combined into one.

const add = (total, num) => {
    let sum = total + num
    return round(sum, 2);
    //return total + num;
};

const subtract = (total, num) => {
    let difference = total - num
    return round(difference, 2);
    //return total - num;
};

const multiply = (total, num) => {
    let multiples = total * num;
    return round(multiples, 2);
    //return total * num;
};

const divide = (total, num) => {
    let quotient = total / num;
    return round(quotient, 2);
    //return total / num;
};

//Used for rounding numbers
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }


const btn1 = document.querySelectorAll(".format1");
const btn2 = document.querySelectorAll(".format2");
const btn3 = document.querySelector(".format3")
const btn4 = document.querySelector(".format4")

let numberList = [];
let myOperator = "";

btn1.forEach(element => {  
    
    element.addEventListener("click", () => {

        if (myOperator.length > 0) {

            const buttonValue = element.textContent
            document.getElementById("calcbox").innerText = secondNum(buttonValue);
            console.log(buttonValue);
        } 
        
        else  {
            
            const buttonValue = element.textContent;
            document.getElementById("calcbox").innerText = firstNum(buttonValue);
            console.log(buttonValue);
            
            }
        
        });
    
    });

btn2.forEach(element => {  
    
        
    element.addEventListener("click", () => {

        //store the operatorName for use in equal sign calculation
        myOperator = element.textContent;
        console.log(myOperator);
        
        //store the firstNumber 
        numberList.push(Number(initialValue));
        //console.log(numberList);
        console.log(initialValue);


        });
        
    });

btn3.addEventListener("click", () => {

    //Determine which value to store
    if (secondValue === "") {
        
        numberList.push(Number(initialValue));
        console.log(numberList);
    } 
    
    else {

        numberList.push(Number(secondValue));
        console.log(numberList); 

    }
    console.log(myOperator);
    switch (myOperator) {

        case "ADD":
            document.getElementById("calcbox").innerText = numberList.reduce(add);
            console.log(numberList.reduce(add));
            break;

        case "SUB":
            document.getElementById("calcbox").innerText = numberList.reduce(subtract);
            console.log(numberList.reduce(subtract));
            break;
        
        case "MUL":
            document.getElementById("calcbox").innerText = numberList.reduce(multiply);
            console.log(numberList.reduce(multiply));
            break;

        case "DIV":
            document.getElementById("calcbox").innerText = numberList.reduce(divide);
            console.log(numberList.reduce(divide));
            break;

    } 

    initialValue = "";
    secondValue = "";


});

btn4.addEventListener("click", () => {

    //clear all fields used for calculation
    numberList = [];
    initialValue = "";
    secondValue = "";
    myOperator = "";
    console.log(numberList);
    console.log(initialValue);
    console.log(secondValue);
    console.log(myOperator);

    document.getElementById("calcbox").innerText = 0;

})




        //second number gets submitted -- store it
        //on equal sign, run a function with all the stored values. 
            //And get rid of all the values in the initialValue List
                
        //save the first number --- don't think I need to worry about this too much. -- Just use the firstNumber function
        //figure out the operator 

        //Outstanding question: when you click an operator button, the number on the screen 
        //stays there until another number is clicked. How does that happen?
                //--Fixed this with using additional variable

        //equal function is going to involve if statement and reduce array method
        //result of that reduce array is what the dom element will be equal to.
            //initialValue and secondValue will go back to empty strings

        //Clear function is going to have to clear out the number list. -- I'm pretty sure that is
        //all it should do.


let initialValue = ""; 
let secondValue = "";

let firstNum = (buttonNumber) => {
    
    initialValue += buttonNumber;
    return initialValue;

    };

let secondNum = (buttonNumber) => {

    secondValue += buttonNumber;
    return secondValue;

    };




