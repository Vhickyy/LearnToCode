// setTimeout and setInterval
setTimeout(()=>{
    console.log("vee");
    // After 3s
    // vee 
},3000);

let count = 0;
const countInterval = setInterval(()=>{
    count++
    console.log(count);
    // increment count every 1s.
    // after 5s it stops.
},1000);

setTimeout(()=>{
    clearInterval(countInterval);
    // Terminates the countInterval
},5000);

const timeoutId = setTimeout(()=>{
    console.log(count);
    // This gets terminated on time.
},4000);

setTimeout(()=>{
    clearTimeout(timeoutId)
    // terminates timeoutId
},2000)