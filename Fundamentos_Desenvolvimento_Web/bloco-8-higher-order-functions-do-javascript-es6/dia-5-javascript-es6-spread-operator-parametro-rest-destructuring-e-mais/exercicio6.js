const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = (arr) => {
    const [carro, marca, ano] = arr;
    return {
        carro,
        marca,
        ano,
    }
};

console.log(toObject(palio));