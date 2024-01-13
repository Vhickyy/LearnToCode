// Object.keys(), Object.values() and Object.entries();

const names = {
    Victoria: 40,
    Mary: 30,
    Ben: 5,
    Rose: 17,
    Frank: 22
}

console.log(Object.keys(names));
// ['Victoria', 'Mary', 'Ben', 'Rose', 'Frank']
console.log(Object.values(names));
// [40, 30, 5, 17, 22]
console.log(Object.entries(names));
// [['Victoria', 40], ['Mary', 30], ['Ben', 5], ['Rose', 17], ['Frank', 22]]

// Primitive type
// string
console.log(Object.keys("Vee"));
//  ['0', '1', '2']
console.log(Object.values("Vee"));
// ["V","e","e"]
console.log(Object.entries("Vee"));
// [[0,"V"],[1,"e"],[2,"e"]]

// number
console.log(Object.entries(100));
// []


