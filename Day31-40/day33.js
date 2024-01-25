// mpre practice on functions

myName("Victoria")
function myName(name) {
    console.log(name);
    // Victoria
}

function addAll(...numbers){
    console.log(numbers);
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
        total += numbers[i]
    }
    return total;
}
console.log(addAll(1,2,3,4,5));
// 15