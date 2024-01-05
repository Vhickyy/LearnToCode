// Truthy and Falsy value
// Falsy value: null, 0, undefined, "", false NaN

console.log(0 == false);
// true

console.log(!null === true);
// true

console.log([] == false);
// true

console.log({} == false);
// false

console.log(![]);
// false

console.log(![] === ![]);
// true

console.log([] == []);
// false

console.log(1 == true);
// true