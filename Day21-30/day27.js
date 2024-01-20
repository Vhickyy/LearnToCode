//sort
const numbers = [1,3,6,4,9,2];
const sortedNumber = numbers.sort((a,b)=>a-b);
console.log(sortedNumber);
//  [1, 2, 3, 4, 6, 9]

const descNumber = numbers.sort((a,b) => b-a);
console.log(descNumber);
// [9, 6, 4, 3, 2, 1]

const name = "victoria"
const sortAlphabet = name.split("").sort();
console.log(sortAlphabet);
// ['a', 'c', 'i', 'i', 'o', 'r', 't', 'v']