// Main Variables
const resultText = document.querySelector(".text-box-paragraph");
const numbers = document.querySelectorAll(".calculator-number-button");
const functions = document.querySelectorAll(".calculator-functional-button");
const equal = document.querySelector(".equal");

// Calculator Functions
const calculator = {
  add: function (x, y) {
    return x + y;
  },
  substract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
};

// Calculator Variables
let oldValue = "";
let currentValue = "";
let operator;
