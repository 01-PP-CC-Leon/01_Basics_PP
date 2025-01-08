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

