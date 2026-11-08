// Functions Practice Questions


// Q.1 Write a function named greet that prints your name to the console, and then call it.
function greet() {
    console.log("Abdul Shayan");
}
greet();


// Q.2 Write a function that takes two numbers as parameters and returns their sum. Call it and print the result.
function sum(a, b) {
    return a + b;
}
let result = sum(2, 3);
console.log(result);


// Q.3 Write an arrow function that takes a number and returns its square. Call it and print the result.
let square = (num) => {
    return num * num;
};
let squareResult = square(4);
console.log(squareResult);


// Q.4 Write a function that takes a number and checks whether it is even or odd. Call it with a number.
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");
    }
}
checkEvenOdd(5);


// Q.5 Write a function with a default parameter so that if no name is passed, it prints "Hello, Guest!".
function greetUser(name = "Guest") {
    console.log("Hello, " + name + "!");
}
greetUser();
greetUser("Abdul Shayan");


// Q.6 Write a function using rest parameters that accept any number of arguments and return their total. Call it with several numbers and print the result.
function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(sumAll(1, 2, 3, 4, 5));


// Q.7 Write a function that takes a string and returns its length.
function getStringLength(str) {
    return str.length;
}
console.log(getStringLength("Hello, World!"));


// Q.8 Write a function that takes a number n and returns the sum of all numbers from 1 to n.
function sumUpToN(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
console.log(sumUpToN(5));


// Q.9 Write a function that takes a number n and returns the factorial of n.
function factorial(n) {
    if (n < 0) {
        return "Not defined";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(5));


// Q.10 Write a function that takes a string and returns the number of vowels in it.
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello, World!"));