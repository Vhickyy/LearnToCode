// for each and map

const numbers = [1,3,6,4,9,2];

const multipliedBy2 = numbers.map(num=>{
    return num * 2;
});
console.log(multipliedBy2);
// [2, 6, 12, 8, 18, 4]

const increaseBy2 = numbers.forEach(num=>{
    return num + 2;
});
console.log(increaseBy2);
// undefined

const subtractBy2 = numbers.forEach(num=>{
    console.log(num + 2);
    // 3, 5, 8, 6, 11, 4
    const newnum = num + 2;
    return newnum
});
console.log(subtractBy2);
// undefined