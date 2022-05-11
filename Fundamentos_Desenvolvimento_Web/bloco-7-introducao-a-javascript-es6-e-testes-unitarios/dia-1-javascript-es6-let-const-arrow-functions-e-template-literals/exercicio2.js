const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortedNumbers = (numbers) => `Os números ${numbers.sort(function(a, b){return a-b})} se enontram ordenados de forma crescente!`

console.log(sortedNumbers(oddsAndEvens));