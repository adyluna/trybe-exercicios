function encode(str) {
    let chars = {'a':'1','e':'2','i':'3','o':'4','u':'5'};
    newStr = str.replace(/[aeiou]/g, m => chars[m])
    return newStr
  }

module.exports = encode;