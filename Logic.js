//VARIABLES


var wordOptions = ["lottie", "lizzie", "hannah", "julia"];
var selectedWord = "";
var letterinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// FUNCTIONS 
function startGame() {
    document.getElementById("wrongGuesses").innerHTML = [];
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    letterinWord = selectedWord.split("");
    numBlanks = letterinWord.length;

    //Reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //Push the blanks and successes to first panel
    for (var i=0; i<numBlanks; i++) {
        blanksAndSuccesses.push("__");
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
        
        setTimeout(function() { alert("YOU WIN! You guessed " + selectedWord); }, 50);
        // alert("YOU WON");


        //Update win counter in HTML
        document.getElementById("winCounter").innerHTML = winCount;

        //Delay startGame function so selectedWord alerts correctly
        setTimeout(function() { startGame(); }, 200);
        // startGame();
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

startGame();

// keyclicks
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();


// Testing code for buttons:
// function myfunction() {
    // document.getElementById ("idZ").value = "BMW";  //great success
    // document.getElementById ("idZ").innerHTML = blanksAndSuccesses.join(" ");
    //Perhaps try setting the key value to a CharCode







// Scratched code for buttons

// document.getElementById("A").onclick = function(event) {
//     var letterGuessed = String.fromCharCode(event.keycode);
//     console.log(letterGuessed);
//     checkLetters(letterGuessed);
//     roundComplete();

// document.getElementById("A").innerHTML = blanksAndSuccesses.join(" "); {
//     function(event) {
//         var letterGuessed = String.fromCharCode(event.keyCode);
//         checkLetters(letterGuessed);
//         roundComplete();
// } 
// {clickedA()};
// function clickedA() {
//     document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");



//Debug
// console.log(event.keycode);
// console.log(letterGuessed);


}