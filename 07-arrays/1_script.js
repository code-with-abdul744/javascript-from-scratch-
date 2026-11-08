// 7. Arrays

// An array is a special variable used to store multiple values in a single variable. Arrays are ordered, and their index starts from `0`.

// Example:
let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits);


// 1. Create, Access, and Modify Arrays

// A. Create an Array

// An array can be created using square brackets `[]` with multiple values separated by commas.

// Example:
let colors = ["Red", "Green", "Blue"];
console.log(colors);


// B. Access Array Elements

// We can access array elements using their index number. The first element starts at index `0`.
// Example:
let cities = ["Delhi", "Mumbai", "Lucknow"];
console.log(cities[1]);


// C. Modify Array Elements

// We can change an array element by assigning a new value to its index.

// Example:
let animals = ["Cat", "Dog", "Cow"];
animals[1] = "Lion";
console.log(animals);


// 2. Array Methods

// Array methods are built-in functions used to add, remove, modify, and process array elements.

// A. push()

// The `push()` method adds one or more elements to the end of an array.

// Example:
let scores = [10, 20, 30];
scores.push(40);
console.log(scores);


// B. pop()

// The `pop()` method removes the last element from an array.

// Example:
let prices = [100, 200, 300];
prices.pop();
console.log(prices);


// C. shift()

// The `shift()` method removes the first element from an array.

// Example:
let names = ["Ali", "John", "David"];
names.shift();
console.log(names);


// D. unshift()

// The `unshift()` method adds one or more elements to the beginning of an array.

// Example:
let numbers = [20, 30, 40];
numbers.unshift(10);
console.log(numbers);


// E. splice()

// The `splice()` method is used to add, remove, or replace elements in an existing array. It modifies the original array.

// Example:
let subjects = ["Math", "English", "Science"];
subjects.splice(1, 1, "Computer");
console.log(subjects);


// F. slice()

// The `slice()` method extracts a portion of an array without modifying the original array.

// Example:
let vegetables = ["Potato", "Tomato", "Onion", "Carrot"];
let selected = vegetables.slice(1, 3);
console.log(selected);


// G. reverse()

// The `reverse()` method reverses the order of elements in an array. It modifies the original array.

// Example:
let digits = [1, 2, 3, 4, 5];
digits.reverse();
console.log(digits);


// H. sort()

// The `sort()` method sorts array elements. By default, it sorts elements as strings. For numerical sorting, we use a comparison function.

// Example:
let marks = [40, 10, 30, 20];
marks.sort((a, b) => a - b);
console.log(marks);


// 3. Array Iteration and Searching Methods

// These methods help us process, filter, calculate, and search array elements.

// A. map()

// The `map()` method creates a new array by applying a function to every element of the original array.

// Example:
let oldNumbers = [2, 4, 6];
let doubled = oldNumbers.map(num => num * 2);
console.log(doubled);


// B. filter()

// The `filter()` method creates a new array containing only the elements that satisfy a given condition.

// Example:
let ages = [12, 18, 25, 15, 30];
let adults = ages.filter(age => age >= 18);
console.log(adults);


// C. reduce()
// The `reduce()` method reduces all array elements into a single value by applying a function.

// Example:
let expenses = [100, 200, 300];
let total = expenses.reduce((sum, amount) => sum + amount, 0);
console.log(total);


// D. find()

// The `find()` method returns the first element that satisfies a given condition. If no element matches, it returns `undefined`.

// Example:
let products = [5, 12, 18, 25];
let result = products.find(item => item > 15);
console.log(result);


// E. some()

// The `some()` method checks whether at least one element satisfies a given condition. It returns `true` or `false`.

// Example:
let temperatures = [20, 25, 35, 28];
let hasHotDay = temperatures.some(temp => temp > 30);
console.log(hasHotDay);


// F. every()

// The `every()` method checks whether all elements satisfy a given condition. It returns `true` or `false`.

// Example:
let testScores = [70, 80, 90, 60];
let passed = testScores.every(score => score >= 40);
console.log(passed);


// 4. Destructuring

// Array Destructuring allows us to extract array elements and store them in separate variables easily.

// Example:
let vehicles = ["Car", "Bike", "Bus"];
let [first, second, third] = vehicles;
console.log(first);  
console.log(second); 
console.log(third);  


// 5. Spread Operator (...)

// The spread operator (`...`) expands the elements of an array into individual elements. It is commonly used to copy or combine arrays.

// Example:
let primaryColors = ["Red", "Blue"];
let allColors = [...primaryColors, "Green"];
console.log(allColors);




/* Quick Revision

| Method / Concept | Purpose                              |
| ------------------------------------------------------- |
| pop()          | Removes last element                   |
| push()         | Adds element at the end                |
| shift()        | Removes first element                  |
| unshift()      | Adds element at the beginning          |
| splice()       | Adds, removes, or replaces elements    |
| slice()        | Extracts a portion of an array         |
| reverse()      | Reverses array elements                |
| sort()         | Sorts array elements                   |
| map()          | Creates a new transformed array        |
| filter()       | Returns elements matching a condition  |
| reduce()       | Reduces array to a single value        |
| find()         | Returns the first matching element     |
| some()         | Checks if at least one element matches |
| every()        | Checks if all elements match           |
| Destructuring  | Extracts elements into variables       |
| Spread (...)   | Expands array elements                 |
*/