// a) Arrow function isEven(n)
const isEven = n => n % 2 === 0;

console.log(isEven(4)); // true
console.log(isEven(7)); // false


// b) Convert if-else to ternary operator
const marks = 40;
const result = marks >= 35 ? "Pass" : "Fail";

console.log(result); // Pass


// c) greet(name) using arrow function + ternary operator
const greet = name => Hello, ${name ? name : "Guest"};

console.log(greet("Harshitha")); // Hello, Harshitha
console.log(greet());            // Hello, Guest