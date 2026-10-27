// Exercise 1: Number operations
let a = 10;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

let count = 0;
count++;
console.log(count);
count--;
console.log(count);

// Exercise 2: String operations
let firstName = "Faith";
let lastName = "Mutisya";
let fullName = firstName + " " + lastName;
let greeting = `Hello, ${firstName}!`;
let message = `${firstName} has ${firstName.length} letters`;
console.log(greeting);
console.log(message);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Faith"));

// Exercise 3: Comparison and logical operators
console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 !== 3);
console.log(true && true);
console.log(true || false);
console.log(!true);

// Challenge
const myAge = 22;
const birthYear = 2004;
const ageInDays = myAge * 365;
const ageInHours = ageInDays * 24;
const yearTurning100 = birthYear + 100;

console.log(`My age in days (approx): ${ageInDays}`);
console.log(`My age in hours (approx): ${ageInHours}`);
console.log(`I will turn 100 in the year ${yearTurning100}`);
