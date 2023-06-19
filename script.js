const playerOneScoreHTML = document.querySelector('#playerOneScore');
const playerOneCurrentScoreHTML = document.querySelector(
	'#playerOneCurrentScore'
);
const playerTwoScoreHTML = document.querySelector('#playerTwoScore');
const playerTwoCurrentScoreHTML = document.querySelector(
	'#playerTwoCurrentScore'
);

// Buttons
const newGameBtn = document.querySelector('#newGame');
const rollDiceBtn = document.querySelector('#rollDice');
const holdBtn = document.querySelector('#hold');

// Code/Program
rollDiceBtn.addEventListener('click', () => {
	const randomDiceNumber = Math.trunc(Math.random() * 7);
	console.log(randomDiceNumber);
	if (randomDiceNumber == 1) {
		console.log('User Switched!');
	} else {
		console.log('Score Added+');
	}
});
