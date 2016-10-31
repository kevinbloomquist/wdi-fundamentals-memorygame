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

var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

//find the board...
var board = document.getElementById('game-board');

//make DOM board...
function createBoard() {
//card loop
for (var i=0; i<cards.length; i++) {
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', isTwoCards);
	
	board.appendChild(cardElement);
	board.appendChild(cardElement);
}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>";
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; 
}
if (cardsInPlay.length === 2) {
	    isMatch(cardsInPlay);
	    cardsInPlay = [];
  }
}

function isMatch(cards) {
  // alert winning message
  if (cards[0] === cards[1]) {
    alert("match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();

