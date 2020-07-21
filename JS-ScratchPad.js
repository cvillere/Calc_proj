let addNumbers = (element) => {

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

    };

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