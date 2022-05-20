const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = (students, grades) => students.map((elem, index) => ({
    name: elem,
    average: grades[index].reduce((a, b) => a + b) / grades[index].length
}));

console.log(studentAverage(students, grades));
