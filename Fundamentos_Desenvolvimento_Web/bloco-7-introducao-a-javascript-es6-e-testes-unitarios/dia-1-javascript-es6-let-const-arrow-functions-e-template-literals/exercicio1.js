let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
let elseScope = 'Não devo ser utilizada fora meu escopo (else)';

// const testingScope = (escopo) => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//   }

//   testingScope(true);

const testingScope = (escopo) => ( escopo ? `${ifScope} ótimo, fui utilizada no escopo !` : elseScope);
console.log(testingScope(false));