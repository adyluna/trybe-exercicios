const checkNumber = (number) => number === Math.floor(Math.random() * 6) ? 
"Parabéns você ganhou" : "Tente novamente";
const lottery = (myNumber, checkNumber) => checkNumber(myNumber);

console.log(checkNumber(2));