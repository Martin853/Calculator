// Calculator Functions
let calculator = {
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

// Main Variables
const resultText = document.querySelector(".text-box-paragraph");
const ac = document.querySelector(".ac");
const del = document.querySelector(".del");
const plusMinus = document.querySelector(".plus-minus");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const comma = document.querySelector(".comma");
const equal = document.querySelector(".equal");
const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");

// Calculator Values
let numOne = 0;
let numTwo = 0;
let result = 0;
let typingFirstNumber = true;
let firstCommaUsed = false;
let secondCommaUsed = false;
let operator;

// Calculator Button Functions

// AC Button
ac.addEventListener("click", function () {
  resultText.textContent = "0";
  numOne = "0";
  numTwo = "0";
  result = "0";
  firstCommaUsed = false;
  secondCommaUsed = false;
});

// Equal Button
equal.addEventListener("click", function () {
  if (operator == "+") {
    result = calculator.add(numOne, numTwo);
    resultText.textContent = result;
    numOne = "0";
    numTwo = "0";
    result = "0";
    firstCommaUsed = false;
    secondCommaUsed = false;
  }
  if (operator == "-") {
    result = calculator.substract(numOne, numTwo);
    resultText.textContent = result;
    numOne = "0";
    numTwo = "0";
    result = "0";
    firstCommaUsed = false;
    secondCommaUsed = false;
  }
  if (operator == "*") {
    result = calculator.multiply(numOne, numTwo);
    resultText.textContent = result;
    numOne = "0";
    numTwo = "0";
    result = "0";
    firstCommaUsed = false;
    secondCommaUsed = false;
  }
  if (operator == "/") {
    result = calculator.divide(numOne, numTwo);
    resultText.textContent = result;
    numOne = "0";
    numTwo = "0";
    result = "0";
    firstCommaUsed = false;
    secondCommaUsed = false;
  }
});

// One
one.addEventListener("click", function () {
  if (typingFirstNumber == true) {
    if (numOne == "0") {
      numOne = "1";
      resultText.textContent = numOne;
    } else {
      numOne.toString();
      numOne = numOne + "1";
      resultText.textContent = numOne;
    }
  } else {
    if (numTwo == "0") {
      numTwo = "1";
      resultText.textContent = numTwo;
    } else {
      numTwo.toString();
      numTwo = numTwo + "1";
      resultText.textContent = numTwo;
    }
  }
});

// Two
two.addEventListener("click", function () {
  if (typingFirstNumber == true) {
    if (numOne == "0") {
      numOne = "2";
      resultText.textContent = numOne;
    } else {
      numOne.toString();
      numOne = numOne + "2";
      resultText.textContent = numOne;
    }
  } else {
    if (numTwo == "0") {
      numTwo = "2";
      resultText.textContent = numTwo;
    } else {
      numTwo.toString();
      numTwo = numTwo + "2";
      resultText.textContent = numTwo;
    }
  }
});

// Three
three.addEventListener("click", function () {
  if (typingFirstNumber == true) {
    if (numOne == "0") {
      numOne = "3";
      resultText.textContent = numOne;
    } else {
      numOne.toString();
      numOne = numOne + "3";
      resultText.textContent = numOne;
    }
  } else {
    if (numTwo == "0") {
      numTwo = "3";
      resultText.textContent = numTwo;
    } else {
      numTwo.toString();
      numTwo = numTwo + "3";
      resultText.textContent = numTwo;
    }
  }
});

// Four
four.addEventListener("click", function () {
  if (typingFirstNumber == true) {
    if (numOne == "0") {
      numOne = "4";
      resultText.textContent = numOne;
    } else {
      numOne.toString();
      numOne = numOne + "4";
      resultText.textContent = numOne;
    }
  } else {
    if (numTwo == "0") {
      numTwo = "4";
      resultText.textContent = numTwo;
    } else {
      numTwo.toString();
      numTwo = numTwo + "4";
      resultText.textContent = numTwo;
    }
  }
});

// Five
five.addEventListener("click", function () {
  if (typingFirstNumber == true) {
    if (numOne == "0") {
      numOne = "5";
      resultText.textContent = numOne;
    } else {
      numOne.toString();
      numOne = numOne + "5";
      resultText.textContent = numOne;
    }
  } else {
    if (numTwo == "0") {
      numTwo = "5";
      resultText.textContent = numTwo;
    } else {
      numTwo.toString();
      numTwo = numTwo + "5";
      resultText.textContent = numTwo;
    }
  }
});

// Six
six.addEventListener("click", function () {
  if (typingFirstNumber == true) {
    if (numOne == "0") {
      numOne = "6";
      resultText.textContent = numOne;
    } else {
      numOne.toString();
      numOne = numOne + "6";
      resultText.textContent = numOne;
    }
  } else {
    if (numTwo == "0") {
      numTwo = "6";
      resultText.textContent = numTwo;
    } else {
      numTwo.toString();
      numTwo = numTwo + "6";
      resultText.textContent = numTwo;
    }
  }
});

// Seven
seven.addEventListener("click", function () {
  if (typingFirstNumber == true) {
    if (numOne == "0") {
      numOne = "7";
      resultText.textContent = numOne;
    } else {
      numOne.toString();
      numOne = numOne + "7";
      resultText.textContent = numOne;
    }
  } else {
    if (numTwo == "0") {
      numTwo = "7";
      resultText.textContent = numTwo;
    } else {
      numTwo.toString();
      numTwo = numTwo + "7";
      resultText.textContent = numTwo;
    }
  }
});

// Eight
eight.addEventListener("click", function () {
  if (typingFirstNumber == true) {
    if (numOne == "0") {
      numOne = "8";
      resultText.textContent = numOne;
    } else {
      numOne.toString();
      numOne = numOne + "8";
      resultText.textContent = numOne;
    }
  } else {
    if (numTwo == "0") {
      numTwo = "8";
      resultText.textContent = numTwo;
    } else {
      numTwo.toString();
      numTwo = numTwo + "8";
      resultText.textContent = numTwo;
    }
  }
});

// Nine
nine.addEventListener("click", function () {
  if (typingFirstNumber == true) {
    if (numOne == "0") {
      numOne = "9";
      resultText.textContent = numOne;
    } else {
      numOne.toString();
      numOne = numOne + "9";
      resultText.textContent = numOne;
    }
  } else {
    if (numTwo == "0") {
      numTwo = "9";
      resultText.textContent = numTwo;
    } else {
      numTwo.toString();
      numTwo = numTwo + "9";
      resultText.textContent = numTwo;
    }
  }
});

// Zero
zero.addEventListener("click", function () {
  if (typingFirstNumber == true) {
    if (numOne == "0") {
      numOne = "0";
      resultText.textContent = numOne;
    } else {
      numOne += "0";
      resultText.textContent = numOne;
    }
  } else {
    if (numTwo == "0") {
      numTwo = "0";
      resultText.textContent = numTwo;
    } else {
      numTwo += "0";
      resultText.textContent = numTwo;
    }
  }
});

// Delete Button
del.addEventListener("click", function () {
  if (typingFirstNumber == true) {
    if (numOne[numOne.length - 1] == ".") {
      firstCommaUsed = false;
    }
    if (numOne != "0" && numOne.length > 0) {
      numOne = numOne.substring(0, numOne.length - 1);
      resultText.textContent = numOne;
    }
  } else {
    if (numTwo[numTwo.length - 1] == ".") {
      secondCommaUsed = false;
    }
    if (numTwo != "0" && numTwo.length > 0) {
      numTwo = numTwo.substring(0, numTwo.length - 1);
      resultText.textContent = numTwo;
    }
  }
});

// Plus Minus
plusMinus.addEventListener("click", function () {
  if (typingFirstNumber == true) {
    if (numOne != 0) {
      numOne = parseFloat(numOne);
      numOne *= -1;
      numOne.toString();
      resultText.textContent = numOne;
    }
  } else {
    if (numTwo != 0) {
      numTwo = parseFloat(numTwo);
      numTwo *= -1;
      numTwo.toString();
      resultText.textContent = numTwo;
    }
  }
});

// Comma
comma.addEventListener("click", function () {
  if (typingFirstNumber == true) {
    if (firstCommaUsed == false) {
      numOne += ".";
      firstCommaUsed = true;
      resultText.textContent = numOne;
    }
  } else {
    if (secondCommaUsed == false) {
      numTwo += ".";
      firstCommaUsed = true;
      resultText.textContent = numTwo;
    }
  }
});
