//using recursion
function HexSWC(digit) {
    const hexMap = "0123456789ABCDEF";
    return hexMap[digit];
}

function decimalToHex(num, callback) {
    if (num === 0) return "";
    return decimalToHex(Math.floor(num / 16), callback) + callback(num % 16);
}

console.log(decimalToHex(255, HexSWC)); // Output: FF
console.log(decimalToHex(4095, HexSWC)); // Output: FFF



//using switch case
function HexSWC(decimal) {
    let hex;
    
    switch (decimal) {
        case 0: hex = '0'; break;
        case 1: hex = '1'; break;
        case 2: hex = '2'; break;
        case 3: hex = '3'; break;
        case 4: hex = '4'; break;
        case 5: hex = '5'; break;
        case 6: hex = '6'; break;
        case 7: hex = '7'; break;
        case 8: hex = '8'; break;
        case 9: hex = '9'; break;
        case 10: hex = 'A'; break;
        case 11: hex = 'B'; break;
        case 12: hex = 'C'; break;
        case 13: hex = 'D'; break;
        case 14: hex = 'E'; break;
        case 15: hex = 'F'; break;
        default: hex = ''; 
    }
    
    return hex;
}

// Recursive function to convert a decimal number to hexadecimal
function decimalToHex(decimal, callback) {
    if (decimal === 0) return "";
    return decimalToHex(Math.floor(decimal / 16), callback) + callback(decimal % 16);
}


console.log(decimalToHex(255, HexSWC));  // Output: "FF"
console.log(decimalToHex(4095, HexSWC)); // Output: "FFF"
console.log(decimalToHex(16, HexSWC));   // Output: "10"
console.log(decimalToHex(1234, HexSWC)); // Output: "4D2"




