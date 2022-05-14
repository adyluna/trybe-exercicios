function hydrate(str) {
    var r = /\d+/g;
    strNumbers = str.match(r);
    let total = 0
    for (let i = 0; i < strNumbers.length; i++) {
      total += parseInt(strNumbers[i])
    }
    
    if (total != 1) {
      return `${total} copos de água`
    }
    else {
      return `${total} copo de água`
    }
};

module.exports = hydrate;