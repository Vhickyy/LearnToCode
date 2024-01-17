// filter and find

const numbers = [1,3,6,4,9,2];

const divisibleBy2Filter = numbers.filter(num=>{
    return num % 2 === 0;
});
console.log(divisibleBy2Filter);
// [6, 4, 2]

const divisibleBy2Find = numbers.find(num=>{
    return num % 2 === 0;
});
console.log(divisibleBy2Find);
// 6

console.log(numbers);
// [1,3,6,4,9,2]