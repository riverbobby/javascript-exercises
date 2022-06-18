const fibonacci = function(num) {
    let fib = +num;
    if (fib < 1) return 'OOPS';
    prevNum = 1;
    result = 1;//
    for (let i = 3; i <= fib; i++) {
        let tempNum = result;
        result = result + prevNum;
        prevNum = tempNum;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
