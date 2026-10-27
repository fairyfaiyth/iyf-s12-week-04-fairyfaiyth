const gradeTracker = {
    students: [],

    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    getStudent(name) {
        const found = this.students.find(s => s.name === name);
        return found || null;
    },

    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const values = Object.values(student.grades);
        return values.reduce((total, g) => total + g, 0) / values.length;
    },

    getSubjectAverage(subject) {
        const scores = this.students
            .filter(s => subject in s.grades)
            .map(s => s.grades[subject]);
        if (scores.length === 0) return null;
        return scores.reduce((total, g) => total + g, 0) / scores.length;
    },

    getTopStudent() {
        let top = null;
        let topAverage = -1;
        for (const s of this.students) {
            const avg = this.getStudentAverage(s.name);
            if (avg > topAverage) {
                topAverage = avg;
                top = s;
            }
        }
        return top;
    },

    getStrugglingStudents() {
        return this.students.filter(s => this.getStudentAverage(s.name) < 70);
    },

    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return `No student named ${name}`;
        let report = `Report card for ${student.name}\n`;
        for (const [subject, score] of Object.entries(student.grades)) {
            report += `${subject}: ${score} (${this.getLetterGrade(score)})\n`;
        }
        const avg = this.getStudentAverage(name);
        report += `Average: ${avg.toFixed(1)} (${this.getLetterGrade(avg)})`;
        return report;
    }
};

// Test
gradeTracker.addStudent("Mwende", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Baraka", { math: 72, english: 65, science: 60 });
gradeTracker.addStudent("Zawadi", { math: 60, english: 55, science: 68 });

console.log(gradeTracker.getStudentAverage("Mwende"));
console.log(gradeTracker.getSubjectAverage("math"));
console.log(gradeTracker.getTopStudent());
console.log(gradeTracker.getStrugglingStudents());
console.log(gradeTracker.generateReportCard("Mwende"));
console.log(gradeTracker.getStudent("Nobody"));
