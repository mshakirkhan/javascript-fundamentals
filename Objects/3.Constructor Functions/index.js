// Constructor Function
// Constructor Function Vs Factory Function both are same you can use anyone of them

// We follow naming convention Pascal Notation:
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("Draw");
    }
}

let circle1 = new Circle(1);
console.log(circle1);

let circle2 = new Circle(2);
console.log(circle2);