let previousValue = '';
let currentValue = '';
let previousScreen = document.querySelector('.previous');
let currentScreen = document.querySelector('.current');
let operator = '';

const numberKeys = document.querySelectorAll('.number');
const operatorKeys = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

numberKeys.forEach((num) => num.addEventListener('click', function(e) {
  handleNumber(e.target.textContent);
}));

operatorKeys.forEach((op) => op.addEventListener('click', function(e) {
  handleOperator(e.target.textContent);
  previousScreen.textContent = previousValue + ' ' + operator;
  currentScreen.textContent = '';
}));

clear.addEventListener('click', function() {
  currentValue = '';
  previousValue = '';
  currentScreen.textContent = currentValue;
  previousScreen.textContent = previousValue;
})

function handleNumber(num) {
  if (currentValue.length <= 9) {
    currentValue += num;
    currentScreen.textContent = currentValue;
  }
}

function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = '';
}

