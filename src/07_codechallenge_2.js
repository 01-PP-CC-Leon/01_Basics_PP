/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

*/

/* Getränke-Challenge */

const prompt = require('prompt-sync')({sigint: true});

{

    // Benutzerinformationen einholen
const name = prompt("Gib deinen Namen ein:");
const alter = parseInt(prompt("Gib dein Alter ein:"),10);

// Getränkeauswahl als Funktion
function getraenkWaehlen(alter) {
    if (alter > 0 && alter < 6) return "Milch";
    if (alter >= 6 && alter <= 12) return "Saft";
    if (alter >= 13 && alter <= 17) return "Cola";
    if (alter >= 18) return "Wein";
    
}

const getraenk = getraenkWaehlen(alter);
console.log(`Hallo ${name}, dein Getränk ist: ${getraenk}`);

}