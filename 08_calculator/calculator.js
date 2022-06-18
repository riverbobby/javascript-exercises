const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(arr) {
  return arr.reduce((total, num) => total+= num , 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => total*= num, 1);
};

const power = function(a, b) {
  return a**b;	
};

const factorial = function(num) {
  result = 1;
  if (num < 1) return result;
  for (let i = 1; i <= num; i++) {
    result*= i;
  }
  return result;
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
