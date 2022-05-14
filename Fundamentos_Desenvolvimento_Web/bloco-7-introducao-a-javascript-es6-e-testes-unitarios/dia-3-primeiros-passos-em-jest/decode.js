function decode(str) {
    let chars = {'1':'a','2':'e','3':'i','4':'o','5':'u'};
    let newStr = str.replace(/[12345]/g, m => chars[m])
    return newStr
}

module.exports = decode;