// Factory Function
// The Factory Function is similar to constructor functions/class functions, but instead of using new to create an object, factory functions simply creates an object and returns it. Factory Functions are a very useful tool in JavaScript.

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log("Draw");
        }
    }
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);