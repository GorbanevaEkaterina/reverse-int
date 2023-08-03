module.exports = function reverse(n) {
    let m = n;
    if (n < 0) {
        m = m * -1;
    }
    const result = m.toString().split('').reverse().join('');
    return result;
}


