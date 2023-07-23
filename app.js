const display = document.querySelector(".display");
const container = document.querySelector(".container");
const numBtn = document.querySelectorAll(".number");
const opeBtn = container.querySelectorAll(".operator");
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
  a = parseInt(a);
  b = parseInt(b);
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
  if (display.textContent === "0") {
    display.textContent = clickedValue;
  } else {
    display.textContent += clickedValue;
  }
}

numBtn.forEach((btn) => {
  btn.addEventListener("click", updateDisplay);
});

function getOperator() {
  let clickedValue = this.textContent;
  operator = clickedValue;
  firstNum = display.textContent;
  display.textContent += operator;
}

opeBtn.forEach((btn) => {
  btn.addEventListener("click", getOperator);
});

function getSecondNum() {
  let clickedValue = display.textContent;
  let operateIndex =
    clickedValue["+"] ||
    clickedValue["*"] ||
    clickedValue["-"] ||
    clickedValue["/"];
  return clickedValue.slice(operateIndex + 1);
}

function getResult() {
  let clickedValue = this.textContent;
  secondNum = getSecondNum();
  display.textContent = operate(operator, firstNum, secondNum);
}

equalBtn.addEventListener("click", getResult);

function clearAll() {
  firstNum = "0";
  secondNum = "0";
  operator = "";
  display.textContent = "0";
}

clearBtn.addEventListener("click", clearAll);
