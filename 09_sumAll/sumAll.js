const sumAll = (a, b) => {
    let arr = [];
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR"
    }
    for (let counter = Math.min(a, b); counter <= Math.max(a, b); counter++) {
        arr.push(counter) ;
        console.log(arr);
    }
    return arr.reduce((sum, item) => sum + item, 0);
};



// Do not edit below this line
module.exports = sumAll;
