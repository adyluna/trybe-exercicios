const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

function addShift(object, turno, value) {
    object[turno] = value;
}

addShift(lesson2, 'turno', 'noite');

const showKeys = (object) => Object.keys(object);
const showLenght = (object) => Object.keys(object).length;
const showValues = (object) => Object.values(object);
const collection = {lesson1, lesson2, lesson3};
const allLessons = Object.assign({}, collection);

const studentsNumber = (object) => {
    const myObj = Object.values(object);
    let totalStudentesNumber = 0;
    for(let i = 0; i < myObj.length; i += 1) {
        console.log(`Na aula ${i+1} houve um total de ${myObj[i].numeroEstudantes} alunos`);
        totalStudentesNumber += myObj[i].numeroEstudantes;
    }
    return `
O número total de estudantes
em todas as aulas foi de ${totalStudentesNumber}`
}

const requeriedValue = (object, index) => Object.values(object)[index]

const hasProp = (object, key, value) => object.hasOwnProperty(key) 
&& object[key] === value ? true : false

// Bonus1
const studentsPerLesson = (object, key, value, key2) => {
    let total = 0;
    for (lessons in object) {
        if (object[lessons][key] === value) {
            total += object[lessons][key2];
        }
    } return total
}

// Bonus2
const createReport = (object, professor, professorName, materia, number) => {
    let total = 0;
    const lessonsArr = [];
    for (lessons in object) {
        if (object[lessons][professor] === professorName) {
            total += object[lessons][number];
            lessonsArr.push(object[lessons][materia]);
        }
    } 
    const report = {
        'professor': professorName,
        'aulas': lessonsArr,
        'estudantes': total,
    };
    return report
}

console.log(studentsNumber(allLessons));
console.log(requeriedValue(lesson1, 0));
console.log(hasProp(lesson1, 'turno', 'manhã'));
console.log(studentsPerLesson(allLessons, 'materia', 'Matemática', 'numeroEstudantes'));
console.log(createReport(allLessons, 'professor', 'Maria Clara', 'materia', 'numeroEstudantes'));
