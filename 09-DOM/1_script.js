// 1. What is DOM?
// DOM (Document Object Model) is a programming interface that allows JavaScript to access and manipulate HTML elements.

// DOM allows JavaScript to:
// - Change HTML content.
// - Change CSS styles.
// - Add or remove HTML elements.
// - Handle user interactions.

// Example:
document.getElementById("heading").innerText = "Hello JavaScript";


// 2. Selecting HTML Elements
// JavaScript provides different methods to select HTML elements.

// 1. getElementById()
// Selects an element using its ID.
const titleElement = document.getElementById("title");
console.dir(titleElement);


// 2. getElementsByClassName()
// Selects all elements with a particular class.
const items = document.getElementsByClassName("box");
console.dir(items);


// 3. querySelector()
// Selects the first matching CSS selector.
const secondTitle = document.querySelector("#second-title");
const secondBox = document.querySelector(".second-box");
const firstParagraph = document.querySelector("p");
console.dir(secondTitle);
console.dir(secondBox);
console.dir(firstParagraph);


// 4. querySelectorAll()
// Selects all matching elements.
const boxes = document.querySelectorAll(".all-boxes");
console.dir(boxes);


// 3. Text and Content Access
// Three important properties:

// innerText
// Gets or changes visible text.
const changeInnerText = document.querySelector("#inner-text");
changeInnerText.innerText = "this text is changed by innerText property";

// textContent
// Gets or changes all text content, including hidden text.
const changeTextContent = document.querySelector("#text-content");
changeTextContent.textContent = "this text is changed by textContent property";

// innerHTML
// Gets or changes HTML content, including HTML tags.
const changeInnerHTML = document.querySelector("#inner-html");
changeInnerHTML.innerHTML = "<b>HTML is changed by innerHTML property</b>";


// 4. Attribute Manipulation
// Attributes provide additional information about HTML elements.
// Three important methods:

// getAttribute() – Gets an attribute value.
const link = document.querySelector("#link");
console.log(link.getAttribute("href"));


// setAttribute() – Sets an attribute value.
link.setAttribute("href", "https://google.com");


// removeAttribute() – Removes an attribute.
link.removeAttribute("target");


// 5. Dynamic DOM Manipulation
// This allows JavaScript to create, insert, and remove HTML elements dynamically.

// createElement()
// Creates a new HTML element.
const createdDiv = document.createElement("div");
createdDiv.innerText = "this div is created dynamically by createElement() method";


// appendChild()
// Adds an element at the end.
document.body.appendChild(createdDiv);


// prepend()
// Adds an element at the beginning.
// Note: an element can exist in only one place, so running this on the same
// element as appendChild() would move it instead of adding a second copy.
// document.body.prepend(createdDiv);


// removeChild()
// Removes a child element.
const paraToRemove = document.querySelector("#remove");
// document.body.removeChild(paraToRemove);
// Modern shortcut: paraToRemove.remove();


// 6. Style Manipulation
// JavaScript can change CSS styles dynamically.

// Using style
const styleDiv = document.querySelector("#style-div");

styleDiv.style.height = "200px";
styleDiv.style.width = "200px";
styleDiv.style.color = "black";
styleDiv.style.backgroundColor = "violet";
styleDiv.style.fontSize = "30px";


// Using classList
// classList helps manage CSS classes.

// Add a class:
const paragraphs = document.querySelectorAll("p");
console.dir(paragraphs);
const stylePara = document.querySelector("#style-para");
// stylePara.classList.add("highlight");


// Remove a class:
// stylePara.classList.remove("highlight");


// Toggle a class:
stylePara.classList.toggle("highlight");


// Check a class:
console.log(stylePara.classList.contains("highlight"));