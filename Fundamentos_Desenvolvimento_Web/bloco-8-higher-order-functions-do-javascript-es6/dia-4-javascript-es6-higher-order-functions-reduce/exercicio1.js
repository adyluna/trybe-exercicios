const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
const flatten = (arr) => arr.reduce((a, b) => [a + b]);
console.log(flatten(arrays));