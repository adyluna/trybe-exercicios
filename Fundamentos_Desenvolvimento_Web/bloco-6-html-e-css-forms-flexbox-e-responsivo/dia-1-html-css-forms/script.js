const button = document.querySelector('#submit-button');
let fullName = document.querySelector('#full-name');
const change = document.querySelector('#testando');

function getName(event) {
    event.preventDefault();
    change.innerHTML = fullName.value;
}
button.addEventListener('click', getName)