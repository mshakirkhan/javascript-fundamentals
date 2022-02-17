// Hour
// If Hour is between 6AM and 12PM: Good Morning!
// If it is between 12PM and 6PM: Good Afternoon!
// Otherwise: Good Evening!

// Example
let hour = 10;
if(hour >= 6 && hour < 12)
    console.log("Good Morning!");
else if(hour >=12 && hour < 6)
    console.log("Good Afternoon!");
else
    console.log("Good Evening!");