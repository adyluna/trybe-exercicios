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

const studentsPerLesson = (object, key, value) => object.hasOwnProperty(key) 
&& object[key] === value ? true : false

console.log(studentsNumber(allLessons));
console.log(requeriedValue(lesson1, 0));
console.log(hasProp(lesson1, 'turno', 'manhã'));
