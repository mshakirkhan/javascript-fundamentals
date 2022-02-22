// Join Example

let numbers = [1,2,3,4,5,6,7,8,9,10];
let joined = numbers.join(',');
console.log("Joined:", joined);

// Split Example (Very userfull for creating URL Slugs)
// Split will return an Array

const msg = "Hello this is muhammad shakir khan";
const split = msg.split(' ');
const urlSlug = split.join('-');
console.log("URL Slug:", urlSlug);