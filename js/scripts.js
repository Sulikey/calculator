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

window.alert("The addition of your numbers equals: " + resultAdd + 
" The subtraction of your numbers equals: " + resultSubtract +
" The multiplication of your numbers equals: " + resultMultiply +
" The division of your numbers equals: " + resultDivide);