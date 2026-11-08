// 8. Objects

// An object is a collection of related data stored in key-value pairs. It is used to represent real-world entities and their properties.

// Example:
let student = {
    name: "Abdul",
    age: 20,
    course: "Computer Science"
};
console.log(student);


// 1. Key-Value Structure

// An object stores data in pairs called key-value pairs.
// - Key: The name or property of the data.
// - Value: The data assigned to that key.

// Example:
let employee = {
    name: "Ali",
    salary: 30000,
    department: "IT"
};
console.log(employee);


// 2. Dot vs Bracket Notation

// Both dot notation and bracket notation are used to access object properties.

// A. Dot Notation (.)

// Dot notation accesses a property using its name after a dot.

// Example:
let laptop = {
    brand: "Dell",
    price: 50000
};
console.log(laptop.brand);


// B. Bracket Notation ([])

// Bracket notation accesses a property using square brackets. It is useful when property names contain spaces or are stored in variables.

// Example:
let mobile = {
    brand: "Samsung",
    price: 25000
};
console.log(mobile["brand"]);


// 3. Nesting and Deep Access

// Nested Objects are objects stored inside another object. We use multiple property accesses to reach deeply nested values.

// Example:
let customer = {
    name: "Rahul",
    address: {
        city: "Delhi",
        country: "India"
    }
};
console.log(customer.address.city);


// 4. Object Destructuring

// Object destructuring allows us to extract object properties and store them in separate variables easily.

// Example:
let teacher = {
    name: "Amit",
    subject: "JavaScript",
    age: 30
};
let { name, subject } = teacher;
console.log(name);    
console.log(subject); 


// 5. Looping: for-in, Object.keys(), Object.entries()

// These methods are used to access and iterate over object properties.

// A. for-in Loop

// The `for-in` loop is used to iterate over the enumerable property keys of an object.

// Example:
let book = {
    title: "JavaScript Basics",
    author: "John",
    price: 500
};

for (let key in book) {
    console.log(key);
}


// B. Object.keys()

// `Object.keys()` returns an array containing all the object's own enumerable property names (keys).

// Example:
let player = {
    name: "Virat",
    age: 35,
    sport: "Cricket"
};
console.log(Object.keys(player));


// C. Object.entries()

// `Object.entries()` returns an array containing the object's key-value pairs.

// Example:
let product = {
    name: "Keyboard",
    price: 1000
};

console.log(Object.entries(product));


// 6. Copying Objects: Spread, Object.assign(), Deep Clone

// These techniques are used to create copies of objects.

// A. Spread Operator (...)

// The spread operator copies an object's enumerable own properties into another object. It creates a shallow copy.

// Example:
let original = {
    name: "Abdul",
    age: 20
};
let copied = { ...original };
console.log(copied);


// B. Object.assign()

// `Object.assign()` copies properties from one or more source objects into a target object. It also creates a shallow copy when using an empty target.

// Example:
let source = {
    city: "Kanpur",
    country: "India"
};
let duplicate = Object.assign({}, source);
console.log(duplicate);


// C. Deep Clone

// A deep clone creates a separate copy of an object, including its nested objects. Changes to nested objects in the copy do not affect the original.

// Example:
let originalData = {
    name: "Abdul",
    address: {
        city: "Kanpur"
    }
};

let deep = JSON.parse(JSON.stringify(originalData));
console.log(originalData);
deep.address.city = "Delhi";
console.log(deep);


// 7. Optional Chaining and Computed Properties

// A. Optional Chaining (?.)

// Optional chaining allows us to safely access nested properties without causing an error if an intermediate value is `null` or `undefined`. It returns `undefined` instead.

// Example:
let user = {
    name: "Abdul",
    address : {
        city : "bareilly",
    }
};

console.log(user.address?.city);
console.log(user.book?.chapter);


// B. Computed Properties

// Computed properties allow us to use a variable or expression as an object's property name by placing it inside square brackets `[]`.

// Example:
let propertyName = "email";

let account = {
    name: "Abdul",
    [propertyName]: "abdul@gmail.com"
};
console.log(account.email);


/* Quick Revision

| Topic                    | Meaning                                |
| ------------------------ | -------------------------------------- |
| Key-Value Structure      | Stores data in key-value pairs         |
| Dot Notation             | Accesses properties using `.`          |
| Bracket Notation         | Accesses properties using `[]`         |
| Nesting                  | Objects inside other objects           |
| Destructuring            | Extracts properties into variables     |
| for-in                   | Loops through object keys              |
| Object.keys()            | Returns an array of keys               |
| Object.entries()         | Returns an array of key-value pairs    |
| Spread (`...`)           | Copies object properties               |
| Object.assign()          | Copies properties into a target object |
| Deep Clone               | Creates an independent nested copy     |
| Optional Chaining (`?.`) | Safely accesses nested properties      |
| Computed Properties      | Uses expressions as property names     |
*/