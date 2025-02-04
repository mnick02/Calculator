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
for (let i = 0; i <= 9; i++) {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = i;
    container.appendChild(button);
}
