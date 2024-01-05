import { firstNames, lastNames } from "../ts/names";

let firstName, lastName;
let spinner = document.getElementById("spinner");
let firstNameBox = document.getElementById("firstNameBox");
let lastNameBox = document.getElementById("lastNameBox");

/**
 * Clicks and clacks
 */
spinner.addEventListener('click', () => {
    spin(firstNameBox, lastNameBox);
});

spinner.addEventListener('touchstart', () => {
   spinUp(); 
});

spinner.addEventListener('touchcancel', () => {
    spinOut();
});

/**
 * spin: executes logic to populate the input fields on click of the spinner button
 * @param {HTMLInputElement} firstBox - firstNameBox text input from document
 * @param {HTMLInputElement} lastBox - lastNameBox text input from document
 */
function spin(firstBox, lastBox) {
    // Grab names
    firstName = firstNames[Math.floor(Math.random() * Object.keys(firstNames).length)];
    lastName = lastNames[Math.floor(Math.random() * Object.keys(lastNames).length)];
    // Shove names in boxes
    firstBox.value = firstName;
    lastBox.value = lastName;
    spinOut();
}

function spinUp() {
    spinner.style.transform = 'rotate(180deg)';
}

function spinOut() {
    spinner.style.transform = 'rotate(0)';
    spinner.style.transition = 'transform 0.3s';
}

/**
 * If document ready, GOOOOOOOOOOOOOOO!
 */
function ready(fn) {
    if (document.readyState!== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
