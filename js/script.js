// VAR TO GET THE INPUTS
let storageRam = "";
// VAR TO CALCULATE
let storageHd = [];
let oldValue;
let total = 0;

const calculatorDisplay = document.querySelector(".calculator-scr");

// SIGNS IN THE CALCULATOR, WE WILL USE TO ADD SPACE BETWEEN THE NUMBERS
const signArray = ["-", "+", "*", "/"];
const signEqual = "=";
const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ","]

// GRABBING ALL THE DIVS (.ITEM) INSIDE THE CALCULATOR AND ADDING FUNCTIONALITY
document.querySelectorAll(".item").forEach(el => {
    el.addEventListener("mousedown", (e) => {
        // BELOW CODE WILL CHECK PRESSED KEYS
        if(e.target.getAttribute("value") === "clear"){
            storageRam = "";
            calculatorDisplay.textContent = 0;
        } else if(e.target.getAttribute("value") === "="){
            resolveInput();
        } else if (signArray.indexOf(e.target.getAttribute("value")) !== -1){
                storageRam += ` ${e.target.getAttribute("value")} `;
        } else if (e.target.getAttribute("value") !== null){
                storageRam += e.target.getAttribute("value");
            }
        // BELOW CODE MANAGE CALCULATOR DISPLAY
        if(storageRam === "" && !storageHd.length){
            calculatorDisplay.textContent = 0;
        } else if (storageRam.length && !storageHd.length){
            calculatorDisplay.textContent = storageRam;
        } else {
            calculatorDisplay.textContent = total + storageRam;
        }
    }
)});

// GRABBING KEYBOARD KEYS AND ADDING FUNCTIONALITY
document.addEventListener("keydown", (e) => {
        // BELOW CODE WILL CHECK PRESSED KEYS
        if(e.key === "Delete"){
            storageRam = "";
            total = 0;
            storageHd = [];
        } else if(e.key === "Enter"){
            resolveInput();
        } else if (signArray.indexOf(e.key) !== -1){
                storageRam += ` ${e.key} `;
        } else if (numbersArray.indexOf(e.key) !== -1){
                storageRam += e.key;
            }
        // BELOW CODE MANAGE CALCULATOR DISPLAY
        if(storageRam === "" && !storageHd.length){
            calculatorDisplay.textContent = 0;
        } else if (storageRam.length && !storageHd.length){
            calculatorDisplay.textContent = storageRam;
        } else if (e.key === "Delete"){
            storageRam += "0";
            calculatorDisplay.textContent = storageRam
        } else {
            calculatorDisplay.textContent = total + storageRam;
        };
    });


function resolveInput(){
    // BELOW CODE WILL BE ON USE IF WE HAVE ALREADY CALCULATE ANYTHING BEFORE.
    if(total !==0){
        oldValue = total;
        storageHd = storageRam.split(" ");
        // BELOW LINE IS TO GET RID OF FIRST ARRAY ELEMENT "" THAT WILL INSERTED DUE TO SIGN PRESSED BEFORE A NUMBER
        storageHd.shift();
        // BELOW LINE WILL INSERT AS FIRST ARRAY ELEMENT PREVIOUS CALCULATED NUMBER
        storageHd.unshift(oldValue);
        storageRam = "";

        for(let i=1; i< storageHd.length; i++){
            switch(storageHd[i]){
                case (signArray.indexOf(storageHd[i]) === -1):
                    break;
                case "+":
                    if (total !== 0){
                        total += parseFloat(storageHd[i+1])
                    } else {
                    total = (parseFloat(storageHd[i-1]) + parseFloat(storageHd[i+1]));
                    }
                    break;
                case "-":
                    if (total !== 0){
                    total -= parseFloat(storageHd[i+1]);
                    } else {
                        total -= (parseFloat(storageHd[i-1]) - parseFloat(storageHd[i+1]));
                    }
                    break;
                case "*":
                    if (total !== 0){
                        total *= parseFloat(storageHd[i+1])
                    } else {
                    total = (parseFloat(storageHd[i-1]) * parseFloat(storageHd[i+1]));
                    }
                    break;
                case "/":
                    if (total !== 0){
                        total /= parseFloat(storageHd[i+1])
                    } else {
                    total = (parseFloat(storageHd[i-1]) / parseFloat(storageHd[i+1]));
                    }
                    break;
            }
        };

    } else {
    // ONCE = PRESSED WE WILL SEND STORAGERAM INTO STORAGEHD. EACH NUMBER AND SIGN WILL BE SEPPARATED.
    storageHd = storageRam.split(" ");
    storageRam = "";
   
    for(let i=1; i< storageHd.length; i++){
        
        switch(storageHd[i]){
                case (signArray.indexOf(storageHd[i]) === -1):
                    break;
                case "+":
                    if (total !== 0){
                        total += parseFloat(storageHd[i+1])
                    } else {
                    total = (parseFloat(storageHd[i-1]) + parseFloat(storageHd[i+1]));
                    }
                    break;
                case "-":
                    if (total !== 0){
                    total -= parseFloat(storageHd[i+1]);
                    } else {
                        total -= (parseFloat(storageHd[i-1]) - parseFloat(storageHd[i+1]));
                    }
                    break;
                case "*":
                    if (total !== 0){
                        total *= parseFloat(storageHd[i+1])
                    } else {
                    total = (parseFloat(storageHd[i-1]) * parseFloat(storageHd[i+1]));
                    }
                    break;
                case "/":
                    if (total !== 0){
                        total /= parseFloat(storageHd[i+1])
                    } else {
                    total = (parseFloat(storageHd[i-1]) / parseFloat(storageHd[i+1]));
                    }
                    break;

        }


    };

   };

   if (isNaN(total)){
        total = 0;
        calculatorDisplay.textContent = "Error";
        storageHd = [];
        storageRam = "";
    } else {            
        calculatorDisplay.textContent = total;
    };

};