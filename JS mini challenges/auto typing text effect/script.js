

const wordsList = ['Developer','Coder','Teacher','YouTuber']
const span = document.querySelector('span')

let word = wordsList[0]

let characterIndex = 0
let reverseType = false

let wordIndex = 1

const intervalId = setInterval(() => {
	if (! reverseType) {
		span.innerText = span.innerText + word[characterIndex]
		characterIndex ++
	} else {
		span.innerText = span.innerText.slice(0,span.innerText.length-1)
	}
	if (span.innerText.length === 0 && reverseType) {
		characterIndex = 0
		reverseType = false
		word = wordsList[wordIndex++]
	}
	if (wordIndex === wordsList.length) {
		wordIndex = 0
	}
	if (characterIndex === word.length) {
		reverseType = true
	}

},200)


