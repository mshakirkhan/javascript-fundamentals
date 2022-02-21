const numbers = [1,2,3,4,5,6];

// Remove Last Element
let lastElement = numbers.pop(); // lastElement variable has removed element

// Remove First Element
numbers.shift();

// Removeing Middle Element

numbers.splice(1,2); // First Parameter is starting index, Second Parameter is how many element will be deleted
console.log(numbers);