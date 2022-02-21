let numbers = [1,2,3,4,5,6];
let b = numbers;

// Solution 01;
// numbers = []; // Only work is we have single refrence

// Solution 02: (Recommended)
numbers.length = 0;

// Solution 03;
// numbers.splice(0, numbers.length);

// Solution 04 is using loop

console.log(numbers);
console.log(b);