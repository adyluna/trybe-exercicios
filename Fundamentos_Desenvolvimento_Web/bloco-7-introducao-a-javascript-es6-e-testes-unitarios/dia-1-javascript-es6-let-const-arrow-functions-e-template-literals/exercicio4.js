const longestWord = (frase) => {
    let longest = '';
    let count = 0;
    let toSort = frase.split(' ');
    for (let i = 0; i < toSort.length; i += 1) {
        if (toSort[i].length > count) {
            count = toSort[i].length;
            longest = toSort[i];
        }
    }
    return longest;
}


console.log(longestWord('bla blaaa blaaaaaaa blerg drew ady'))

