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
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            if (num2 === 0) {
                return "Can't do that ;)";
            }
            return divide(num1, num2).toFixed(2);
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

function createRow() {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    return row;
}

let currentRow = createRow();
for (let i = 0; i <= 9; i++) {
    if (i % 3 === 0 && i !== 0) {
        currentRow = createRow();
    }
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = i;
    currentRow.appendChild(button);
    button.addEventListener("click", (event) => {
        if(display.textContent.length >= 8) {
            display.textContent = "";
        }
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
            display.textContent += button.textContent;
            console.log("in else-num")
        }
        console.log(button.textContent);
    });
}


const operators = ["+", "-", "*", "/", "="];


for (ops in operators) {
    const button = document.createElement("button");
    currentRow.appendChild(button);
    if (ops % 2 === 0 && ops !== 0) {
        currentRow = createRow();
    }
    button.classList.add("ops");
    console.log(ops);
    button.textContent = operators[ops];
    button.addEventListener("click", (event) => {
        if (button.textContent === "=") {
            console.log("pressed equals");
            let result = operate(parseInt(numA), String(operator), parseInt(numB));
            if (result.toString().length >= 8) {
                display.textContent = result.toExponential(2);
                console.log("in result loop");
            }
            else {
                display.textContent = result;
                numA = result;
                numB = "";
                operator = "";
                secondNum = false;
                console.log(numA);
            }
        }
        else {
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
                display.textContent = numA.toExponential(2);
                console.log("second num");
                displayResult = true;
            }
        }
        operator = button.textContent;
    });
}


const clear = document.createElement("button");
clear.classList.add("btn", "clear");
clear.textContent = "clear";
container.appendChild(clear);
currentRow.append(clear);
clear.addEventListener("click", event => {
    display.textContent = "";
    numA = "";
    numB = "";
    operator = null;
    secondNum = false;
    displayResult = false;
});


