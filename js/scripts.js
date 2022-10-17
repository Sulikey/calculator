// business logic
function add(number1, number2) {
  return number1 + number2;
}

// business logic
function subtract(number1, number2) {
  return number1 - number2;
}

// business logic
function multiply(number1, number2) {
  return number1 * number2;
}

// business logic
function divide(number1, number2) {
  return number1 / number2;
}

// user interface logic 
const number1 = prompt("Enter a number:");
const number2 = prompt("Enter another number:");

const resultAdd = add(parseInt(number1), parseInt(number2));
const resultSubtract = subtract(parseInt(number1), parseInt(number2));
const resultMultiply = multiply(parseInt(number1), parseInt(number2));
const resultDivide = divide(parseInt(number1), parseInt(number2));

window.alert(
number1 + " + " + number2 + " = " + resultAdd + "\n" +
number1 + " - " + number2 + " = " + resultSubtract + "\n" +
number1 + " * " + number2 + " = " + resultMultiply +  "\n" +
number1 + " / " + number2 + " = " + resultDivide);