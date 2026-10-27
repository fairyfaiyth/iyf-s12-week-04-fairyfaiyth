const students = [
    { name: "Mwende", age: 22, grade: 85, major: "CS" },
    { name: "Baraka", age: 20, grade: 72, major: "Math" },
    { name: "Zawadi", age: 23, grade: 90, major: "CS" },
    { name: "Juma", age: 21, grade: 88, major: "Physics" },
    { name: "Neema", age: 22, grade: 95, major: "CS" }
];

// 1. All student names
const names = students.map(s => s.name);
console.log(names);

// 2. Grade > 80
const highAchievers = students.filter(s => s.grade > 80);
console.log(highAchievers.map(s => s.name));

// 3. Find one student by name
const zawadi = students.find(s => s.name === "Zawadi");
console.log(zawadi);

// 4. Average grade
const avgGrade = students.reduce((total, s) => total + s.grade, 0) / students.length;
console.log(avgGrade);

// 5. CS majors only
const csMajors = students.filter(s => s.major === "CS");
console.log(csMajors.map(s => s.name));

// 6. Sort by grade, highest first
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log(sortedByGrade.map(s => `${s.name}: ${s.grade}`));

// 7. Any student with grade > 90?
const hasTopStudent = students.some(s => s.grade > 90);
console.log(hasTopStudent);

// 8. All students passing (grade >= 60)?
const allPassing = students.every(s => s.grade >= 60);
console.log(allPassing);
