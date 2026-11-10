// 3. Forms and Form Validation
// Forms are used to collect user information, such as name, email, password, phone number, and feedback.


// 1. Reading values from input, textarea, and select.

// 1.1 Reading Values from Input
// The .value property is used to get the value entered by a user.

// example
let nameInput = document.getElementById("username");
let submitNameButton = document.getElementById("btn");

submitNameButton.addEventListener("click", function () {
    console.log(nameInput.value);
});


// 1.2 Reading Values from Textarea
// Textarea is used to collect long text, such as feedback or comments.

// example
let messageTextarea = document.getElementById("message");
let submitMessageButton = document.getElementById("btn2");

submitMessageButton.addEventListener("click", function () {
    console.log(messageTextarea.value);
});


// 1.3 Reading Values from Select
// Select is used to create a dropdown menu.

// example
let courseSelect = document.getElementById("course");
let submitCourseButton = document.getElementById("btn3");

submitCourseButton.addEventListener("click", function () {
    console.log(courseSelect.value);
});


// 2. Prevent Default Form Submission
// Normally, when a form is submitted, the browser may reload or navigate to another page.
// We use event.preventDefault() to stop the default submission behavior.

// example
let simpleForm = document.getElementById("myForm");

simpleForm.addEventListener("submit", function (submitEvent) {
    submitEvent.preventDefault();
    console.log("Form submitted without page reload");
});


// 3. HTML Form Validation
// HTML provides built-in validation attributes. You don't always need JavaScript.

// required     : Field must be filled
// minlength    : Minimum number of characters
// maxlength    : Maximum number of characters
// min          : Minimum numeric/date value
// max          : Maximum numeric/date value
// type="email" : Checks email format
// pattern      : Checks a specified pattern


// 4. JavaScript-Based Validation
// JavaScript gives you more control over validation and error messages.

// Example: Check whether a username is empty.
let usernameValidationForm = document.getElementById("myForm2");
let validationUsernameInput = document.getElementById("username2");
let usernameErrorMessage = document.getElementById("error");

usernameValidationForm.addEventListener("submit", function (validationSubmitEvent) {
    validationSubmitEvent.preventDefault();
    if (validationUsernameInput.value.trim() === "") {
        usernameErrorMessage.textContent = "Username is required";
        usernameErrorMessage.style.color = "red";
    } else {
        usernameErrorMessage.textContent = "Form submitted successfully";
        usernameErrorMessage.style.color = "green";
    }
});


// 5. Showing Error Messages Conditionally
// We can display error messages only when validation fails.

// example
let emailInput = document.getElementById("email2");
let emailErrorMessage = document.getElementById("error2");

emailInput.addEventListener("input", function () {
    if (!emailInput.value.includes("@")) {
        emailErrorMessage.textContent = "Enter a valid email";
        emailErrorMessage.style.color = "red";
    } else {
        emailErrorMessage.textContent = "";
    }
});


// 6. Pattern Attribute vs Custom Regex
// Both are used to validate text against a specific pattern.

// A. Pattern attribute
// HTML provides the pattern attribute.

// HTML:
// <input type="text"
//        pattern="[0-9]{10}"
//        placeholder="Enter 10 digit number"
//        required>
// <button type="submit">Submit</button>

// B. Custom Regex in JavaScript
// Regex means Regular Expression. It is used to match patterns in strings.

// Example:
let samplePhoneNumber = "9876543210";
let tenDigitPattern = /^[0-9]{10}$/;
console.log(tenDigitPattern.test(samplePhoneNumber));