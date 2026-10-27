// Exercise 2: Build these functions
function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    const parts = fullName.split(" ");
    return parts[0].charAt(0) + parts[1].charAt(0);
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(calculateArea(5, 4));
console.log(celsiusToFahrenheit(25));
console.log(isEven(8), isEven(7));
console.log(getInitials("Faith Mutisya"));
console.log(reverseString("hello"));

// Exercise 3: Default parameters
function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet());
console.log(greet("Faith"));
console.log(greet("Faith", "Hi"));

// Build: calculateTip
function calculateTip(bill, tipPercent = 15) {
    return bill * tipPercent / 100;
}

console.log(calculateTip(1000));
console.log(calculateTip(1000, 20));
