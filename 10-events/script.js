// Events and event handling

// 1. What are events ?
// An event is an action or occurence that happens in the browser, usually triggered by a user or the browser itself.

// example
const btn = document.querySelector('#btn-1');
const para = document.querySelector('#answer-1');

btn.addEventListener('click', () => {
    para.textContent = 'An event is an action or occurence that happens in the browser, usually triggered by a user or the browser itself.';
});


// 2. Event Binding 
// Event binding means connecting an event to a function.

// a. addEventListener()
// used to attach an event handler to an element.

// example
const add_event = document.querySelector('#add-event');
const add_event_output = document.querySelector('#add-event-output');

add_event.addEventListener('click', () => {
    add_event_output.textContent = 'addEventListener() is used to attach an event handler to an element.'
});

// b. RemoveEventListener()
// used to remove an event handler that has been attached with addEventListener().

// example
function clickHandler() {
    const remove_listener_output = document.querySelector('#remove-listener-output');
    remove_listener_output.textContent = 'event is atached!';
}

const demo_btn = document.querySelector('#click-demo-button');
const remove_listener_btn = document.querySelector('#remove-listener-button');
const remove_listner_output = document.querySelector('#remove-listener-output');

demo_btn.addEventListener('click', clickHandler);

remove_listener_btn.addEventListener('click', () => {
    demo_btn.removeEventListener('click', clickHandler)
    remove_listner_output.textContent = 'event is removed';
});


// 3. Common javaScript events

// a. Click event 
// triggered when the user clicks an element.

// example
const click_event_btn = document.querySelector('#click-event');
const click_event_output = document.querySelector('#click-event-output');

click_event_btn.addEventListener('click', function () {
    click_event_output.textContent = 'triggered when the user clicks an element.'
});


// b. Input Event
// triggered when-ever the value of an input changes.

// example
const input_event = document.querySelector('#input-event');
const input_event_output = document.querySelector('#input-event-output');

input_event.addEventListener('input', function (evt) {
    input_event_output.textContent = 'you typed: ' + input_event.value;
    console.dir(input_event.value);
});


// c. Change Event
// triggered when the value changes and looses focus.

// example
const change_event = document.querySelector('#change-event');
const change_event_output = document.querySelector('#change-event-output');

change_event.addEventListener('change', function () {
    console.dir(change_event.value);
    change_event_output.textContent = 'You select: ' + change_event.value;
});


// d. Submit Event
// submit event occurs when a user submits an HTML form.

// example
const submit_event_form = document.querySelector('#submit-event-form');
const submit_event_input = document.querySelector('#submit-event-input');
const submit_event_output = document.querySelector('#submit-event-output');

submit_event_form.addEventListener('submit', function (event) {
    event.preventDefault(); // stops page from reloading
    submit_event_output.textContent = "Form submitted. Hello, " + submit_event_input.value + "!";
    console.dir(submit_event_input.value);
});


// e. Mouse-over Event
// mouse-over event occurs when the mouse pointer enters or moves onto an element.

// example
const mouse_over_box = document.querySelector('#mouse-over-event');
const mouse_over_output = document.querySelector('#mouse-over-output');

mouse_over_box.addEventListener('mouseover', function () {
    mouse_over_box.textContent = 'the mouse entered the box ;)';
    mouse_over_output.textContent = "the mouse entered the box. Styles has been applyed";
    mouse_over_box.classList.add('mouse-over-event');
});

mouse_over_box.addEventListener('mouseout', function () {
    mouse_over_box.textContent = 'the mouse pointer gets away from box :(';
    mouse_over_output.textContent = 'the mouse pointer gets away from box ! styles back to normal .';
    mouse_over_box.classList.remove('mouse-over-event')
})


// 4. Event object
// the event object contains information about an event.

// a. event.target
// returns the actual element that triggered the event.

// b. event.type
// returns the name/type of the event that occured.
const target_btn = document.querySelector("#target-btn");
const target_output = document.querySelector('#event-target-output');
target_btn.addEventListener('click', function (val) {
    console.dir(val.target);
    console.dir(val.type);
    target_output.textContent = 'you can see the target value & type value in console.'
});

// c. event.preventDefault
// prevent default is a method to stop the browser's default behavior associated with event.
// event.preventDefault(); <- syntax of prevent default


// 5. Event Bubbling and Capturing
// these are two phases of event propogation in the DOM.

// a. Event Bubbling
// Event moves from the child element toward its parent.

// direction:
// Child -> Parent -> Grandparent -> Document
document.querySelector('#parent')
    .addEventListener('click', function () {
        console.log('parent clicked');
    });

document.querySelector('#child')
    .addEventListener('click', function () {
        console.log('child clicked');
    });

// b. Event Capturing
// Event moves from the parent toward the child.

// direction:
// Document -> Grandparent -> Parent -> Child
// to enable capturing ,use true as the third argument.
document.querySelector('#parent')
    .addEventListener('click', function () {
        console.log('parent clicked');
    }, true);

document.querySelector('#child')
    .addEventListener('click', function () {
        console.log('child clicked');
    }, true);

// Bublling is the default behavior for mmost common DOM events. capturing can be enabled using the third argument.


// 6. Event Deligation 
// Event delegation means attaching one event listner to a parent element instead of attaching separate listners to every child.

// example
const list = document.querySelector('#list');

list.addEventListener('click', function (event) {

    if (event.target.matches("li")) {
        event.target.classList.toggle('list-cls');
        console.log(event.target.textContent);
    }
});




