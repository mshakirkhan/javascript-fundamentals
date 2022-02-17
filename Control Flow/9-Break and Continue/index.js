// Break and Continue Keyword

// Break Keywork Example:
let i = 0;
while(i <= 10) {
    if(i === 5)
    break; // It will break the Iteration.
    console.log(i);
    i++;
}

// Result: 

// 0
// 1
// 2
// 3
// 4

// Continue Keywork Example:
let j = 0;
while(j <= 10) {
    if(j % 2 === 0 ) {
        j++;
        continue; // It will skip the Iteration.
    }
    console.log(j);
    j++;
}

// Result: 

// 1
// 3
// 5
// 7
// 9
