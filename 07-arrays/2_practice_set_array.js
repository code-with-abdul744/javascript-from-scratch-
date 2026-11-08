// Arrays Practice Set


// 1. Create/Access/Modify:
// Create an array of your 5 favourite movies.
// Print the 3rd movie, then replace the last movie with a different one.
const favouriteMovies = ["Inception", "The Matrix", "Interstellar", "Tenet", "Dune"];
console.log("Q1 3rd movie:", favouriteMovies[2]);
favouriteMovies[favouriteMovies.length - 1] = "Doomsday";
console.log("Q1 updated array:", favouriteMovies);


// 2. push / pop / shift / unshift:
// Start with [5, 10, 15]. Use push(20) and unshift(0),
// then remove both using pop() and shift(). Print the array after every step.
const stepNumbers = [5, 10, 15];

stepNumbers.push(20);
console.log("Q2 after push:", stepNumbers);       // [5, 10, 15, 20]

stepNumbers.unshift(0);
console.log("Q2 after unshift:", stepNumbers);    // [0, 5, 10, 15, 20]

stepNumbers.pop();
console.log("Q2 after pop:", stepNumbers);        // [0, 5, 10, 15]

stepNumbers.shift();
console.log("Q2 after shift:", stepNumbers);      // [5, 10, 15]


// 3. splice():
// Given ["HTML", "CSS", "JS", "React"], replace "CSS" with "Bootstrap".
// Then add "Node" at index 2 without deleting anything.
const languages = ["HTML", "CSS", "JS", "React"];
languages.splice(1, 1, "Bootstrap");
console.log("Q3 after replace:", languages);      // ["HTML", "Bootstrap", "JS", "React"]
languages.splice(2, 0, "Node");
console.log("Q3 after insert:", languages);       // ["HTML", "Bootstrap", "Node", "JS", "React"]


// 4. slice():
// From [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], extract only the 4th to 7th elements.
// Then print the original array to prove it was not changed.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const extracted = numbers.slice(3, 7);
console.log("Q4 extracted:", extracted);          // [4, 5, 6, 7]
console.log("Q4 original:", numbers);             // unchanged


// 5. sort() + reverse():
// Sort [100, 5, 25, 1, 10] without a compare function first and observe the output.
// Then sort it in both ascending and descending order.
// Explain in a comment why the first output was wrong.
const sortNumbers = [100, 5, 25, 1, 10];
console.log("Q5 default sort:", sortNumbers.slice().sort());                // [1, 10, 100, 25, 5]
console.log("Q5 ascending:", sortNumbers.slice().sort((a, b) => a - b));    // [1, 5, 10, 25, 100]
console.log("Q5 descending:", sortNumbers.slice().sort((a, b) => b - a));   // [100, 25, 10, 5, 1]

// Why the first output was wrong:
// By default, sort() converts elements to strings and compares them
// character by character (Unicode order). So "100" comes before "25"
// because "1" < "2", and "10" comes before "5" because "1" < "5".
// A compare function makes sort() compare actual numeric values.


// 6. map():
// From [1, 2, 3, 4, 5], create a new array containing the square of each number.
const squares = [1, 2, 3, 4, 5].map((number) => number ** 2);
console.log("Q6 squares:", squares);              // [1, 4, 9, 16, 25]


// 7. filter() + reduce():
// Given the marks array [35, 78, 90, 42, 66, 28], use filter() to get the passing marks (>= 40),
// then use reduce() to calculate their average.
const marks = [35, 78, 90, 42, 66, 28];
const passingMarks = marks.filter((mark) => mark >= 40);

// Guard added: if nobody passes, length is 0 and 0 / 0 would give NaN.
const passingAverage = passingMarks.length
    ? passingMarks.reduce((total, mark) => total + mark, 0) / passingMarks.length
    : 0;

console.log("Q7 passing marks:", passingMarks);   // [78, 90, 42, 66]
console.log("Q7 average:", passingAverage);       // 69


// 8. find / some / every:
// Using [3, 8, 12, 5, 20], do the following:
//    - Use find() to get the first number greater than 10.
//    - Use some() to check whether there is at least one odd number.
//    - Use every() to check whether all numbers are positive.
const checkNumbers = [3, 8, 12, 5, 20];
console.log("Q8 first > 10:", checkNumbers.find((number) => number > 10));       // 12
console.log("Q8 has odd:", checkNumbers.some((number) => number % 2 !== 0));     // true
console.log("Q8 all positive:", checkNumbers.every((number) => number > 0));     // true


// 9. Destructuring:
// From ["Abdul", "Anjali", "Rahul", "Sara"], store the first two names in first and second.
// Collect the remaining names in a rest array.
const [first, second, ...rest] = ["Abdul", "Anjali", "Rahul", "Sara"];
console.log("Q9 first:", first);                  // Abdul
console.log("Q9 second:", second);                // Anjali
console.log("Q9 rest:", rest);                    // ["Rahul", "Sara"]


// 10. Spread:
// Merge [1, 2, 3] and [4, 5, 6] into one array.
// Then make a copy, modify the copy, and verify that the original is unchanged.
// Bonus: Use Math.max(...arr) to find the largest number in an array.
const firstHalf = [1, 2, 3];
const secondHalf = [4, 5, 6];
const merged = [...firstHalf, ...secondHalf];

const mergedCopy = [...merged];
mergedCopy[0] = 99;

console.log("Q10 merged (original):", merged);   // [1, 2, 3, 4, 5, 6]
console.log("Q10 modified copy:", mergedCopy);    // [99, 2, 3, 4, 5, 6]
console.log("Q10 largest:", Math.max(...merged)); // 6

// Note: spread makes a SHALLOW copy. For nested arrays/objects, the inner
// references are shared, so changing a nested value affects the original too.