const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const containsA = (arr) => arr.reduce((a, b) => a + b)
  .split('')
  .reduce((a, b) => b === 'a' || b === 'A' ? a + b : a, '')
  .length;

console.log(containsA(names));