//Global Variables

let numberList = [];
let myOperator = "";
let initialValue = ""; 
let secondValue = "";


//---07/19/2020 9:38 PM -- when you assign initialValue here, you will probably need
// to clear out the numberedList array for each function

const add = (total, num) => {
    let sum = total + num;
    initialValue = round(sum, 2);
    return initialValue;
    //return total + num;
};

const subtract = (total, num) => {
    let difference = total - num
    initialValue = round(difference, 2);
    return initialValue;
    //return total - num;
};

const multiply = (total, num) => {
    let multiples = total * num;
    initialValue = round(multiples, 2);
    return initialValue;
    //return total * num;
};

const divide = (total, num) => {
    
    if (num === 0) {

        //clearValues();
        console.log(numberList);
        console.log(initialValue);
        console.log(secondValue);
        console.log(myOperator);
        return "No No No!!!"
    }

    else {

        let quotient = total / num;
        initialValue = round(quotient, 2);
        return initialValue;
        //return total / num;

    }

};

//Used for rounding numbers
function round(value, decimals) {

    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);

    };

//used to establish continuing value and add it to numbered List
function continuing (contArray, contValue) {

    contArray = [];
    contArray.push(contValue);
    return contArray;

    };


const btn1 = document.querySelectorAll(".format1");
const btn2 = document.querySelectorAll(".format2");
const equalSign = document.querySelector(".format3")
const btn4 = document.querySelector(".format4")
const btn5 = document.querySelector(".format5")
const btn6 = document.querySelector(".format6")



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
        if (numberList.length === 0) {
            
            numberList.push(Number(initialValue));
            //console.log(numberList);
            console.log(initialValue);
            console.log(numberList);

        }

    });
        
});

equalSign.addEventListener("click", () => {

    console.log(numberList);
    console.log(initialValue);
    console.log(secondValue);
    console.log(myOperator);

    //Determine which value to store initially
    if (secondValue === "" && myOperator !== "") {


        numberList.push(Number(initialValue));
        console.log(numberList);

    } 
    
    //condition was initially set to deal with erratic equal sign behavior
    else if ((initialValue === "" || secondValue === "") && myOperator === "") {

        //clearValues();
        //console.log(numberList);
        //console.log(initialValue);
        //console.log(secondValue);
        //console.log(myOperator);
        document.getElementById("calcbox").innerText = "NaN";

    }
    
    
    else {

        
        numberList.push(Number(secondValue));
        console.log(numberList); 
        console.log(secondValue);
        console.log(initialValue);

    }

    console.log(myOperator);

    switch (myOperator) {

        case "ADD":
            document.getElementById("calcbox").innerText = numberList.reduce(add);
            break;

        case "SUB":
            document.getElementById("calcbox").innerText = numberList.reduce(subtract);
            break;
        
        case "MUL":
            document.getElementById("calcbox").innerText = numberList.reduce(multiply);
            break;

        case "DIV":
            document.getElementById("calcbox").innerText = numberList.reduce(divide);
            break;

    } 

    secondValue = "";
    initialValue = continuing(numberList, initialValue);
    numberList = initialValue;
    console.log(initialValue);
    console.log(numberList);  

});

btn4.addEventListener("click", () => {

    //clear all fields used for calculation
    clearValues();
    //console.log(numberList);
    //console.log(initialValue);
    //console.log(secondValue);
    //console.log(myOperator);

    document.getElementById("calcbox").innerText = 0;

})

btn5.addEventListener("click", () => {

    if (initialValue.includes(".") && secondValue === "") {
        document.getElementById("calcbox").innerText = initialValue;
        console.log(document.getElementById("calcbox").innerText);
    }
    
    else if (secondValue.includes(".")) {
        document.getElementById("calcbox").innerText = secondValue;
        console.log(document.getElementById("calcbox").innerText);
    }

    else if (secondValue === "") {
        initialValue = `${initialValue}.`
        document.getElementById("calcbox").innerText = initialValue;
        console.log(initialValue);
        console.log(document.getElementById("calcbox").innerText)
    }

    else if (initialValue !== "") {
        secondValue = `${secondValue}.`
        document.getElementById("calcbox").innerText = secondValue;
        console.log(secondValue);
    }

})

btn6.addEventListener("click", () => {

    if (secondValue === "" && initialValue.length > 0) {

        initialValue = backSpace(initialValue);
        document.getElementById("calcbox").innerText = initialValue;
        

    }

    else if (initialValue !== "" && secondValue.length > 0) {
        
        secondValue = backSpace(secondValue);
        document.getElementById("calcbox").innerText = secondValue;

    }

    else if (initialValue === "" && secondValue === "")

        document.getElementById("calcbox").innerText = 0;
        console.log(document.getElementById("calcbox").innerText);
        

})

//backspacing numbers

let backSpace = (stringValue) => {

    stringValue = stringValue.slice(0, -1);
    return stringValue;

}

//used for starting fresh
function clearValues () {

    numberList = [];
    initialValue = "";
    secondValue = "";
    myOperator = "";

}




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




let firstNum = (buttonNumber) => {
    
    initialValue += buttonNumber;
    return initialValue;

    };

let secondNum = (buttonNumber) => {

    secondValue += buttonNumber;
    return secondValue;

    };




