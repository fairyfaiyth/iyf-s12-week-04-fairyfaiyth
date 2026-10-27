// Exercise 1: Object basics
const person = {
    firstName: "Faith",
    lastName: "Mutisya",
    age: 22,
    isStudent: true,
    hobbies: ["reading", "swimming"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.city);

person.age = 22;
person.phone = "0790524216";
delete person.isStudent;
console.log(person);

// Exercise 2: Object methods
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply: (a, b) => a * b
};

console.log(calculator.add(5, 3));
console.log(calculator.subtract(5, 3));
console.log(calculator.multiply(5, 3));

// Exercise 3: Object iteration
const scores = {
    math: 95,
    english: 88,
    science: 92
};

console.log(Object.keys(scores));
console.log(Object.values(scores));
console.log(Object.entries(scores));

for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}
