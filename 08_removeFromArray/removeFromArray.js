const removeFromArray = function(arr, ...args) {
    const array = [];
    arr.forEach((item) => {
        if (!args.includes(item)) { //if not included in the args array push to new array
            array.push(item);
        }
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
