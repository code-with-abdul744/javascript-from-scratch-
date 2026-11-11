// Timers and Intervals
// timers allow java-script to execute a function after a specific amount of time or repeatedly after a fixed interval.

// 1.setTimeout()
// setTimeout() executes a function only once after a specific delay.

// example:
const timeout_btn = document.querySelector('#timeout-btn');
const timeout_message = document.querySelector('#timeout-message');

timeout_btn.addEventListener('click', function () {
    setTimeout(function () {
        timeout_message.textContent = "Hello developer. this message send by set-timeout.";
        console.log("Hello developer. this message send by set-timeout.");
        timeout_message.style.color = "green";
    }, 5000);
});


// 2.clearTimeout()
// clearTimeout() cancels a sheduled setTimeout() before it executes.

// example:
const start_timeout_btn = document.querySelector('#start-timeout-btn');
const cancel_timeout_btn = document.querySelector('#cancel-timeout-btn');
const timeout_status = document.querySelector('#timeout-status');
const timer_start = document.querySelector('#timer-start');

let timeout;

start_timeout_btn.addEventListener('click', function () {
    timer_start.textContent = "timer has been started : ends in 10sec";
    timeout = setTimeout(function () {
        console.log("time completed!");
        timeout_status.textContent = "Time completed!";
    }, 10000);
});

cancel_timeout_btn.addEventListener('click', function () {
    clearTimeout(timeout);
    timeout_status.textContent = "Timer cancelled";
    timer_start.textContent = "nothing will happen now";
});


// 3.setInterval()
// setInterval() executes a function repeatedly after a fixed time interal until stopped.

// 4.clearInterval()
// clearInterval() stops a repeating interval.

// example:
const interval_counter = document.querySelector("#interval-counter");
const start_btn = document.querySelector("#start-interval-btn");
const stop_btn = document.querySelector("#stop-interval-btn");

let intervalCountValue = 0;
let interval;

start_btn.addEventListener('click', function () {
    interval = setInterval(function () {
        intervalCountValue++;

        interval_counter.textContent = intervalCountValue;
    }, 1000);
});

stop_btn.addEventListener('click', function () {
    clearInterval(interval);
});