// 1. Variables and Declarations

// A variable is a named container used to store data. JavaScript provides three ways to declare variables: var, let, and const.

// Example:
let age = 20;
console.log(age);


// 2. var, let, const — Line-by-Line Comparison

// - var → function-scoped and can be redeclared and reassigned.
// - let → block-scoped and can be reassigned but not redeclared in the same scope.
// - const → block-scoped and cannot be reassigned or redeclared.

// Example:
var a = 10;
console.log(a);

let b = 20;
console.log(b);

const c = 30;
console.log(c);


// 3. Scope — Global, Block, Functional

// Scope determines where a variable can be accessed.

// - Global scope: accessible throughout the program.
// - Block scope: accessible only inside { }; applies to let and const.
// - Function scope: accessible throughout the function; var is function-scoped.

// Example:
function test() {
    var x = 10;
    let y = 20;
}
// x and y are accessible inside test(), but not outside it.


// 4. Reassignment & Redeclaration

// Reassignment means giving a new value to an existing variable.
// Redeclaration means declaring the same variable again.

// - var → reassignment ✓, redeclaration ✓
// - let → reassignment ✓, redeclaration ✗
// - const → reassignment ✗, redeclaration ✗

// Example:
let x = 10;
x = 20;             // Reassignment
// let x = 30;      // Redeclaration → Error


// 5. TDZ — Temporal Dead Zone

// The Temporal Dead Zone (TDZ) is the period between entering a scope and the point where a let or const variable is initialized. During this period, accessing the variable causes an error.

// Example:
console.log(y);     // ReferenceError
let y = 10;


// 6. Hoisting Impact per Type

// Hoisting means JavaScript processes declarations before executing the code.

// - var → declaration is hoisted and initialized with undefined.
// - let → declaration is hoisted but remains in the TDZ until initialization.
// - const → same TDZ behavior as let.

// Example:
console.log(d); // undefined
var d = 10;