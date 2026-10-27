// Exercise 1: If/else
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(getGrade(95), getGrade(85), getGrade(72), getGrade(61), getGrade(40));

// Exercise 2: Switch
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day";
    }
}

console.log(getDayName(0), getDayName(4), getDayName(9));

// Exercise 3: Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// Challenges
console.log("Even numbers 1-50:");
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

console.log("FizzBuzz:");
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

console.log("Star triangle:");
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}
