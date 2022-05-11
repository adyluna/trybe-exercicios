const countDisplay = document.querySelector('#display-count');
const botao = document.querySelector('#click-button');
let count = 0;

botao.addEventListener('click', () => {
    count =+ 1;
    countDisplay.innerText = `Já somamos ${count} clicks!`
});