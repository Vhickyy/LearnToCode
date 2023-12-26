// strings
const myName = "Victoria"
console.log(myName.length);
// 8
console.log(myName.toLowerCase());
// victoria
console.log(myName.toUpperCase());
// VICTORIA
console.log(myName.indexOf("t"));
//  3
console.log(myName.includes("B"));
//  false
console.log("Victoria Okonnah".split(" "));
// ['Victoria', 'Okonnah']
console.log("        Victoria".trim());
// Victoria
console.log(myName.substring(3));
// toria
console.log(myName.slice(5,8));
// ria
console.log(myName.charAt(2));
//  c
// We can also access a specific value in a string by using square bracket and passing in an index position
console.log(myName[2]);
// c

