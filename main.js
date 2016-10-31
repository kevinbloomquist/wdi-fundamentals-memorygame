// initial game logic//

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*From ch:9

if (cardOne === cardTwo) {
	alert('You found a match!');	
} else if (cardThree===cardFour) {
	alert('You found a match!');
} else {
  alert('Sorry, try again.');
}

console.log("JS file is connected to HTML! Woo!");*/
//find the board...
var board = document.getElementById('game-board');

//make DOM board...
function createBoard() {
//card loop
for (var i=0; i<cards.length; i++) {
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	board.appendChild(cardElement);
}
};

