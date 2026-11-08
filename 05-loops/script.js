// 5. Loops

// A loop is used to execute a block of code repeatedly until a specific condition is met. Loops help avoid writing the same code multiple times.


// 1. for, while, do-while
// These are three types of loops in JavaScript.


// A. for Loop

// A for loop is used when we know how many times we want to execute a block of code.

// Example:
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// B. while Loop

// A while loop executes code as long as the given condition is true. The condition is checked before execution.

// Example:
let i = 10;

while (i > 0) {
    console.log(i);
    i--;
}


// C. do-while Loop

// A do-while loop executes the code at least once before checking the condition.

// Example:
let j = 2;

do {
    console.log(j);
    j += 2;
} while (j <= 20);


// 2. break and continue

// These statements are used to control the execution of loops.
// - break → Immediately stops the loop.
// - continue → Skips the current iteration and moves to the next iteration.

// Example:
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    if (i === 5) {
        break;
    }

    console.log(i);
}

