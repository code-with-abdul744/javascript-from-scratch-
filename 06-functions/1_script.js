// 6. Functions

// A function is a reusable block of code designed to perform a specific task. We can call a function whenever we need to execute that code.

// Example:
function greet() {
    console.log("Hello World");
}
greet();


// 1. Function Declarations, Expressions, and Arrow Functions
// JavaScript provides three common ways to create functions.


// A. Function Declaration

// A function declaration defines a function using the `function` keyword and a function name.

// Example:
function add() {
    console.log(2 + 2);
}

add();


// B. Function Expression

// A function expression stores a function inside a variable.

// Example:
const fnc = function () {
    console.log("this is a function expression");
};

fnc();


// C. Arrow Function

// An arrow function is a shorter way to write a function using the `=>` symbol.
// Example:
const arrow = () => {
    console.log("this is an arrow function");
};

arrow();


// 2. Parameters vs Arguments

// Parameters are variables written inside the function definition.
// Arguments are the actual values passed to a function when calling it.

// Example:
function mul(a, b) {    // parameters
    console.log(a * b);
}

mul(10, 20);    // arguments


// 3. Default, Rest, and Spread Parameters
// These features help us handle function inputs in different ways.

// A. Default Parameters

// Default parameters provide a default value when an argument is not passed.

// Example:
function def(name = "please enter name") {
    console.log("Hello " + name);
}

def();


// B. Rest Parameters

// Rest parameters collect multiple arguments into a single array using `...`.

// Example:
function rst(...numbers) {
    console.log(numbers);
}

rst(10, 20, 30, 40, 50);


// C. Spread Syntax

// Spread syntax expands the elements of an array or other iterable into individual values.

// Example:
let arr = ["jack", 20, true];
console.log(...arr);


// 4. Return Values and Early Returns

// Return Value: The `return` statement sends a value back from a function.
// Early Return: An early return exits a function immediately when a particular condition is met.

// Example:
function checkAge(age) {
    if (age < 18) {
        return "Not allowed";
    }

    return "Allowed";
}

console.log(checkAge(20));


// 5. First-Class Functions

// In JavaScript, functions are treated as first-class citizens. This means functions can be:

// - Assigned to variables.
// - Passed as arguments to other functions.
// - Returned from other functions.

// Example:
const first_cls = function() {
    return "Hello!";
};

console.log(first_cls());


// 6. Higher-Order Functions

// A Higher-Order Function (HOF) is a function that either accepts another function as an argument or returns another function.

// Example:
function calculate(a, b, operation) {
    return operation(a, b);
}

function sum(x, y) {
    return x + y;
}

console.log(calculate(10, 20, sum));
// `calculate()` is a higher-order function because it accepts another function as an argument.


// 7. Pure vs Impure Functions

// A. Pure Function

// A pure function always produces the same output for the same input and does not change anything outside the function.

// Example:
function div(a, b) {
    return a / b;
}

console.log(div(2, 5));


// B. Impure Function

// An impure function changes or depends on something outside its own scope.

// Example:
let total = 10;

function val(value) {
    total += value;
    return total;
}

console.log(val(5));
// the function changes the external variable `total`, so it is impure.


// 8. Closures and Lexical Scoping

// Lexical Scoping: A function can access variables from its outer scope based on where the function is defined in the code.

// Closure: A closure occurs when an inner function remembers and accesses variables from its outer function, even after the outer function has finished executing.

// Example:
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const result = outer();

result();
result();
// `inner()` remembers the `count` variable even after `outer()` has finished executing. This is called a closure.


//  9. IIFE (Immediately Invoked Function Expression)

// An IIFE is a function that executes immediately after it is created. It is commonly used to create a private scope for variables.

// Example:
(function() {
    let message = "WELCOME TO JAVASCRIPT :)";
    console.log(message);
})();

// the function executes immediately without needing to call it separately.


// 10. Hoisting Differences Between Declaration and Expression

// Hoisting is JavaScript's behavior of processing declarations before executing the code.

// - Function Declaration: Can be called before its definition because the function declaration is hoisted with its implementation.
// - Function Expression: Cannot generally be called before initialization because it is stored in a variable.

// Example:
hoist();

function hoist() {
    console.log("this is hoisting, we are allowed to call a function before declaration.");
}

// the function declaration is hoisted, so it can be called before its definition.