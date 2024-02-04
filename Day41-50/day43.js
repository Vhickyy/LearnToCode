const heading = document.getElementById("h1");
const paragraph = document.getElementsByClassName("paragraph");
const firstHeading = document.querySelector("h1");
const headings = document.querySelectorAll("h1");
const buttons = document.getElementsByTagName("button")

console.log(heading);
// <h1 id="h1">Learning Javascript</h1>

console.log(paragraph);
// HTMLCollection(1)

console.log(firstHeading);
// <h1 id="h1">Learning Javascript</h1>

console.log(headings);
// NodeList(2)
const headingArr = [...headings];
headingArr.map(heading => console.log(heading));
// <h1 id="h1">Learning Javascript</h1>
// <h1>second heading</h1>

console.log(buttons);
// HTMLCollection(2)