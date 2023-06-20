const playerOneScoreHTML = document.querySelector('#playerOneScore');
const playerOneCurrentScoreHTML = document.querySelector(
	'#playerOneCurrentScore'
);
const diceBoxHTML = document.querySelector('#diceBox');
const layer1HTML = document.querySelector('#layer1');
const layer2HTML = document.querySelector('#layer2');
const playerTwoScoreHTML = document.querySelector('#playerTwoScore');
const playerTwoCurrentScoreHTML = document.querySelector(
	'#playerTwoCurrentScore'
);
const diceImg = document.querySelector('#diceImg');

// Buttons
const newGameBtn = document.querySelector('#newGame');
const rollDiceBtn = document.querySelector('#rollDice');
const holdBtn = document.querySelector('#hold');

// Live Changes/Scores
let playerOneCurrentScore = 0;
let playerTwoCurrentScore = 0;

let playerOneScore = 0;
let playerTwoScore = 0;

// Switch User Function
const switchUser = () => {
	if (layer2HTML.classList.contains('hidden')) {
		layer1HTML.classList.add('hidden');
		layer2HTML.classList.remove('hidden');
		playerTwoCurrentScore = 0;
		playerTwoCurrentScoreHTML.innerHTML = playerTwoCurrentScore;
	} else if (layer1HTML.classList.contains('hidden')) {
		layer2HTML.classList.add('hidden');
		layer1HTML.classList.remove('hidden');
		playerOneCurrentScore = 0;
		playerOneCurrentScoreHTML.innerHTML = playerOneCurrentScore;
	}
};

// ROLL-DICE BUTTON PRESS
rollDiceBtn.addEventListener('click', () => {
	const randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
	diceBoxHTML.classList.remove('hidden');
	console.log(randomDiceNumber);
	diceImg.src = `assets/dice${randomDiceNumber}.png`;

	// Condition
	if (randomDiceNumber == 1) {
		switchUser();
	} else {
		if (layer1HTML.classList.contains('hidden')) {
			playerOneCurrentScore = playerOneCurrentScore + randomDiceNumber;
			playerOneCurrentScoreHTML.innerHTML = playerOneCurrentScore;
		} else if (layer2HTML.classList.contains('hidden')) {
			playerTwoCurrentScore = playerTwoCurrentScore + randomDiceNumber;
			playerTwoCurrentScoreHTML.innerHTML = playerTwoCurrentScore;
		}
	}
});

// HOLD BUTTON PRESS
holdBtn.addEventListener('click', () => {
	if (layer1HTML.classList.contains('hidden')) {
		playerOneScore = playerOneScore + playerOneCurrentScore;
		playerOneCurrentScore = 0;
		playerOneScoreHTML.innerHTML = playerOneScore;
		playerOneCurrentScoreHTML.innerHTML = playerOneCurrentScore;
		switchUser();
	} else if (layer2HTML.classList.contains('hidden')) {
		playerTwoScore = playerTwoScore + playerTwoCurrentScore;
		playerTwoCurrentScore = 0;
		playerTwoScoreHTML.innerHTML = playerTwoScore;
		playerTwoCurrentScoreHTML.innerHTML = playerTwoCurrentScore;
		switchUser();
	}
});
