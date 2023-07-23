const display = document.querySelector(".display");
const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
/* const numBtn = document.querySelectorAll(".number");
const opeBtn = container.querySelectorAll(".operator"); */
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");

let firstNum;
let secondNum;
let operator;
let displayValue = "0";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Error: Invalid operator";
  }
}

function updateDisplay() {
  let clickedValue = this.textContent;
  if (clickedValue === "." && !display.textContent.includes(".")) {
    display.textContent += clickedValue;
  } else if (["+", "-", "*", "/"].includes(clickedValue)) {
    operator = clickedValue;
    firstNum = display.textContent;
    display.textContent = firstNum + operator;
  } else {
    if (display.textContent === "0") {
      display.textContent = clickedValue;
    } else {
      display.textContent += clickedValue;
    }
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", updateDisplay);
});

function getSecondNum() {
  let clickedValue = display.textContent;
  let operateIndex = clickedValue.indexOf(operator);
  return clickedValue.slice(operateIndex + 1);
}

function getResult() {
  let clickedValue = this.textContent;
  secondNum = getSecondNum();
  display.textContent =
    Math.floor(operate(operator, firstNum, secondNum) * 100) / 100;
}

equalBtn.addEventListener("click", getResult);

function clearAll() {
  firstNum = "0";
  secondNum = "0";
  operator = "";
  display.textContent = "0";
  displayValue = "0";
}

clearBtn.addEventListener("click", clearAll);
