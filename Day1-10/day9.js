// push, pop, shift and unshift
const namesArrays = ["Victoria", "Precious", "Samuel", "Glory"];
const lastNameInArray = namesArrays.pop();
console.log(lastNameInArray);
// Glory

console.log(namesArrays);
// ["Victoria", "Precious", "Samuel"]

namesArrays.push("Peter")
console.log(namesArrays);
// ["Victoria", "Precious", "Samuel", "Peter"]

const firstNameInArray = namesArrays.shift()
console.log(firstNameInArray);
// Victoria

console.log(namesArrays);
// ["Precious", "Samuel", "Peter"]

namesArrays.unshift("Naomi")
console.log(namesArrays);
// ["Naomi", "Precious", "Samuel", "Peter"]
