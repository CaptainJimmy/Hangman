
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
var hipsterArray = [ "topknot", "meggings", "pennyfarthing", "flexitarian", "vexillologist", "chartreuse", "microdosing", "pitchfork", "skateboard", "locavore", "glossier", "thundercats", "readymade", "unicorn", "succulents" ];
var hipsterWordNumber = Math.floor(Math.random() * hipsterArray.length);
var hipsterWord = hipsterArray[hipsterWordNumber];
var allowedLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var notAllowed = "Not Allowed. Check Your Topknot, Bro. Use letters only.";
var goodGuessPressed = "You were right that time.  This game was way cooler before you found out about it.";
var badGuessPressed = " Oh hey someone dented your Prius. Plus you guessed wrong."
var youWon = "you win, hipster. have a luke warm PBR. Hashtag NO ONE CARES";
var youLost = "better luck next time. Oh hey, nice skinny jeans. Said no one ever."
function startGame(){
hipsterWordNumber = Math.floor(Math.random() * hipsterArray.length);
hipsterWord = hipsterArray[hipsterWordNumber];
lettersGuessed = [];
wrongGuesses = 0;
correctGuesses = 0;
guessesMade = 0;
wrongGuessesLeft = 10;
//the array for the dashes
hangmanDashWord = [];
//a string created from the array above with no commas
hangmanDashWordDisplay = "";
displayDashWord();
displayStatus();
};

// display the hangman dashes clue word
function displayDashWord() {
	//debug: display variables
console.log("Word: " + hipsterWord + " Length: " + hipsterWord.length + " Position in array: " + hipsterWordNumber) ;	
for ( var i=0; i < hipsterWord.length ; i++){
	
	hangmanDashWord.push(hangmanDashWordChar);
	hangmanDashWordDisplay += hangmanDashWordChar + " ";
}

//console.log("DEBUG FOOFOO " + "hangmanDashWord:  " + hangmanDashWord + "hangmanDashWordDisplay: " + hangmanDashWordDisplay);
document.querySelector("#hangmanDashWordDisplay").innerHTML = hangmanDashWordDisplay;
}

// create the game score
function displayStatus () {
document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;
document.querySelector("#correctGuesses").innerHTML = correctGuesses;
document.querySelector("#wrongGuesses").innerHTML = wrongGuesses;
document.querySelector("#wrongGuessesLeft").innerHTML = wrongGuessesLeft;
document.querySelector("#guessesMade").innerHTML = guessesMade;
}

// pregame page setup

displayDashWord();
displayStatus();

// on key up event
document.onkeyup = function(event) {
	var playerPick = (event.key);
	playerPick = playerPick.toLowerCase();

//check to see if the playerPick is a letter
if ( allowedLetters.indexOf(playerPick) === -1 ) {
	document.querySelector("#instructions").innerHTML = notAllowed;
	//console.log(allowedLetters.indexOf(playerPick));
}
else {
//console.log(" Players Pick: " + playerPick + " Position in allowedLetters array: " + allowedLetters.indexOf(playerPick));

// update the dash word displayed to reflect the correct guess
function updateDashWord (playerPick) {
	
		
		//in case letter is found multiple times
		for (var i=0;i<hipsterWord.length;i++){
			//console.log("Testing playerPick " + playerPick)
			var letterExists = hipsterWord.includes(playerPick);
			//console.log("letterExists: " + letterExists + " playerPick: " + playerPick + " hipsterWord " + hipsterWord + " " + hipsterWord.charAt(i));
			if ( letterExists === true && hipsterWord.charAt(i) === playerPick ) {
				//console.log("letter " +playerPick +" Exists at foo1234 at position " + i +  " letterExists: " + letterExists);
				hangmanDashWord[i] = playerPick;
				//console.log ("debug turkey: " + hangmanDashWord[i]+ " " + playerPick);
				//hangmanDashWordDisplay += hangmanDashWord[i] + " ";
			}
			//else {
				//console.log ("debug chicken");
				//hangmanDashWordDisplay = hangmanDashWordDisplay + " " + hangmanDashWordChar;
			//}
		}
		
		//rebuild dashworddisplay
		hangmanDashWordDisplay = "";
		for (var k=0 ; k<hangmanDashWord.length;k++){
				hangmanDashWordDisplay += hangmanDashWord[k] + " ";
		}
		document.querySelector("#hangmanDashWordDisplay").innerHTML = hangmanDashWordDisplay;
	
}

function correctlyGuessed(playerPick) {
	//console.log("correctlyGuessed");
	
	// change the instructions info
	document.querySelector("#instructions").innerHTML = goodGuessPressed;
	// 	increment and display guessesMade
	guessesMade++;
	document.querySelector("#guessesMade").innerHTML = guessesMade;
// 	update and redisplay hangmanDashWord, 
	updateDashWord(playerPick);
// 	increment and display  lettersGuessed,
	lettersGuessed.push(playerPick);
	document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;
// 	increment and display correctGuesses,
	correctGuesses++;
	document.querySelector("#correctGuesses").innerHTML = correctGuesses;
	//check to see if the game is finished
	gameWinCheck();

// 	play correct sound 
	var sound = new Audio("../Hangman/assets/sound/ding.wav");
	sound.play();
}



function incorrectlyGuessed(playerPick) {
	//console.log("incorrectlyGuessed");
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
	var sound = new Audio("../Hangman/assets/sound/buzzer.wav");
	sound.play();
};
// };
// 	display loser message
function gameOverLose(){
  losses++; gamesPlayed++;
  document.querySelector("#losses").innerHTML = losses;
  document.querySelector("#gamesPlayed").innerHTML = gamesPlayed;
  alert("YOU LOSE SUCKA");
  //play loser sound?
  //start over
  startGame();
};

// 	display winner message
function gameOverWin(){
	wins++; gamesPlayed++;
	document.querySelector("#wins").innerHTML = wins;
  	document.querySelector("#gamesPlayed").innerHTML = gamesPlayed;
  	document.querySelector("#instructions").innerHTML = youWon;
  	alert("You won. Click to start again");
  	startGame();
  	//play winner sound?
};

function gameWinCheck(){
	var count = 0;
	for (var i=0;i < hangmanDashWord.length ; i++) {
		if (hangmanDashWord[i] === hangmanDashWordChar){
			count++;
			//console.log("debug cheese: " + count)
		}
	}
	if ( count === 0 ) {
		//console.log("count is zero");
		gameOverWin();
	}
}

//actually run the game code?

// check to see if playerPick has been used already

if ( lettersGuessed.indexOf(playerPick) != -1 ){
	//console.log("already picked!!");
	document.querySelector("#instructions").innerHTML = "You already pressed " + playerPick + " please try again.";
	return;
	}

// 		 search the array for the letter pressed
else if ( hipsterWord.indexOf(playerPick) != -1 ) {
		//console.log("found pick ");
		correctlyGuessed(playerPick);
	}

else {
	incorrectlyGuessed(playerPick);
}
}
}