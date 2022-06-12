const removeFromArray = function(array, ...args) {
    const result = array;

    for (const element of args) {
        let index = result.indexOf(element);

        if (index !== -1) {
            result.splice(index, 1);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
