//  GLOBAL VARIABLES
// =========================================================
// Arrays and Variables for holding data

var wordOptions = ["lottie", "lizzie", "hannah", "julia"];
var selectedWord = "";
var letterinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// FUNCTIONS (Reusable code that will call upon when needed)
// =========================================================
function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    letterinWord = selectedWord.split("");
    numBlanks = letterinWord.length;

    //Reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //Push the blanks and successes to first panel
    for (var i=0; i<numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    //Change HTML to reflect round condidtions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHMTL = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;


        //Test your code 
        console.log(selectedWord);
        console.log(letterinWord);  
        console.log(numBlanks);
        console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
    //check if letters exist at all

    var isLetterinWord = false;
    for (var i=0; i<numBlanks; i++) {
        if(selectedWord[i] === letter) {
            isLetterinWord = true;           
        }
    }
    // else (selectedWord[i] === letter) {
    //     isLetterinWord = false;
    //     alert("Guess again");

    //     }
    // }

    // Populate blank with appropriate letter
    if(isLetterinWord) {
        for (var i=0; i<numBlanks; i++) {
            if(selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }
    
    //letter not found
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }
    
    //testing and debug
    console.log(blanksAndSuccesses);
}

function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);

    //Update HTML with selectors
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join("  ");
    //check if user won
    if (letterinWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("YOU WON");

        //Update win counter in HTML
        document.getElementById("winCounter").innerHTML = winCount;

        startGame();
    }
    // check if user lost

    else if (guessesLeft == 0) {
        lossCount++;
        alert("YOU LOST");

        //update HTML
        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();
    }


}




// MAIN PROCESS
// =========================================================

//Initiates the code the first time
startGame();

//Register keyclicks
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

//Testing debugging
console.log(letterGuessed);


}