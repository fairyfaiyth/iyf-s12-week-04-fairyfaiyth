// Day 1: FizzBuzz
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

// Day 2: Reverse a string
function reverseLoop(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
const reverseBuiltIn = str => str.split("").reverse().join("");
console.log(reverseLoop("hello"), reverseBuiltIn("hello"));

// Day 3: Largest number (loop, then reduce)
function largestLoop(arr) {
    let largest = arr[0];
    for (const n of arr) {
        if (n > largest) largest = n;
    }
    return largest;
}
const largestReduce = arr => arr.reduce((max, n) => (n > max ? n : max), arr[0]);
console.log(largestLoop([3, 9, 2, 7]), largestReduce([3, 9, 2, 7]));

// Day 4: Remove duplicates (Set, then filter)
const uniqueSet = arr => [...new Set(arr)];
const uniqueFilter = arr => arr.filter((n, i) => arr.indexOf(n) === i);
console.log(uniqueSet([1, 2, 2, 3, 4, 4, 5]), uniqueFilter([1, 2, 2, 3, 4, 4, 5]));

// Day 5: Palindrome checker
function isPalindrome(text) {
    const cleaned = text.toLowerCase().replace(/\s/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man a plan a canal Panama"));
