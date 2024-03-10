const display = document.querySelector("#display-result");
let decimalCount = 0; // Keeps track of decimal points

// handling percentage
function handlePercentage(currentValue) {
  // Match the last operator and the number/s after it. For example it would match '/55' from this expression: '6*6*5/55'. It will also handle cases where the number after the last operator includes a decimal point. Which implies it will match '+2.2' from this expression: "44+2.2" correctly.
  const matchLastOp = /[+\-*\/]\d*\.?\d*$/;
  // Gets the index value of the last operator
  const lastOpIndex = currentValue.search(matchLastOp);
  // slice from the last operator to the end example, +n
  const lastNumAndOp = currentValue.slice(lastOpIndex);
  const lastOp = lastNumAndOp.slice(0, 1); // Gets the last operator

  // if the last operator is either '*' or '/' do if part. Example 6*6*5/55
  if (lastOp === "*" || lastOp === "/") {
    // Extracting the number after the last operator. If the string is: '6*6/5*33/55', lastOpIndex is the index value of the last operator then we are adding 1 to it, making the desired index number in order to slice the '55' out of '/55'
    const PercentOf = currentValue.slice(lastOpIndex + 1);
    // Since we need to replace PercentOf with 'PercentOf/100' and there might be cases where the PercentOf is repeated in the string, we know the replace method replaces the first occurrence of the same value. To counter this, we created a regex out the PercentOf by adding '$' quantifier to match the last occurrence of the PercentOf. For example, if the expression is: '5*55/5', without the regex, it will be '(5/100)*55/5', which is incorrect. With regex, it will correctly replace the last '5' with '5/100' making the expression as: '5*55/(5/100)'
    const lastPercentOf = new RegExp(PercentOf + "$");
    currentValue = currentValue.replace(lastPercentOf, `(${PercentOf}/100)`);
  } else if (lastOp === "+" || lastOp === "-") {
    let PercentOf = lastNumAndOp.slice(1); // Remove the operator from +n
    PercentOf = `(${PercentOf}/100)`; // (n/100)
    const firstPart = currentValue.slice(0, lastOpIndex); // 'n+n-n+nn-n';
    const exp = `(${firstPart})${lastOp}((${firstPart})*${PercentOf})`;
    currentValue = exp;
  } else {
    currentValue += "/100"; // else part evaluates n%
  }
  display.value = currentValue;
  calculateResult();
  decimalCount++;
}

// handling operators
function handleOperatorClick(op) {
  const currentOperator = op.target.value;
  let currentValue = display.value;
  const Symbols = ["+", "-", "*", "/", "%", "."];
  const lastValue = currentValue.slice(-1);
  const isLastValueSymbol = Symbols.includes(lastValue);

  if (currentValue === "Error") {
    display.value = 0;
    return;
  }

  // This Regex matches the last occurrence of the same operator in the replace method. If the current display value is "9*5*" and the current entered operator is '+', without the Regex, it would replace the first "*", making the display value as "9+5*".
  const lastOperator = new RegExp("\\" + lastValue + "$", "g");
  const secondLastValue = currentValue.slice(-2, -1);
  const lastTwoValues = currentValue.slice(-2);
  const isSecondLastValueSymbol = Symbols.includes(secondLastValue);

  // Check if the last value or the last two values are symbols, and then replace them with the current operator. If the last value is not a symbol, it simply appends the current operator to the display value. Example, If the current value is '2+.' and the current operator is '*', '+.' will be replaced by the current operator i.e., current value becomes: '2*'
  if (isLastValueSymbol && isSecondLastValueSymbol) {
    currentValue = currentValue.replace(lastTwoValues, currentOperator);
  } else if (isLastValueSymbol) {
    currentValue = currentValue.replace(lastOperator, currentOperator);
  } else currentValue += currentOperator;

  if (currentOperator === "%") {
    // Removing the '%' symbol from the currentValue
    currentValue = currentValue.slice(0, -1);
    handlePercentage(currentValue);
  } else {
    display.value = currentValue;
    decimalCount = 0; // Reset decimal count for next number
  }
}

// handling number clicks
function handleNumberClick(e) {
  if (display.value === "Error") {
    display.value = 0;
  }
  const currentNumber = e.target.value;
  // Check if the current input is a decimal point
  if (currentNumber === ".") {
    const firstValue = display.value.slice(0, 1);
    const lastValue = display.value.slice(-1);
    // Check if the display value already contains a decimal point. If not, append the decimal point to the current display value
    if (
      (firstValue === "0" && decimalCount < 1) ||
      (lastValue !== "." && decimalCount < 1)
    ) {
      display.value += currentNumber;
      decimalCount++;
    }
  } else {
    // If the current display value is '0', replace it with the current number, else append the current number to the display value
    display.value =
      display.value === "0" ? currentNumber : display.value + currentNumber;
  }
}

function calculateResult() {
  const expression = display.value;
  console.log(expression);

  // Don't eval if the last value is 0 (i.e., no expression exists), a decimal point or an operator, except '%' symbol
  const symbols = ["+", "-", "*", "/", "."];
  const lastValue = symbols.includes(expression.slice(-1));
  if (expression === "0" || lastValue || expression === "Error") {
    return;
  } else
    try {
      const result = eval(expression);
      display.value = isNaN(result) ? "Error" : result; // if 0/0, throw Error else result.
    } catch (error) {
      display.value = "Error";
    }
}

function clearInput(cl) {
  const currentClearButton = cl.target.value;
  if (currentClearButton === "AC") {
    display.value = 0;
  } else {
    display.value =
      display.value === "Error"
        ? (display.value = 0)
        : display.value.slice(0, -1);
    if (display.value.length < 1) {
      display.value = 0;
    }
  }
  decimalCount = 0; // Reset decimal count after clearing
}

// number buttons handling
const Numbers = document.querySelectorAll(".key");
Numbers.forEach((num) => {
  num.addEventListener("click", handleNumberClick);
});

// operator keys handling
const Operators = document.querySelectorAll(".operator");
Operators.forEach((operatorKey) => {
  operatorKey.addEventListener("click", handleOperatorClick);
});

// clearing display
const Clear = document.querySelectorAll(".input-clear");
Clear.forEach((clearButton) => {
  clearButton.addEventListener("click", clearInput);
});

// calculating result
const Calculate = document.querySelector("#equal");
Calculate.addEventListener("click", calculateResult);
