//  Rest Parameter
const students = ["Victoria","Cynthia","James","Peter"];
const [first,second,...rest] = students;
console.log(first);
// Victoria
console.log(rest);
// ["James","Peter"]
const random = (firstNum,...numbers) => {
    let count = firstNum;
    for(let i = 0; i < numbers.length; i++){
        count += numbers[i];
    }
    return count
}
console.log(random(1,2,3,4,5));
// 15
const names = (firstName,secondName,...otherNames) => {
    console.log("firstName",firstName);
    console.log("secondName",secondName);
    console.log("otherNames",otherNames);
}
names("Joshua","Ruth", "Victoria","Cynthia","James","Peter")
// firstName, Joshua
// secondName, Ruth
// otherNames, ["Victoria","Cynthia","James","Peter"]
names("Rita")
// firstName, Rita
// secondName, Undefined
// otherNames, []
