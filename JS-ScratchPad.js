//Global Variables

let numberList = [];
let myOperator = "";
let initialValue = ""; 
let secondValue = "";


const add = (total, num) => {
    let sum = total + num;
    initialValue = round(sum, 2);
    return initialValue;

};

const subtract = (total, num) => {
    let difference = total - num
    initialValue = round(difference, 2);
    return initialValue;

};

const multiply = (total, num) => {
    let multiples = total * num;
    initialValue = round(multiples, 2);
    return initialValue;

};

const divide = (total, num) => {
    
    if (num === 0) {

        clearValues();
        return "No No No!!!"

    }

    else {

        let quotient = total / num;
        initialValue = round(quotient, 2);
        return initialValue;

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


let firstNum = (buttonNumber) => {
    
    initialValue += buttonNumber;
    return initialValue;

    };

let secondNum = (buttonNumber) => {

    secondValue += buttonNumber;
    return secondValue;

    };



const btn1 = document.querySelectorAll(".format1");
const btn2 = document.querySelectorAll(".format2");
const equalSign = document.querySelector(".format3")
const btn4 = document.querySelector(".format4")
const btn5 = document.querySelector(".format5")
const btn6 = document.querySelector(".format6")



let addNumbers = (item) => {

    if (myOperator.length > 0) {

        const buttonValue = item.textContent
        document.getElementById("calcbox").innerText = secondNum(buttonValue);
        console.log(buttonValue);

    }

    else  {
            
        const buttonValue = item.textContent;
        document.getElementById("calcbox").innerText = firstNum(buttonValue);
        console.log(buttonValue);
        
        }

    };

/*

//Option for keyboard support
document.addEventListener("keydown", (event) => {

    if (myOperator.length > 0) {

        const buttonValue = event.key
        document.getElementById("calcbox").innerHTML = secondNum(buttonValue);
        console.log(buttonValue);
    }

    else  {
            
        const buttonValue = event.key;
        document.getElementById("calcbox").innerHTML = firstNum(buttonValue);
        console.log(buttonValue);
        
        }


    });

*/


btn1.forEach(element => {  
    
    element.addEventListener("click", () => {addNumbers(element)});

    });



btn2.forEach(element => {  
    
        
    element.addEventListener("click", () => {

        //store the operatorName for use in equal sign calculation
        myOperator = element.textContent;
        console.log(myOperator);
        
        //store the firstNumber 
        if (numberList.length === 0) {
            
            numberList.push(Number(initialValue));
            console.log(numberList);
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

        clearValues();
        //console.log(numberList);
        document.getElementById("calcbox").innerText = "NaN";

    }
    
    
    else {

        
        numberList.push(Number(secondValue));

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

});

btn4.addEventListener("click", () => {

    //clear all fields used for calculation
    clearValues();

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

        document.getElementById("calcbox").innerText = backSpace(initialValue);
        
        
})

//backspacing numbers

let backSpace = (stringValue) => {



{
    stringValue = stringValue.slice(0, -1);
    return stringValue;

    }

};

//used for starting fresh
function clearValues () {

    numberList = [];
    initialValue = "";
    secondValue = "";
    myOperator = "";

}

#calcbox {

    display: block;
    position: absolute;
    left: 400px;
    top: 150px;
    height: 20px;
    width: 18.2%;
    z-index: 10;
    border: 3px solid green;
    height: 20px;
    text-align: right;

}

.myborder {

    display: flex;
    position: absolute;
    height: 275px;
    width: 315px;
    border-top: 10px solid red;
    border-left: 10px solid red;
    border-right: 10px solid red;
    border-bottom: 10px solid red;
    left: 340px;
    top: 110px;
    z-index: 1;

}

.bodypos {

    position: relative;

}

.movement1 {

    display: flex;
    position: absolute;
    top: 180px;
    left: 400px;


    
}

.movement2 {

    display: flex;
    position: absolute;
    top: 220px;
    left: 400px;


}

.movement3 {

    display: flex;
    position: absolute;
    top: 260px;
    left: 400px;

 
}

.movement4 {

    display: flex;
    position: absolute;
    top: 300px;
    left: 400px;

  
}

.movement5 {

    display: flex;
    position: absolute;
    top: 340px;
    left: 400px;

  
}



.format {

    height: 25px;
    width: 51px;
    margin: 5px 5px 5px 0px;
    z-index: 5;

}

.format2 {

    background-color: green;
    color: magenta;

}

.design {

    height: 25px;
    width: 107px;
    margin: 5px 5px 5px 0px;
    z-index: 6;

}


#center {

    text-align: center;

}











