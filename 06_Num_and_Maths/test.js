const number = 400
// console.log(number);

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length); // OP = 3
// console.log(balance.toFixed(2)); // OP = 100.00
// console.log(balance.toExponential()); // OP = 1e+2
// console.log(balance.toLocaleString()); //  convert to number in string OP show 100 but in string data type

const otherNum = 123.455
// console.log(otherNum.toPrecision(3));

const digit = 1000000
// console.log(digit.toLocaleString('en-IN'));



// ========================Maths============================
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.3));
console.log(Math.random() * 10 + 1);
console.log((Math.random() * 10) + 1);


const min = 1;
const max = 6;
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

