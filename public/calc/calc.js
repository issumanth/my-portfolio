const display = document.getElementById("display");
const operation = document.getElementById("operation");

const calculatorState = {
  value: "0",
  operator: null,
  waitingForSecondOperand: false,
  previousValue: null,
};

function updateDisplay() {
  display.value = calculatorState.value;
  if (calculatorState.previousValue != null && calculatorState.operator) {
    operation.textContent = `${calculatorState.previousValue} ${calculatorState.operator}`;
  } else {
    operation.textContent = "";
  }
}

function inputDigit(digit) {
  if (calculatorState.waitingForSecondOperand) {
    calculatorState.value = digit;
    calculatorState.waitingForSecondOperand = false;
  } else {
    calculatorState.value =
      calculatorState.value === "0" ? digit : calculatorState.value + digit;
  }
  updateDisplay();
}

function inputDecimal() {
  if (calculatorState.waitingForSecondOperand) {
    calculatorState.value = "0.";
    calculatorState.waitingForSecondOperand = false;
    updateDisplay();
    return;
  }

  if (!calculatorState.value.includes(".")) {
    calculatorState.value += ".";
  }
  updateDisplay();
}

function allClear() {
  calculatorState.value = "0";
  calculatorState.previousValue = null;
  calculatorState.operator = null;
  calculatorState.waitingForSecondOperand = false;
  updateDisplay();
}

function deleteLastChar() {
  if (calculatorState.waitingForSecondOperand) {
    // if operator was just chosen, delete acts as cancel operator
    calculatorState.operator = null;
    calculatorState.waitingForSecondOperand = false;
    updateDisplay();
    return;
  }

  calculatorState.value = calculatorState.value.slice(0, -1) || "0";
  updateDisplay();
}

function toggleSign() {
  if (calculatorState.value === "0") return;
  calculatorState.value =
    calculatorState.value.charAt(0) === "-"
      ? calculatorState.value.slice(1)
      : "-" + calculatorState.value;
  updateDisplay();
}

function percent() {
  const currentValue = parseFloat(calculatorState.value);
  if (Number.isFinite(currentValue)) {
    calculatorState.value = String(currentValue / 100);
    updateDisplay();
  }
}

function performCalculation(firstOperand, secondOperand, operator) {
  const a = parseFloat(firstOperand);
  const b = parseFloat(secondOperand);
  if (!Number.isFinite(a) || !Number.isFinite(b)) return "0";

  switch (operator) {
    case "+":
      return String(a + b);
    case "-":
      return String(a - b);
    case "*":
      return String(a * b);
    case "/":
      return b === 0 ? "Error" : String(a / b);
    default:
      return secondOperand;
  }
}

function chooseOperator(nextOperator) {
  const { value, operator, waitingForSecondOperand, previousValue } = calculatorState;

  if (operator && calculatorState.waitingForSecondOperand) {
    calculatorState.operator = nextOperator;
    return;
  }

  if (previousValue == null && Number.isFinite(parseFloat(value))) {
    calculatorState.previousValue = value;
  } else if (operator) {
    const result = performCalculation(previousValue, value, operator);
    calculatorState.value = result;
    calculatorState.previousValue = result === "Error" ? null : result;
  }

  calculatorState.waitingForSecondOperand = true;
  calculatorState.operator = nextOperator;
  updateDisplay();
}

function compute() {
  if (calculatorState.operator == null || calculatorState.waitingForSecondOperand) {
    return;
  }

  const result = performCalculation(
    calculatorState.previousValue,
    calculatorState.value,
    calculatorState.operator
  );

  calculatorState.value = result;
  calculatorState.previousValue = null;
  calculatorState.operator = null;
  calculatorState.waitingForSecondOperand = false;
  updateDisplay();
}

updateDisplay();
