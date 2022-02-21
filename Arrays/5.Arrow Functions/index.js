// In ES6 we have an arrow function, we can use it in callback function.
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

let course = courses.find((course) => {
    return course.name === 'b'
});

console.log(course);