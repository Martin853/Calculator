// Main Variables
const resultText = document.querySelector(".text-box-paragraph");
const numbers = document.querySelectorAll(".calculator-number-button");
const calculatorFunctions = document.querySelectorAll(
  ".calculator-functional-button"
);
const zero = document.querySelector(".zero");
const equal = document.querySelector(".equal");
const ac = document.querySelector(".ac");

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
let currentValue = "0";
let operator;

// Calculator

// Numbers
numbers.forEach(function (button) {
  button.addEventListener("click", function () {
    if (currentValue.length < 12) {
      if (currentValue[0] == "0") {
        currentValue = button.innerHTML;
        resultText.innerHTML = currentValue;
      } else {
        currentValue += button.innerHTML;
        resultText.innerHTML = currentValue;
      }
    }
  });
});

// Zero
zero.addEventListener("click", function () {
  if (currentValue.length < 12) {
    if (currentValue[0] != "0") {
      currentValue += "0";
      resultText.innerHTML = currentValue;
    }
  }
});

// AC
ac.addEventListener("click", function () {
  oldValue = "";
  currentValue = "0";
  operator = null;
  resultText.innerHTML = currentValue;
});
