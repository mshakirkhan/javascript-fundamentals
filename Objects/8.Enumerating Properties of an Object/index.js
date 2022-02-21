const circle = {
    radius: 1,
    draw() {
        console.log('Draw');
    }
}

// Print keys using for in loop
for (let keys in circle) {
    console.log(keys, circle[keys]);
}

// Print keys using for of loop (It can always run on iteration like arrays)
for (let keys of Object.keys(circle)) {
    console.log(keys);
}