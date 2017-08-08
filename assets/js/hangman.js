
var lettersGuessed = [];
var wrongGuesses = 0;
var correctGuesses = 0;
var guessesMade = 0;
var wrongGuessesLeft = 10;
var hangmanDashWord = [];
var lettersGuessed = [];
var wrongGuesses = 0;
var correctGuesses = 0;
var guessesMade = 0;
var wrongGuessesLeft = 10;
var hangmanDashWord = [];
var hangmanDashWordChar = "-";
var hangmanDashWordDisplay = "";
var score = 0;
var wins = 0;
var losses = 0;
var gamesPlayed = 0;
var hipsterArray = [ "topknot", "meggings", "flexitarian", "vexillologist", "chartreuse", "microdosing", "pitchfork", "skateboard", "locavore", "glossier", "thundercats", "readymade", "unicorn", "succulents" ];
var hipsterWordNumber = Math.floor(Math.random() * hipsterArray.length);
var hipsterWord = hipsterArray[hipsterWordNumber];
var allowedLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var notAllowed = "Not Allowed. Check Your Topknot, Bro. Use letters only.";
var goodGuessPressed = "Well done, my unkemptly bearded friend. Press another guess!";
var badGuessPressed = "Ouch. That's going to hurt. Put some Aloe on it maybe."

function startGame(){
hipsterWordNumber = Math.floor(Math.random() * hipsterArray.length);
hipsterWord = hipsterArray[hipsterWordNumber];
lettersGuessed = [];
wrongGuesses = 0;
correctGuesses = 0;
guessesMade = 0;
wrongGuessesLeft = 10;
hangmanDashWord = [];
displayDashWord();
displayStatus();
};

// display the hangman dashes clue
function displayDashWord() {
console.log("Word: " + hipsterWord + " Length: " + hipsterWord.length + " Position in array: " + hipsterWordNumber) ;	
for ( var i=0; i < hipsterWord.length ; i++){
	
	hangmanDashWord.push(hangmanDashWordChar);
	hangmanDashWordDisplay += hangmanDashWordChar + " ";
}

console.log("DEBUG FOOFOO " + "hangmanDashWord:  " + hangmanDashWord + "hangmanDashWordDisplay: " + hangmanDashWordDisplay);
document.querySelector("#hangmanDashWordDisplay").innerHTML = hangmanDashWordDisplay;
}

// create the game score
function displayStatus () {
document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;
document.querySelector("#correctGuesses").innerHTML = correctGuesses;
document.querySelector("#wrongGuesses").innerHTML = wrongGuesses;
document.querySelector("#wrongGuessesLeft").innerHTML = wrongGuessesLeft;
}

// pregame page setup

//startGame();
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

// update the dash word display to reflect the correct guess
function updateDashWord (playerPick) {
	//in case letter is found multiple times
		hangmanDashWordDisplay = "";
		for (var i=0;i<hipsterWord.length;i++){
			var letterLocation = hipsterWord.charAt(playerPick);
			console.log("letterLocation: " + letterLocation + " playerPick: " + playerPick)
			if ( letterLocation !== -1 ) {
				hangmanDashWord[letterLocation] = playerPick;
				console.log("DEBUG FOO " + hangmanDashWord[i] + " " + playerPick);
				hangmanDashWordDisplay += hangmanDashWord[i] + " "
				
				}
		// for (var j=0;j<hangmanDashWord.length;j++){
		// 	console.log("DEBUG HangmanDashWord " + j);
		// 	hangmanDashWordDisplay += hangmanDashWord[j] + " "
		// 	}
		}
		
		console.log("DEBUG FOOFOOFOO " + " hangmanDashWordDisplay: " + hangmanDashWordDisplay);
		document.querySelector("#hangmanDashWordDisplay").innerHTML = hangmanDashWordDisplay;
	
}

function correctlyGuessed(playerPick) {
	console.log("correctlyGuessed");
	//check to see if the game is finished
	gameWinCheck();
	// change the instructions info
	document.querySelector("#instructions").innerHTML = goodGuessPressed;
// 	update and redisplay hangmanDashWord, 
	updateDashWord(playerPick);
// 	increment and display  lettersGuessed,
	lettersGuessed.push(playerPick);
	document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;
// 	increment and display correctGuesses,
	correctGuesses++;
	document.querySelector("#correctGuesses").innerHTML = correctGuesses;
// 	play correct sound 
}



function incorrectlyGuessed(playerPick) {
	console.log("incorrectlyGuessed");
	// change the instructions info
	document.querySelector("#instructions").innerHTML = badGuessPressed;

	//increment and display wrongGuesses
	wrongGuesses++;
	document.querySelector("#wrongGuesses").innerHTML = wrongGuesses;
// 	increment and display guessesMade
	guessesMade++;
	document.querySelector("#guessesMade").innerHTML = guessesMade;
// 	decrease guessesLeft and display
	wrongGuessesLeft--;
	document.querySelector("#wrongGuessesLeft").innerHTML = wrongGuessesLeft;
	if ( wrongGuessesLeft === 0 ) {
			gameOverLose();
	}
// 	append and redisplay lettersGuessed
	lettersGuessed.push(playerPick);
	document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;
// 	play fail sound

};
// };
// 	display loser message
function gameOverLose(){
  losses++; gamesPlayed++;
  document.querySelector("#losses").innerHTML = losses;
  document.querySelector("#gamesPlayed").innerHTML = gamesPlayed;
  alert("YOU LOSE SUCKA");
  //play loser sound?
};

// 	display winner message
function gameOverWin(){
	wins++; gamesPlayed++;
	document.querySelector("#wins").innerHTML = wins;
  	document.querySelector("#gamesPlayed").innerHTML = gamesPlayed;
  	alert("you win, hipster. have a luke warm PBR. good for you. no one cares, hashtag that.");
  	startGame();
  	//play winner sound?
};

function gameWinCheck(){
	var count = 0;
	for (var i=0;i < hangmanDashWord.length ; i++) {
		if (hangmanDashWord[i] === hangmanDashWordChar){
			count++;
		}
	}
	if ( count === 0 ) {
		console.log("count is zero");
		gameOverWin();
	}
}

//actually run the game code?

// check to see if playerPick has been used already

if ( lettersGuessed.indexOf(playerPick) != -1 ){
	console.log("already picked!!");
	document.querySelector("#instructions").innerHTML = "You already pressed " + playerPick + " please try again.";
	return;
	}

// 		 search the array for the letter pressed
else if ( hipsterWord.indexOf(playerPick) != -1 ) {
		console.log("found pick ");
		correctlyGuessed(playerPick);
	}

else {
	incorrectlyGuessed(playerPick);
}
}
}