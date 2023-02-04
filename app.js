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
