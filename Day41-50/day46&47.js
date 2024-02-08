// DOM Events

const paragraph = document.getElementsByClassName("paragraph");
const button = document.querySelector("button");


let count = 0;

button.addEventListener("click",() => {
    count++
    console.log(count);
    // 1
    // 2
    // 3
    // ...
});

paragraph[0].addEventListener("mouseover",() => {
    console.log("hie");
    // hi
});
