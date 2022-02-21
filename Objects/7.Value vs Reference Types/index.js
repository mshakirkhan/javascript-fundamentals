// Primatives are copied by their value. (Number, String, boolean, Symbol)
// Objects are copied by their reference. (Object, Function, Array)

// Example 01:
let x = 10;
let y = x;

x = 20;
console.log(y); // The answer will be 10 because Primatives types are copied by their value.

// Example 02:
let a = {
    value: 10
}

a.value = 20;
let b = a.value;
console.log(b); // The answer will be 20 because Objects are copied by their reference.