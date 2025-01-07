/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1990;
const birthYearMark = 1990;

// Berechnung Alter

let date = new Date();
let year = date.getFullYear();
ageJohn = year - birthYearJohn
ageMark = year - birthYearMark

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
// console.log("Datum. " + date);

// Tests
let isJohnOlder; // Is John older? ---> y/n ---> true | false
isJohnOlder = (ageJohn > ageMark);
let isJohnEqual = (ageJohn == ageMark);

console.log("isJohnOlder: " + isJohnOlder)
console.log("isJohnEqual: " + isJohnEqual)