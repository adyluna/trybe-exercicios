// Dados
const professionalBoard = [
    {
      id: '8579-6',
      firstName: 'Ana',
      lastName: 'Gates',
      specialities: ['UX', 'Design'],
    },
    {
      id: '5569-4',
      firstName: 'George',
      lastName: 'Jobs',
      specialities: ['Frontend', 'Redux', 'React', 'CSS'],
    },
    {
      id: '4456-4',
      firstName: 'Leila',
      lastName: 'Zuckerberg',
      specialities: ['Context API', 'RTL', 'Bootstrap'],
    },
    {
      id: '1256-4',
      firstName: 'Linda',
      lastName: 'Bezos',
      specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
    },
    {
      id: '9852-2-2',
      firstName: 'Jeff',
      lastName: 'Cook',
      specialities: ['Ruby', 'SQL'],
    },
    {
      id: '4678-2',
      firstName: 'Paul',
      lastName: 'Dodds',
      specialities: ['Backend'],
    },
  ];
  
  const searchEmployee = (id, detail) => {
    for (let i = 0; i < professionalBoard.length; i += 1) {
      if (professionalBoard[i].id === id) {
        // if (!(professionalBoard[i].hasOwnProperty(detail))) {
        //   throw new Error('Informação indisponível')
        // }
        if (!([detail] in professionalBoard[i])) {
          throw new Error('Informação indisponível')
        } 
        return professionalBoard[i][detail];
      }
    } 
    throw new Error('ID não identificada');
  };

console.log(searchEmployee('5569-4', 'lastName'));

module.exports = searchEmployee;