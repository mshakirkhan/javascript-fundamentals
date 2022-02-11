// We have already seen primitive type, This is refrence type.
// 1. Object
// 2. Array
// 3. Function

// Example Object

let person = {
    name : "Muhammad Shakir Khan",
    age : 27
}

// There are two methods to access the object.

// Method 01: (Recommended way becuase it is pretty simple)
console.log(person.name);
console.log(person.age);

// Method 02:
console.log(person[0]); //(We can use when we don't have any idea what property will get on index 0)
console.log(person['name']);