// 4. Control Flow

// Control Flow determines the order in which JavaScript statements are executed in a program. It allows us to make decisions and control program execution.


// 1. if Statement

// The if statement executes a block of code only when a given condition is true.

// Example:
let num = 20;

if (num >= 18) {
    console.log("num is greater than or equal to 18");
}


// 2. else if Statement

// The else if statement checks another condition when the previous if or else if condition is false.

// Example:
let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
}


// 3. else Statement

// The else statement executes when all previous conditions are false. It does not require a condition.

// Example:
let age = 16;

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// 4. switch-case Statement

// The switch statement is used to execute different blocks of code based on the value of an expression. It is useful when comparing one value with multiple possible cases.

// Example:
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
            break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");    
    break;

    case 7:
        console.log("Sunday");
        break;  

    default:
        console.log("Invalid day");
}


// 5. Early Return Pattern

// The early return pattern means returning from a function as soon as a particular condition is met. It helps avoid unnecessary code and deeply nested conditions.

// Example:
function checkAge(age) {
    if (age < 18) {
        return "Not allowed";
    }

    return "Allowed";
}

console.log(checkAge(20));
// if the age is below 18, the function immediately returns "Not allowed".