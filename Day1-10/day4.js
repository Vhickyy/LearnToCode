let condition = true;
// condition evaluates to true
if(condition){
    // This code will run
    console.log("My name is Victoria");
}else{
    // This code won't run
    console.log("I don't know your name");
}

condition = true;
// condition evaluates to false
if(condition){
    // This code won't run
    console.log("My name is Victoria");
}else{
    // This code will run
    console.log("I don't know your name");
}

switch (condition){
    case true:
        console.log("My name is Victoria"); 
        break;
    case false:
        console.log("I don't know your name");
}