var lettersGuessed = [];
var wrongGuesses = 0;
var correctGuesses = 0;
var guessesMade = 0;
var wrongGuessesLeft = 10;
var hangmanDashWord = "";
var hangmanDashWordChar = "_ ";
var score = 0;
var wins = 0;
var losses = 0;
var gamesPlayed = 0;
var hipsterArray = [ "topknot", "meggings", "flexitarian", "vexillologist", "chartreuse", "microdosing", "pitchfork", "skateboard", "locavore", "glossier", "thundercats", "readymade", "unicorn", "succulents" ];
var hipsterWordNumber = Math.floor(Math.random() * hipsterArray.length);
var hipsterWord = hipsterArray[hipsterWordNumber];
var hipsterWordLength = hipsterArray[hipsterWordNumber].length;
var allowedLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var notAllowed = "Not Allowed. Check Your Topknot, Bro. Use letters only.";
var goodGuessPressed = "Well done, my unkemptly bearded friend. Press another guess!";
var badGuessPressed = "Ouch. That's going to hurt. Put some Aloe on it maybe."

// display the hangman dashes
function displayDashWord() {
console.log("Word: " + hipsterWord + " Length: " + hipsterWordLength + " Position in array: " + hipsterWordNumber) ;	
for ( var i=0; i < hipsterWordLength ; i++){
	
	hangmanDashWord += hangmanDashWordChar;
}

console.log("hangmanDashWord: " + hangmanDashWord);
document.querySelector("#hangmanDashWord").innerHTML = hangmanDashWord;
//document.querySelector("#instructions").innerHTML = 
}

// create the game score
function displayStatus () {
document.querySelector("#hangmanDashWord").innerHTML = hangmanDashWord;
document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;
document.querySelector("#correctGuesses").innerHTML = correctGuesses;
document.querySelector("#wrongGuesses").innerHTML = wrongGuesses;
document.querySelector("#wrongGuessesLeft").innerHTML = wrongGuessesLeft;
}
displayDashWord();
displayStatus();

// on key up event
document.onkeyup = function(event) {
	var playerPick = (event.key);
	playerPick = playerPick.toLowerCase();

//check to see if the playerPick is a letter
if ( allowedLetters.indexOf(playerPick) === -1 ) {
	document.querySelector("#instructions").innerHTML = notAllowed;
	console.log(allowedLetters.indexOf(playerPick));
}
else {
console.log(" Players Pick: " + playerPick + " Position in allowedLetters array: " + allowedLetters.indexOf(playerPick));



function correctlyGuessed(playerPick) {
	// change the instructions info
	document.querySelector("#instructions").innerHTML = goodGuessPressed;
// 	update and redisplay hangmanDashWord, 
// 	increment and display  lettersGuessed,

// 	increment and display correctGuesses,
// 	play correct sound
// 	return 
}
// Pseudo Code 


function incorrectlyGuessed(playerPick) {
	// change the instructions info
	document.querySelector("#instructions").innerHTML = badGuessPressed;
	
	//increment and display wrongGuesses
	wrongGuesses++;

// 	increment and display guessesMade
// 	decrease guessesLeft and display
// 	append and redisplay lettersGuessed
// 	return
}
// };
// function displayLoser(message){
// 	display loser message
// 	increment loss
// 	return
// };

// function displayWinner(message){
// 	display winner message
// 	increment wins
// 	return

// };

//function startGame(playerPick)
// display the hangmanDashWord in dashes


//  sure the word has not been guessed already

// if ( playerPick is contained in lettersGuessed ) {
// 	alert("You already picked that one, broser.")

// 	else 	if ( playerPick is not contained in allowedLetters ) {
// 		alert("Not allowed, hoser. Lower Case letters only, you freegan.");
// 	}
// 	else {

// 		 search the array for the letter pressed
 
//  		if (the letter is found){

//  		run correctlyGuessed(playerPick)
//  		}

//  		else {
//  		incorrectlyGuessed(playerPick);
//  			if wrongGuessesLeft = 0 {
//  			alert("Sorry, You Lost Bro. Drink some more PBR and check your topknot.")
//  			end game
//  		}
//  	}
// }
}
}