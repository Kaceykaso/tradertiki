$(document).ready(function() {
    const firstNames = {
        1: "Beachbum",
        2: "Driftwood",
        3: "Hula",
        4: "Kon",
        5: "Pacific",
        6: "Trader",
        7: "Tiki",
        8: "Sandcomber",
        9: "South"
    };
    const lastNames = {
        1: "Beach",
        2: "Island",
        3: "Sands",
        4: "Tiki",
        5: "Tai",
        6: "Tropics"
    };
    var firstName, lastName;

    // Listen for them clicks
    $(document).on("click", "#spinner", function() {
        var firstNameBox = document.getElementById("firstNameBox");
        var lastNameBox = document.getElementById("lastNameBox");
        $spin(firstNameBox, lastNameBox);
    });

    $spin = function(firstNameBox,lastNameBox) {
        // Grab names
        firstName = firstNames[Math.floor(Math.random() * Object.keys(firstNames).length)];
        lastName = lastNames[Math.floor(Math.random() * Object.keys(lastNames).length)];
        // Shove names in boxes
        firstNameBox.value = firstName;
        lastNameBox.value = lastName;
    };

});