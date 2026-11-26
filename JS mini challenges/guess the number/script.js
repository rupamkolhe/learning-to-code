

const userInput = document.querySelector('.user-input')
const form = document.querySelector('form')
const result = document.querySelector('.result')
let randomNumber = Math.round(Math.random()*100)
const allGuesses = document.querySelector('.all-guesses')
const submitBtn = document.querySelector('.submit-btn')
const startGameBtn = document.querySelector('.start-game')



function a() {

let allGuessesArray = []

form.addEventListener('submit',(e) => {

	e.preventDefault()
	const userInputValue = parseInt(userInput.value)
	if ( userInputValue < randomNumber) {
		result.innerText = 'Too low'
	} else if (userInputValue > randomNumber) {
		result.innerText = 'Too high'
	} else {
		result.innerText = 'you got it congrats'
		startGameBtn.disabled = false;
		submitBtn.disabled = true;
	}
	allGuessesArray.push(userInputValue)
	allGuesses.innerText = 'Your Guesses : '+allGuessesArray.join(', ')
	form.reset();
})

startGameBtn.addEventListener('click',() => {
	allGuessesArray = [];
	allGuesses.innerText = '';
	result.innerText = '';
	submitBtn.disabled = false;
	startGameBtn.disabled = true;
	randomNumber = Math.round(Math.random()*100);
})
}


a();
