const API_URL = 'https://api.coincap.io/v2/assets';

const myList = document.querySelector('#myList');

const fetchCrypto = () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };
    
    fetch(API_URL, myObject)
      .then(response => response.json())
      .then(data => console.log(Object.values(data)[0]
        .filter(({ rank }) => rank <= 10)
        .map(({ name, symbol, priceUsd }) => {
            const cryptCoin = document.createElement('li');
            cryptCoin.innerText = `${name} (${symbol}): ${priceUsd}`;
            myList.appendChild(cryptCoin);
        })));
};

window.onload = () => fetchCrypto();