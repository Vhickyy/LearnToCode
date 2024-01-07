// ...spread
const girls = ["Victoroia","Cynthia"];
const boys = ["James","Peter"];
const students = [...girls,...boys];
console.log(students);
// ["Victoroia","Cynthia","James","Peter"]

const sum = (a,b,c) => {
    return a + b + c
}
const numbers = [1,3,5];
console.log(sum(...numbers));
// 9

const studentColor = {
    Jane: "red",
    Chris: "blue",
    Mabel: "Pink"
};
const studentColor2 = {
    John: "Yellow",
    Mary: "Green"
};
const combinedShapeObject = {...studentColor,...studentColor2};
console.log(combinedShapeObject);
// { Jane: "red", Chris: "blue",Mabel: "Pink", John: "Yellow",Mary: "Green"};
const combinedShapeObject2 = {...studentColor,...studentColor2,Mabel:"Purple"};
console.log(combinedShapeObject2);
// { Jane: "red", Chris: "blue",Mabel: "Purple", John: "Yellow", Mary: "Green"};