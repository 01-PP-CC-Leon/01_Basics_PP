/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken


// Funktionsaufruf | call
// test();


//Funktionsrumpf | callee
// Funktionsdeklaration

function test()
{
console.log("Hallo zusammen!");
}


/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen (); // Call


function ausgabeNamen() {
       // interne Variable | What happens in VEGAS ...
       let firstName = "Schüler"
       console.log("Hallo, " + firstName + "!");
}

// console.log(firstName); // Fehler :  scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamen2("Leon"); // Argument --> Daten für Parameter
// ausgabeNamen2("Max");


function ausgabeNamen2(firstName) { // Parameter
       console.log("Hallo, " + firstName + "!");
}


/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

ausgabeNamenParams("Max","Mütze")

const prompt = require('prompt-sync')({sigint: true});
ausgabeNamenParams(prompt("Vorname? :"),prompt("Name? :")); // Piping

function ausgabeNamenParams(firstName, secondName) {
       console.log("Hallo, " + firstName + " " + secondName + "!");
}