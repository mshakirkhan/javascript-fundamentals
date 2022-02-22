// Example: 
// It will always comes at the last, that's why it is called rest operator.
function sum(...arg) {
    console.log(arg);
}

sum(5,5,5);

// Result: 
// [ 5, 5, 5 ]