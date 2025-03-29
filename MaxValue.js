function getMaxValue(num) {
    return parseInt(num.toString().split('').sort((a, b) => b - a).join(''));
}


console.log(getMaxValue(215)); // Output: 521
console.log(getMaxValue(1093)); // Output: 9310