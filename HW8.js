function updateButtonText() {
    const operator = document.getElementById('operator').value;
    const button = document.getElementById('calculateButton');

    switch (operator) {
        case '+':
            button.textContent = 'Add';
            break;
        case '-':
            button.textContent = 'Minus';
            break;
        case '*':
            button.textContent = 'Times';
            break;
        case '/':
            button.textContent = 'Divided';
            break;
        default:
            button.textContent = 'Calculate';
    }
}

function calculate() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(number1) || isNaN(number2)) {
        resultDiv.textContent = "Result = Invalid input";
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = add(number1, number2);
            break;
        case '-':
            result = subtract(number1, number2);
            break;
        case '*':
            result = multiply(number1, number2);
            break;
        case '/':
            result = divide(number1, number2);
            break;
        default:
            resultDiv.textContent = "Result = Invalid operation";
            return;
    }

    resultDiv.textContent = `Result = ${result.toFixed(2)}`;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {   
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}