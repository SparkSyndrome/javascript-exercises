const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  const initialVal = 0;
  summedArr = arr.reduce((total, num) => total += num, initialVal);
  return summedArr;
};

const multiply = function(arr) {
  multipliedArr = arr.reduce((total, num) => total *= num);
  return multipliedArr;
};

const power = function(num, exp) {
  return num ** exp;
};

const factorial = function(num) {
  if (num < 0) {
    return;
  } else if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
