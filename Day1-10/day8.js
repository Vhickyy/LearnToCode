// Unary, Binary and Ternary Operators
// Unary operarots requires one operand (data) to operate on, Binary requires two operands and tertiary requires three operands
// Unary operators: -, +, typrof, delete, !
const number = +"3"
console.log(typeof number);
// number

// Binary opertors: arithmetic operation, comparison operation, assignment operation
const mod = 4 % 2;
console.log(mod);
// 0

const sameNumbers = 4 == "4";
console.log(sameNumbers);
// true

const sameNumbers2 = 4 === "4";
console.log(sameNumbers2);
// false

// Tertiary operators: Conditional operation
const myName = "Victoria";
const getName = myName ? `My name is ${myName}` : "I don't know your name";
console.log(getName);
// My name is Victoria