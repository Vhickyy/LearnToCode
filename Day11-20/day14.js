// Destructuring
const countries = ["Ghana", "Kenya", "Nigeria", "Italy", "Canada"];

const [firstCountry, secondCountry, ,fouthCounytry] = countries;
console.log(firstCountry);
// Nigeria
console.log(secondCountry);
// Kenya
console.log(fouthCounytry);
// Italy

const numbers = [];
const obj = { a: 1, b: 2 };
const {a,b} = obj;
console.log(a);
// 1
console.log(b);
// 2

({ a: numbers[0], b: numbers[1] } = obj);
console.log(numbers);
// [1,2]
