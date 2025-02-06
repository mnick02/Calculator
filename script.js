function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let numA = "";
let numB = "";
let operator;
let secondNum = false;
let displayResult = false;

function operate(num1, operator, num2) {
    switch(operator) {
        case "+":
            //console.log("in plus");
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
            //break;
        case "*":
            return multiply(num1, num2);
            //break;
        case "/":
            return divide(num1, num2);
            //break;
        default:
            console.log("unknown command");
    }
}


const container = document.querySelector("#container");

const display = document.createElement("div");
display.classList.add("display");
display.textContent = "0";
display.setAttribute("style", "background: lightgray");
container.appendChild(display);

//declare swictch here
//let tracker = 0;
for (let i = 0; i <= 9; i++) {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = i;
    container.appendChild(button);
    button.addEventListener("click", (event) => {
        if (displayResult) {
            display.textContent = "";
            displayResult = false;
        }
        if (!secondNum) {
            numA += button.textContent;
            display.textContent += button.textContent;
            console.log("in-if num");
        }
        else {
            numB += button.textContent;
            //display.textContent = "";
            display.textContent += button.textContent;
            console.log("in else-num")
        }
        console.log(button.textContent);
        //display.textContent += button.textContent;
    });
}

const operators = ["+", "-", "*", "/", "="];
for (ops in operators) {
    const button = document.createElement("button");
    button.classList.add("btn");
    //console.log(operators[ops]);
    button.textContent = operators[ops];
    container.appendChild(button);
    button.addEventListener("click", (event) => {
        
        //display.textContent = operate(numA, String(operator), numB);
        
        if (button.textContent === "=") {
            console.log("pressed equals");
            let result = operate(parseInt(numA), String(operator), parseInt(numB));
            display.textContent = result;
            numA = result;
            numB = "";
            operator = "";
            secondNum = false;
            //displayResult = true;
            console.log(numA);
        }
        else {
            ///what
            if (numA && !numB) {
                operator = button.textContent;
                secondNum = true;
                display.textContent = ""
                console.log("no second num");
            }
            else if (numA && numB) {
                let result = operate(parseInt(numA), String(operator), parseInt(numB));
                numA = result;
                numB = "";
                operator = button.textContent;
                secondNum = true;
                display.textContent = numA;
                console.log("second num");
                displayResult = true;
                //display.textContent = ""
            }
        }
        operator = button.textContent;
        //equal op????
        // if (button.textContent === "=") {
        //     display.textContent = operate(numA, String(operator), numB);
        // }

    });
}

const clear = document.createElement("button");
clear.classList.add("btn");
clear.textContent = "clear";
container.appendChild(clear);
clear.addEventListener("click", event => {
    display.textContent = "";
    numA = "";
    numB = "";
    operator = null;
    secondNum = false;
    displayResult = false;
    //update clear button
});


