// Important Points:
// One of the Fundamental Building block of JavaScript.
// Set of statement to perform a task or calculae a value.

// Example 01
function greeting(){
    console.log("Welcome Shakir Khan");
}

// Example 02
function welcome(firstName, lastName){
    console.log("Welcome" + firstName + " " + lastName);
}
// Calling Function
welcome("Shakir", "Khan");
welcome("Muhammad", "Shakir");


// Example 02 (Calculating Values)
function square(number)
{
    return number * number; // Here we are not printing value, we are just return the result
}
console.log(square(2));