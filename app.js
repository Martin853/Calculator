// Main Variables
const resultText = document.querySelector(".text-box-paragraph");
const numbers = document.querySelectorAll(".calculator-number-button");
const calculatorFunctions = document.querySelectorAll(
  ".calculator-functional-button"
);
const zero = document.querySelector(".zero");
const equal = document.querySelector(".equal");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const ac = document.querySelector(".ac");
const del = document.querySelector(".del");
const comma = document.querySelector(".comma");

// Calculator Functions
const calculator = {
  add: function (x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    let result = x + y;
    result = result.toString();
    return result;
  },
  substract: function (x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    let result = x - y;
    result = result.toString();
    return result;
  },
  multiply: function (x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    let result = x * y;
    result = result.toString();
    return result;
  },
  divide: function (x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    let result = x / y;
    result = result.toString();
    return result;
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
      if (currentValue[0] == "0" && currentValue[1] != ".") {
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

// Del
del.addEventListener("click", function () {
  if (currentValue.length > 1) {
    currentValue = currentValue.substring(0, currentValue.length - 1);
    resultText.innerHTML = currentValue;
  } else {
    currentValue = "0";
    resultText.innerHTML = currentValue;
  }
});

// Comma
comma.addEventListener("click", function () {
  if (currentValue.includes(".") != true) {
    currentValue += ".";
    resultText.innerHTML = currentValue;
  }
});

// Plus
plus.addEventListener("click", function () {
  oldValue = currentValue;
  currentValue = "0";
  operator = "+";
});

// Minus
minus.addEventListener("click", function () {
  oldValue = currentValue;
  currentValue = "0";
  operator = "-";
});

// Multiply
multiply.addEventListener("click", function () {
  oldValue = currentValue;
  currentValue = "0";
  operator = "*";
});

// Divide
divide.addEventListener("click", function () {
  oldValue = currentValue;
  currentValue = "0";
  operator = "/";
});

// Equal
equal.addEventListener("click", function () {
  switch (operator) {
    case "+":
      currentValue = calculator.add(oldValue, currentValue);
      resultText.innerHTML = currentValue;
      operator = null;
      break;
    case "-":
      currentValue = calculator.substract(oldValue, currentValue);
      resultText.innerHTML = currentValue;
      operator = null;
      break;
    case "*":
      currentValue = calculator.multiply(oldValue, currentValue);
      resultText.innerHTML = currentValue;
      operator = null;
      break;
    case "/":
      currentValue = calculator.divide(oldValue, currentValue);
      resultText.innerHTML = currentValue;
      operator = null;
      break;
  }
});

// Keyboard

document.addEventListener("keydown", function (e) {
  if (e.key == "1") {
    if (currentValue.length < 12) {
      if (currentValue[0] == "0" && currentValue[1] != ".") {
        currentValue = "1";
        resultText.innerHTML = currentValue;
      } else {
        currentValue += "1";
        resultText.innerHTML = currentValue;
      }
    } else if (e.key == "2") {
      if (currentValue.length < 12) {
        if (currentValue[0] == "0" && currentValue[1] != ".") {
          currentValue = "2";
          resultText.innerHTML = currentValue;
        } else {
          currentValue += "2";
          resultText.innerHTML = currentValue;
        }
      }
    }
  }
});
