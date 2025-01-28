const ERROR_STR_CAL = "Irgendwas ging schief"

const prompt = require('prompt-sync')({sigint: true});

startApp();
function startApp() {
   output(calculator(getNum1(),getNum2(),getOp()));
}

function getNum1() {
    return parseInt(prompt("Num1?: "));
}

function getNum2() {
    return parseInt(prompt("Num2?: "));
}


function getOp() {
    return prompt("OP?: ");
}



// // module: calculator | tests
// // agreement : "+","-",
// // output(calculator(4,4,"+"));
// // output(calculator(6,2,"-"));
// // output(calculator(3,2,"-"));

function calculator(a,b,op) {
    switch (op) {
        case "+": // addieren
            return Summe(a,b);
            
        case "-":  // subtrahieren
            return Differenz(a,b);
           
        
        default:
            return "Irgendwas ging schief";

    }
}




//     // module: subtraction a - b |  test:
    // output(Differenz(3,2));
    // output(Differenz(3,-2));
    // output(Differenz(3,0));
    // output(Differenz(0,2));
    function Differenz(a,b) {
     return a - b;
    }
    
    
    
    
//     // module: addition a + b |  test:
    // output(Summe(3,2));
    // output(Summe(3,-2));
    // output(Summe(3,0));
    function Summe(a,b) {
        return a + b;
    }
    
    
    
    
    
    
//     //module: output | test:
//     // output ("hi");
//     // output (2);
//     // output(true);
    function output(outputData) {
        console.log("Das Ergebnis lautet : " + outputData)
    }




