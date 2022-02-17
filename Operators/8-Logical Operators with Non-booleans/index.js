// Example 01
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor); // It will Return 'Red' 

// Example 02
let userQty = undefined;
let defultQty = 1;
let currentQty = userQty || defultQty;
console.log(currentQty); // It will Return 1;