// objects
const girl = {
    name: "Victoria",
    height: "6ft",
    favFood: {
        breakfast: "Rice",
        lunch: "Noodles",
        dinner: ["Rice", "cake"]
    },
    isNice: true,
    favNumbers: {
        odd: 1,
        even: 2
    }
}
console.log(girl.name);
// Victoria
console.log(girl.height);
// 6ft
const oddNumber = "odd"
console.log(girl.favNumbers[oddNumber]);
// 1
const dinner = girl.favFood.dinner
console.log(dinner);
// ["Rice", "cake"]
delete girl.isNice
console.log(girl.isNice);
// undefined