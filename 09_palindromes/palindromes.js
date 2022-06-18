const palindromes = function (string) {
    const regex = /[a-z]/g;
    arr = string.toLowerCase()
        .match(regex);
    let i = 0;
    while (i < arr.length / 2) {
        if (arr[i] !== arr[arr.length - i -1]) {
            return false;
        }
        i++;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
