// reduce
const numbers = [1,3,6,4,9,2];
const value = numbers.reduce((acc,cur)=>{
    acc += cur;
    return acc;
});
console.log(value);
// 25

// shallow copy
const items = {name: "Victoria", favColors: ["blue","orange","white"]};
const copyItem = {...items};
copyItem.favColors[2] = "green";
copyItem.name = "Jane";
console.log(copyItem);
// {name: 'Jane', favColors: ['blue', 'orange', 'green']}
console.log(items);
// {name: 'Victoria', favColors: ['blue', 'orange', 'green']}

// Deep copy
const newItems = JSON.parse(JSON.stringify(items));
newItems.favColors[0] = "yellow";
console.log(newItems);
// {name: "Victoria", favColors: ["yellow","orange","white"]}

console.log(items);
// {name: "Victoria", favColors: ["blue","orange","white"]}
