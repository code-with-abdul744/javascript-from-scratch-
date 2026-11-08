// Operators

// An operator is a symbol or keyword used to perform an operation on values or variables.


// 1. Arithmetic Operators

// Arithmetic operators are used to perform mathematical calculations.

// example
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);


// 2. Comparison Operators

// Comparison operators compare two values and return true or false.

// example
console.log(5 === "5");
console.log(5 !== "5");
console.log(5 == "5");
console.log(5 != 3);
console.log(5 >= 5);
console.log(5 <= 4);
console.log(5 > 3);
console.log(5 < 3);


// 3. Logical Operators

// Logical operators are mainly used to combine or reverse conditions.

// example
console.log(true && false);
// && returns true only when both conditions are true.

console.log(true || false);
// || returns true when at least one condition is true.

console.log(!true);
// ! reverses the Boolean value.



// 4. Assignment Operators

// Assignment operators are used to assign or update values in variables.

// example
let num1 = 20;
let num2;

console.log(num = num2);
console.log(num += 5);
console.log(num -= 3);
console.log(num *= 9);
console.log(num /= 2);
console.log(num %= 3);
console.log(num ** num2)


// 5. Unary Operators

// Unary operators work with one operand/value.

// Common unary operators include:
//  ++          increases value by 1
//  --          decreases value by 1
//  !           reverses a boolean value
//  typeof      returns the data type
//  +           converts a value to number
//  -           converts a value to a negative number

// Example:
let x = 5;
console.log(x++);
console.log(x);


// 6. Ternary Operator

// The ternary operator is a short way to write a simple if...else condition.

// example
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);


// 7. typeof Operator

// The typeof operator is used to find the data type of a value.
// It returns the type as a string, such as "string", "number", or "boolean".

// Example:
let marks = 20;

console.log(typeof marks);


// 8. instanceof Operator

// The instanceof operator checks whether an object belongs to a particular class or constructor. It returns true or false.

// Example:
let numbers = [1, 2, 3];

console.log(numbers instanceof Array);