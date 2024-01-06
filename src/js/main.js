/**
 * Variables and things
 */
const firstNames = {
    0: "Beachbum",
    1: "Driftwood",
    2: "Hula",
    3: "Kon",
    4: "Pacific",
    5: "Tiki",
    6: "Trader",
    7: "Tropical",
    8: "Sandcomber",
    9: "South",
    10: "Rumrunner",
    11: "Beachgoer",
    12: "Rumslinger",
    13: "The Pirate"
};
const lastNames = {
    0: "Beach",
    1: "Balls",
    2: "Island",
    3: "Sands",
    4: "Tiki",
    5: "Tai",
    6: "Tropics",
    7: "Pirate",
    8: "Beard"
};
let firstName, lastName;
let spinner = document.getElementById("spinner");
let firstNameBox = document.getElementById("firstNameBox");
let lastNameBox = document.getElementById("lastNameBox");

/**
 * Clicks and clacks
 */
spinner.addEventListener('click', () => {
    generateNames(firstNameBox, lastNameBox);
    //if (firstNameBox.value !== "" && lastNameBox.value !== "") spinOut();
});

spinner.addEventListener('touchstart', () => {
   //spinUp(); 
});

spinner.addEventListener('touchcancel', () => {
    //spinOut();
});

/**
 * generateNames: executes logic to populate the input fields on click of the spinner button
 * @param {HTMLInputElement} firstBox - firstNameBox text input from document
 * @param {HTMLInputElement} lastBox - lastNameBox text input from document
 */
const generateNames = (firstBox, lastBox) => {
    // Get and check names
    firstName = getName(firstNames);
    lastName = getName(lastNames);

    if (nameDupeCheck(firstName, lastName) == 0) {
        // no dupes, good to continue
        // Shove names in boxes
        firstBox.value = firstName;
        lastBox.value = lastName;
    } else {
        // not good, try last name again
        console.log("Found dupes, trying again...")
        generateNames(firstBox, lastBox);
    }
    
}

const getName = (nameList) => {
    let name = nameList[Math.floor(Math.random() * Object.keys(nameList).length)];

    // Is name blank or outside the list legnth?
    if (name !== "" || name <= nameList.length) return name; // all good
    else return "";
    console.log("Name failed");
}

const nameDupeCheck = (name1, name2) => {
    let check = 0;
    return name1 !== name2 ? check : check = 1;
}

/**
 * Spin Styling
*/

/**
 * spinUp: executes a spin affect by transforming the element's CSS inline to rotate
 */
/*const spinUp = () => {
    spinner.style.transform = 'rotate(180deg)';
}

/**
 * spinOut: executs reverse spin transfer to return element to original state
 */
/*const spinOut = () => {
    spinner.style.transform = 'rotate(0)';
    spinner.style.transition = 'transform 0.3s';
}

/**
 * If document ready, GOOOOOOOOOOOOOOO!
 */
const ready = (fn) => {
    if (document.readyState!== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
