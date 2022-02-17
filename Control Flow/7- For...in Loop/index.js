// For-in loop 

// Example 01:
const person = {
    name : "Muhammad Shakir Khan",
    age : "27"
}

for(let key in person) {
    console.log(key, person[key]);
}

// Result: 

// name Muhammad Shakir Khan
// age 27

// Example 02:

const phones = ['IPhone', 'Sumsung','Realme'];
for(let index in phones) {
    console.log(index, phones[index]);
}

// Result:

// 0 IPhone
// 1 Sumsung
// 2 Realme