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

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            return num1 % num2;
        case "**":
            return num1 ** num2;
        default:
            return "Invalid operator";
    }
}

console.log(calculate(10, "+", 5));
console.log(calculate(10, "-", 5));
console.log(calculate(10, "*", 5));
console.log(calculate(10, "/", 5));
console.log(calculate(10, "/", 0));
console.log(calculate(10, "%", 3));
console.log(calculate(2, "**", 3));
console.log(calculate(10, "^", 5));
