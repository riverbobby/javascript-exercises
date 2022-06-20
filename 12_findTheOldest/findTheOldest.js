const findTheOldest = function(arr) {
    const sorted = [...arr];
    sorted.sort((a, b) => {
        let aEnd = 0;
        let bEnd = 0;
        if (a.yearOfDeath === undefined) {
            aEnd = new Date().getFullYear();
        }else {
            aEnd = a.yearOfDeath;
        }
        if (b.yearOfDeath === undefined) {
            bEnd = new Date().getFullYear();
        }else {
            bEnd = b.yearOfDeath;
        }
        return ((bEnd - b.yearOfBirth) - (aEnd - a.yearOfBirth));
    });
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
