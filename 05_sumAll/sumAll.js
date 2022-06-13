const sumAll = function(num1, num2) { 
    let small = 0;
    let large = 0;
    let result = 0;

    if (typeof num1 !== 'number'|| typeof num2 !== 'number' || num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    if (num1 < num2) {
        small = num1;
        large = num2;        
    } else {
        small = num2;
        large = num1;
    }

    for (let i = small; i <= large; i++) {
        result += i;
    }
    return result;

};

// Do not edit below this line
module.exports = sumAll;
