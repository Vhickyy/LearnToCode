// loops
// for loops, while loops, do while loops

const myName = "Victoria"

for(let i = 0; i < myName.length; i++){
    if(i == 3){
        continue;
    }
    console.log(myName[i]);
}

let count = 0;
while(count < myName.length){
    if(count == 3){
        break;
    }
    console.log(myName[count]);
    count++;
}

let num = 0;
// will run at least once
do{
    num++;
}while(num < 1){
    console.log(num);
}