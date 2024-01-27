// closure

function increaseNumFunc (){
    let x = 0;
    return () => {
        x++;
        return x
    }
}

const increaseNum = increaseNumFunc();
console.log(increaseNum());
// 1
console.log(increaseNum());
// 2
console.log(increaseNum());
// 3