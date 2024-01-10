// &&, ||, !

console.log(true && true); //true
console.log(true && false); //false
console.log("" && false); //""
console.log("" && true); //""
console.log(2 && 3); //3
console.log("" || true); //true
console.log(true || true);//true
console.log("3" === 3 || "2" === 2); //false
console.log(0 || false); //false
console.log(!false); //true
console.log(!true); //false
console.log(!("3" === 3 || "2" === 2)); //true