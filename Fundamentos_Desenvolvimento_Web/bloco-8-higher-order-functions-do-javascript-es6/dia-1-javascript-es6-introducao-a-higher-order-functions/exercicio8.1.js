const newEmployees = () => {
    const employees = {
      id1: nameIntoEmail('Pedro Guerra'),
      id2: nameIntoEmail('Luiza Drumond'),
      id3: nameIntoEmail('Carla Paiva'),
    }
    return employees;
  };

const nameIntoEmail = (name) => `${name.replace(' ', '_').toLowerCase()}@trybe.com`;

console.log(newEmployees());