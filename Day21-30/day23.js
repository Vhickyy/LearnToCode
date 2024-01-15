// slice, concat and spread
const students = ["Victoria", "Samuel", "Joyce","Promise"];

const slicedCopyOfStudents = students.slice(0);
slicedCopyOfStudents[0] = "Peace";
console.log(slicedCopyOfStudents);
// ["Peace", "Samuel", "Joyce","Promise"]

const spreadCopyOfStudents = [...students];
spreadCopyOfStudents[0] = "John";
console.log(spreadCopyOfStudents);
// ["John", "Samuel", "Joyce","Promise"]

const concatCopyOfStudents = students.concat()
concatCopyOfStudents[0] = "Rose"
console.log(concatCopyOfStudents);
// ["Rose", "Samuel", "Joyce","Promise"]

console.log(students);
// ["Victoria", "Samuel", "Joyce","Promise"]