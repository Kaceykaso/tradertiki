
import { firstNames, lastNames } from "./names";

/* Setting up... */
let firstName: string, lastName: string;
let spinner: HTMLElement | null = document.getElementById("spinner");
let firstNameBox: HTMLInputElement | null = document.getElementsByTagName("input")[0];
let lastNameBox: HTMLInputElement | null = document.getElementsByTagName("input")[1];

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
function spin(firstBox: HTMLInputElement | null, lastBox: HTMLInputElement | null) {
    // Grab names
    firstName = firstNames[Math.floor(Math.random() * Object.keys(firstNames).length)];
    lastName = lastNames[Math.floor(Math.random() * Object.keys(lastNames).length)];
    // Shove names in boxes
    firstBox.value = firstName;
    lastBox.value = lastName;
    spinOut();
}

/**
 * spinOut: executes a spin affect by transforming the element's CSS inline to rotate
 */
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
