// practice set objects

// 1. Create a `car` object (brand, model, year) and print `model` using dot notation.
const car = {
    brand: "maruti suzuki",
    model: "swift",
    year: 2022
};
console.log(car.model);

// 2. Create an object with a key "first name" (with a space) and print it using bracket notation. Then store the key name "year" in a variable and use it to print the year.
const person = {
    "first name": "abdul shayan",
    year: 2005
};
console.log(person["first name"]);
const key = "year";
console.log(person[key])

// 3. Given person_info = { name: "Sana", age: 20 }, add city: "Delhi", change age to 19, and update name. Print the final object.
const person_info = {
    name: "sana",
    age: 20,
}

person_info.city = "Delhi";
person_info.age = 19;
person_info.name = "Sana bee";
console.log(person_info);

// 4. From { title: "Pen", price: 5 }, use destructuring to create the variables title, cost (renamed from price), and stock (default value 10).
const stationary = {
    title: "Pen",
    price: 5
};

let { title, price: cost, stock = 10 } = stationary
console.log(`${title} ${cost} ${stock}`);

// 5. Given student = { name: "Ali", marks: { math: 80, science: 90 } }, use nested destructuring to extract math and science in one line.
let student = {
    name: "Ali",
    marks: {
        math: 80,
        science: 90
    }
};

let { marks: { math, science } } = student;
console.log(math, science);

// 6. Use Object.entries() and a for...of loop to print all key-value pairs of an object in key: value format.
let book = {
    title: "JS Basics",
    author: "John",
    price: 500
};

for (let [key, value] of Object.entries(book)) {
    console.log(`${key}: ${value}`);
}

// 7. Write a function that takes an object and returns the sum of all its numeric values. Example: { a: 10, b: "x", c: 5 } gives 15.
function sumNumbers(obj) {
    return Object.values(obj)
        .filter(v => typeof v === "number")
        .reduce((sum, v) => sum + v, 0);
}

console.log(sumNumbers({ a: 10, b: "x", c: 5 }));

// 8. Create a copy of { name: "Abdul", address: { city: "Kanpur" } } using structuredClone, change the copy's city to "Delhi", and write code that proves the original is unchanged. Then do the same with the spread operator and show what goes wrong.
let original = { name: "Abdul", address: { city: "Kanpur" } };

// Deep copy with structuredClone
let deep = structuredClone(original);
deep.address.city = "Delhi";
console.log(original.address.city); 
console.log(deep.address.city);     

// Shallow copy with spread
let shallow = { ...original };
shallow.address.city = "Mumbai";
console.log(original.address.city); 

// 9. Write a function makeObj(key, value) that returns { [key]: value } using a computed property. Call it with ("color", "red").
function makeObj(key, value) {
    return { [key]: value };
}

console.log(makeObj("color", "red"));

// 10. Reverse the object { a: 1, b: 2, c: 3 } by swapping keys and values to get`{ 1: "a", 2: "b", 3: "c" }.
let obj = { a: 1, b: 2, c: 3 };

let reversed = Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
);
console.log(reversed);
