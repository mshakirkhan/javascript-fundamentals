// Important:
// We can add and delete object properties later.
// While runing this code please comment "delete radius.color; & delete radius.draw;" and than check.

const radius = {
    radius: 1
}
radius.color = "Red"; // We can add property later
radius.draw = function() { // Same we can add methods later
    console.log("Draw");
}
delete radius.color; // Deleteing color property from radius object.
delete radius.draw; // Deleteing draw method from radius object.
console.log(radius);