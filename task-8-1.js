// Exercise 1: Array basics
const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);
console.log(fruits.length);

fruits.push("grape");
fruits.unshift("mango");
console.log(fruits);
fruits.pop();
fruits.shift();
console.log(fruits);

// Exercise 2: Array methods
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num * 2));
const doubled = numbers.map(num => num * 2);
const evenNumbers = numbers.filter(num => num % 2 === 0);
const firstEven = numbers.find(num => num % 2 === 0);
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(doubled, evenNumbers, firstEven, sum);
console.log(numbers.includes(3));

// Build
const mixed = [5, -3, 12, 8, -1, 20];
console.log(mixed.map(n => n * 2));
console.log(mixed.filter(n => n >= 0));
console.log(mixed.find(n => n > 10));
console.log(mixed.reduce((product, n) => product * n, 1));
