function add(num1, num2) {
    //console.log("in add");
    //console.log(num1 + num2);
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

let numA;
let numB;
let operator;

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
let tracker = 0;
for (let i = 0; i <= 9; i++) {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = i;
    container.appendChild(button);
    button.addEventListener("click", (event) => {
        console.log(button.textContent);
        display.textContent += button.textContent;
        //if switch = 1, set var to display.textContent
        if (tracker === 1) {
            //display.textContent += button.textContent;
            numA = button.textContent;
            tracker = 2;
            console.log("In loop 1");
        }
        else if (tracker === 3) {
            numB = button.textContent;
            tracker = 0;
            console.log("In loop 2");
            display.textContent = operate(numA, String(operator), numB);
        }
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
        //console.log(this);
        //display.textContent += button.textContent;
        //var += button.textContent?
        //Change to = instead of +=?
        //switch in here (i.e. if btn pressed swtich = 1)
        if (tracker === 0) {
            tracker = 1;
            console.log("in loop 3");
        }
        else if (tracker === 2) {
            tracker = 3;
            console.log("in loop 4");
        }
        operator = button.textContent;
        //equal op????
    });
}

const clear = document.createElement("button");
clear.classList.add("btn");
clear.textContent = "clear";
container.appendChild(clear);
clear.addEventListener("click", event => {
    display.textContent = "";
});


