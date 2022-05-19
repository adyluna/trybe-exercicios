const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkResults = (arr1, arr2) => {
    let count = 0;
    for (let i = 0; i < arr1.length; i += 1) {
        if (arr2[i] === arr1[i]) {
            count += 1;
        } 
        else if (arr2[i] === 'N.A') {
            count += 0;
        } 
        else {
            count -= 0.5;
        }
    } return count
};

const result = (rightAnswers, studentAnswers, checkResults) => checkResults(rightAnswers, studentAnswers);

console.log(result(RIGHT_ANSWERS, STUDENT_ANSWERS, checkResults));