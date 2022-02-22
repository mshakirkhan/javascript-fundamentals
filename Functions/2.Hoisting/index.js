// Hoisting: 
// Hoisting is a process of moving function declearation to the top of the file. 
// And this is done automatically by JavaScript Engine that is executing the code.


walk(); // We can call function before decleartion:
function walk() {
    console.log("Walk");
}

run(); // We are not able to call before decleartion.
// Anonymous Function Expressions
let run = function() {
    console.log("Run");
}