/*** Mini-Challenge  */
// Satzbau + variable Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
// output(getSentence(["Ich","bin","Max"],"S"));
// output(getSentence(["Bist","du","Max"],"Q"));
// output(getSentence(["Ich","bin"],"E"));
// output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));



// Funktion mit Array als Parameter und variable Punktuation
function getSentence(wordsArray, type) {
    // Verbindet die Wörter im Array mit einem Leerzeichen
    const sentence = wordsArray.join(" ");
    
    // Punktuation hinzufügen je nach Typ
    if (type === "S") return sentence + ".";
    if (type === "Q") return sentence + "?";
    if (type === "E") return sentence + "!";
    
    // Fehler werfen, wenn der Typ ungültig ist
    throw new Error("Ungültiger Typ. Erlaubt sind 'S', 'Q' oder 'E'.");
}

// Ausgabe-Funktion
function output(result) {
    console.log(result);
}

// Testfälle
output(getSentence(["Ich", "bin", "Max"], "S")); 
// Erwartete Ausgabe: Ich bin Max.

output(getSentence(["Bist", "du", "Max"], "Q")); 
// Erwartete Ausgabe: Bist du Max?

output(getSentence(["Ich", "bin"], "E"));        
// Erwartete Ausgabe: Ich bin!

output(getSentence(
    ["Ich", "hätt", "gern", "die", "Platt", "von", "dene", "zwei", "diwodaso", "Spass", "mache,", "habbe", "Sie", "die"],
    "Q"
)); 
// Erwartete Ausgabe: Ich hätt gern die Platt von dene zwei diwodaso Spass mache, habbe Sie die?

                
                

              


        
           
           
           
             
            
    
        
