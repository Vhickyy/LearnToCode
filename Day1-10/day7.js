//  Array

const studentsName = ["Victoria", "Loveth", "Precious", "Samuel"];
console.log(studentsName.length);
// 4

console.log(studentsName[4]);
// undefined

console.log(studentsName.indexOf("David"));
// -1

for (let i = 0; i < studentsName.length; i++){
    console.log(studentsName[i]);
}

for (let name of studentsName){
    console.log(name);
}

let count = 0;
while (count < studentsName.length){
    console.log(studentsName[count]);
    count++;
}
