// scopes: Global, block and function. var is global and function scoped,let and const are global, function and block scoped
var a = 1;
let b = 2;
console.log(this.a); // 1
console.log(this.b); // undefined
{
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the block
  console.log(a); // 11
  console.log(b); // 22
}
  
function functionScope(){
  var a = 10;
  let b = 20;
  console.log(a); // 10
  console.log(b); // 20
}
functionScope();

console.log(a); // 11
console.log(b); // 2

console.log(y); // undefined
var y = 5;  

console.log(myName); // ReferenceError: Cannot access 'myName' before initialization.
let myName = "Victoria";

// Temporal Dead Zone
{
    function myFavNumber () {
        console.log(favNumber);
    }
    const favNumber = 10; // Temporal Dead Zone for favNumber ends here
    myFavNumber(); // This function will log 10 in the console.
}

{
    function myFavFood () {
        console.log(favFood);
    }
    myFavFood(); // This function will throw ReferenceError: Cannot access 'favFood' before initialization.
    const favFood= "Rice"; 
}

