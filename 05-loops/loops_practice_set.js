// Loops Practice Questions


// Q1. Print numbers from 1 to 10 using for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Q2. Print numbers from 10 to 1 using a while loop.
let num = 10;

while (num > 0) {
    console.log(num);
    num--;
}


// Q3. Print even numbers from 1 to 20 using a for loop.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// Q4. Print odd numbers from 1 to 15 using a while loop.
let n = 1;

while (n <= 15) {
    if (n % 2 === 1) {
        console.log(n);
    }
    n++;
}


// Q5. Print the multiplication table of 5.
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${i * 5}`);
}


// Q6. Find the sum of all numbers from 1 to 100 using a loop.
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);


// Q7. Print all numbers between 1 to 50 that are divisible by 3.
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}


// Q8. Print even or odd using for loop.
let start = 4;

for (let i = start; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}


// Q9. Count how many numbers between 1 to 100 are divisible by both 3 and 5.
let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        count++;
    }
}
console.log(count);


// Q10. Find the factorial of 5 using a loop.
let fact = 1;

for (let i = 1; i <= 5; i++) {
    fact = fact * i;
}
console.log(fact);