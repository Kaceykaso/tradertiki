/**
 *  Trader Tiki > Tiki Name Generator
 *	[TBD].com] | @kaceykaso
 *	GNU GPL 3.0 license
 */

/** Variables and things */
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

/**
 * generateNames: executes logic to populate the input fields on click of button, does not return anything
 */
const generateNames = () => {
    // Get target inputs
    let firstNameBox = document.getElementById("firstNameBox");
    let lastNameBox = document.getElementById("lastNameBox");
    // Get and check names
    firstName = getName(firstNames);
    lastName = getName(lastNames);

    if (nameDupeCheck(firstName, lastName) == 0) {
        // no dupes, good to continue
        // Shove names in boxes
        firstNameBox.value = firstName;
        lastNameBox.value = lastName;
    } else {
        // not good, try last name again
        console.log("Found dupes, trying again...")
        generateNames(firstNameBox, lastNameBox);
    }
}

/**
 * getName: randomly pulls a single name from the name object provided
 * @param {object} nameList - firstNameBox text input from document
 * @returns string - single name, or blank if failed
 */
const getName = (nameList) => {
    let name = nameList[Math.floor(Math.random() * Object.keys(nameList).length)];

    // Is name blank or outside the list legnth?
    if (name !== "" || name <= nameList.length) return name; // all good
    else return "";
}

/**
 * nameDupeCheck: checks if both names provided are duplicates
 * @param {string} name1 - firstName
 * @param {string} name2 - lastName
 * @returns int - 0 if names are not duplicates (success), 1 if duplicates (fail)
 */
const nameDupeCheck = (name1, name2) => {
    let check = 0;
    return name1 !== name2 ? check : check = 1;
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
