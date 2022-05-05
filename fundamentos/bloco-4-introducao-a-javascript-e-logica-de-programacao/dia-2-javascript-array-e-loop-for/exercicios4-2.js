let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// // Questão 1

// for (let i = 0; i < numbers.length; i ++) {
//     console.log(numbers[i]);
// }

// // Questão 2

// soma = 0;
// for (let i = 0; i < numbers.length; i++) {
//     soma += numbers[i]
// }
// console.log(soma)

// // Questão 3

// soma = 0;
// for (let i = 0; i < numbers.length; i++) {
//     soma += numbers[i]
// }
// console.log(soma/numbers.length)

// // Questão 4

// soma = 0;
// for (let i = 0; i < numbers.length; i++) {
//     soma += numbers[i]
// }
// if (soma/numbers.length > 20) {
//     console.log("valor maior que 20")
// }
// else {
//     console.log("valor menor ou igual a 20")
// }

// // Questão 5

// maiorValor = 0;
// for (let i=0;i<numbers.length;i++) {
//     if (numbers[i] > maiorValor) {
//         maiorValor = numbers[i]
//     }
// }
// console.log(maiorValor)

// // Questão 6

// numerosImpares = []
// for (let i=0;i<numbers.length;i++) {
//     if (numbers[i]%2 !== 0) {
//         numerosImpares.push(numbers[i])
//     }
// }
// console.log(numerosImpares)

// // Questão 7

// menorValor = 100;
// for (let i=0;i<numbers.length;i++) {
//     if (numbers[i] < menorValor) {
//         menorValor = numbers[i]
//     }
// }
// console.log(menorValor)

// // // Questão 8 e 9

// novaArray = []
// for (i=1;i<=25;i++) {
//     novaArray.push(i)
// }
// console.log(novaArray)

// for (i=0;i<novaArray.length;i++) {
//     console.log(novaArray[i]/2)
// }

// // Exercicio bonus

// let otherNumbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// // Ordem Crescente

// for (let i=0; i < otherNumbers.length; i++) {
//     for (let j=0; j < i; j++) {
//         if (otherNumbers[j] > otherNumbers[i]) {
//             position = otherNumbers[j];
//             otherNumbers[j] = otherNumbers[i];
//             otherNumbers[i] = position;
//         }
//     }
// }
// console.log(otherNumbers)

// // Ordem Decrescente

// for (let i=0; i < otherNumbers.length; i++) {
//     for (let j=0; j < i; j++) {
//         if (otherNumbers[j] < otherNumbers[i]) {
//             position = otherNumbers[j];
//             otherNumbers[j] = otherNumbers[i];
//             otherNumbers[i] = position;
//         }
//     }
// }
// console.log(otherNumbers)

// // Novo Array

// newArray = []
// for (let i=0; i < otherNumbers.length - 1; i++) 
//         {
//         newArray.push(otherNumbers[i] * otherNumbers[i+1]);
//     }
//     newArray.push(otherNumbers[9] * 2)
// console.log(newArray)