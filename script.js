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
const winnerPlayer = document.querySelector('#winnerPlayer');
const canvas = document.querySelector('#canva');

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

// Set Default User
const setDefaultUser = () => {
	layer1HTML.classList.add('hidden');
	layer2HTML.classList.remove('hidden');
};

// CONFETTI FUNCTION
const confetttti = () => {
	const duration = 15 * 1000,
		animationEnd = Date.now() + duration,
		defaults = {startVelocity: 30, spread: 360, ticks: 60, zIndex: 0};

	function randomInRange(min, max) {
		return Math.random() * (max - min) + min;
	}

	const interval = setInterval(function () {
		const timeLeft = animationEnd - Date.now();

		if (timeLeft <= 0) {
			return clearInterval(interval);
		}

		const particleCount = 50 * (timeLeft / duration);

		// since particles fall down, start a bit higher than random
		confetti(
			Object.assign({}, defaults, {
				particleCount,
				origin: {x: randomInRange(0.1, 0.3), y: Math.random() - 0.2},
			})
		);
		confetti(
			Object.assign({}, defaults, {
				particleCount,
				origin: {x: randomInRange(0.7, 0.9), y: Math.random() - 0.2},
			})
		);
	}, 250);
};

// Spot the winner
const winnerDetecter = () => {
	if (playerOneScore >= 100) {
		winnerPlayer.innerHTML = 1;
		canvas.classList.remove('hidden');
		confetttti();
	} else if (playerTwoScore >= 100) {
		winnerPlayer.innerHTML = 2;
		canvas.classList.remove('hidden');
		confetttti();
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
		winnerDetecter();
		switchUser();
	} else if (layer2HTML.classList.contains('hidden')) {
		playerTwoScore = playerTwoScore + playerTwoCurrentScore;
		playerTwoCurrentScore = 0;
		playerTwoScoreHTML.innerHTML = playerTwoScore;
		playerTwoCurrentScoreHTML.innerHTML = playerTwoCurrentScore;
		winnerDetecter();
		switchUser();
	}
});

// NEW GAME BUTTON PRESS
newGameBtn.addEventListener('click', () => {
	canvas.classList.add('hidden');
	setDefaultUser();
	playerOneScore = 0;
	playerTwoScore = 0;
	playerOneCurrentScore = 0;
	playerTwoCurrentScore = 0;
	playerOneScoreHTML.innerHTML = playerOneScore;
	playerTwoScoreHTML.innerHTML = playerTwoScore;
	playerOneCurrentScoreHTML.innerHTML = playerOneCurrentScore;
	playerTwoCurrentScoreHTML.innerHTML = playerTwoCurrentScore;
});
