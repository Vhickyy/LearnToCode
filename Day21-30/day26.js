// filter and find

const numbers = [1,3,6,4,9,2];
const mixed = ["2",8,0,"2"];

const isNumbers = numbers.every(num=>{
    return typeof(num) === "number"
});
console.log(isNumbers);
// true

const isNumbers2 = mixed.every(num=>{
    return typeof(num) === "number"
});
console.log(isNumbers2);
// false

const isString = mixed.some(num=>{
    return typeof(num) === "number"
});
console.log(isString);
// true

const isString2 = numbers.some(num=>{
    return typeof(num) === "string"
});
console.log(isString2);
// false
