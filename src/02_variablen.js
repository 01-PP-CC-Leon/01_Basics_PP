// Zeilenkommentar;

/*

              Blockkommentar 

*/

/***** Variablen 01 ********/

// console.log("Hi!");
// console.log(Hi);

/* Deklaration + Wertzuweisung I */

// let firstName; // Deklaration (Definition)
// console.log(firstName); // Ausgabe
// firstName = "Leon I." // Wertzuweisung (Assignment)
// console.log(firstName); // Ausgabe
// let familyName = "Kaiser von Deutschland"; //Deklaration + Wertzuweisung
// console.log("Hi, ich bin " + firstName + " " +familyName + "!" );


/*
  Wertzuweisung II + Datentypen
  JS ist eine untypisierte Sprache!
*/  

// let test;  // Deklaration
// console.log("Datentyp: " + typeof test );
// console.log ("Inhalt: " + test);
// console.log("----------------")
// test = "Ich bin der Kaiser von Deutschland"; // string
// console.log("Datentyp: " + typeof test );
// console.log ("Inhalt: " + test);
// console.log("----------------")
// test = 2 // number
// console.log("Datentyp: " + typeof test );
// console.log ("Inhalt: " + test);
// console.log("----------------")
// test = true; // boolean
// console.log("Datentyp: " + typeof test );
// console.log ("Inhalt: " + test);
// console.log("----------------")

/* Variablen vs. Konstanten in JS */

// Variable

let test;  // Variable: Deklaration
test = "hi"; // Wertzuweisung (Initialisierung)
test = "hello"; // Überschreiben
console.log("Inhalt: " + test); // Ausgabe

// Konstante
const test2 = "Hi!"; // Deklaration + Wertzuweisung gemeinsam !
test2 = " Wo ist Oktay?"; //Laufzeitfehler !!
console.log("Inhalt: " + test2); // Ausgabe
