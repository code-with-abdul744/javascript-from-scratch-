// 1. Data Types & Type System

// A data type defines what kind of value a variable can store. JavaScript has primitive and reference data types.

// Example:
let n = 20;
console.log(n);
// age stores a number value.


// 1. Primitive Types

// Primitive types are basic data types that represent a single value. JavaScript has String, Number, Boolean, Undefined, Null, Symbol, and BigInt.

// Example:
let name = "jack";                          // name stores a string value.
let age = 20;                               // age stores a number value.
let is_student = true;                      // is_student stores a boolean value.
let passed;                                 // passed stores undefined value.
let marks = null;                           // marks stores null value.
let networth = 2374645446473837634n;        // networth stores a bigint value.
let sym = Symbol("student");                // sym stores a symbol value.


// 2. Reference Types

// Reference types store references to more complex data. Common reference types are Object, Array, and Function.

// Example:
let student = { name: "jack", age: 20 };    // student stores an object value.

let numbers = [1, 2, 3, 4, 5];              // numbers stores an array value.

let greet = function() {                       
    console.log("Hello!");                  // greet stores a function value.
}


// 3. Dynamic Typing

// JavaScript is dynamically typed, which means a variable can hold values of different data types at different times. You don't need to specify the type when declaring a variable.

// Example:
let value = 10;
value = "Hello";
console.log(value);
// The same variable changes from a Number to a String.


// 4. Type Quirks

// JavaScript has some unusual type behaviors that can sometimes cause confusion. For example, typeof null returns "object" even though null is a primitive value.

// Example:
console.log(typeof null); // Output: "object"


// 5. Type Coercion
// Type coercion is the conversion of a value from one data type to another, either automatically or explicitly.

// Example:
console.log("5" + 2);
// converts 2 to a string and joins the two values.


// 6. Type Coercion — == vs ===

// == compares values after performing type conversion, while === compares both value and data type without conversion.

// Example:
console.log(5 == "5");  // true
console.log(5 === "5"); // false


// 7. Truthy vs Falsy Values

// A truthy value behaves like true in a condition, while a falsy value behaves like false.
// Common falsy values include false, 0, "", null, undefined, and NaN.

// Example:
if ("Hello") {
    console.log("Truthy");
}