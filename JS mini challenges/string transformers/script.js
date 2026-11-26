
const input = document.querySelector('input')

const upperCaseOutput = document.querySelector('#uppercase span')
const lowerCaseOutput = document.querySelector('#lowercase span')
const camelCaseOutput = document.querySelector('#camelcase span')
const pascalCaseOutput = document.querySelector('#pascalcase span')
const snakeCaseOutput = document.querySelector('#snakecase span')
const kebabCaseOutput = document.querySelector('#kebabcase span')
const trimOutput = document.querySelector('#trim span')

function capitalizeString(string) {
	if (! string) return string 
	const firstCharacter = string[0].toUpperCase()
	return firstCharacter + string.slice(1,string.length)
}

function toCamelCase(string) {
	const lowerCaseString = string.toLowerCase()
	const wordArray = lowerCaseString.split(' ')
	const finalArray =  wordArray.map((word, i) => {
		if (i === 0) return word
		return capitalizeString(word)
	})
	return finalArray.join(' ')
}

function toPascalCase(string) {
	const lowerCaseString = string.toLowerCase()
	const wordArray = lowerCaseString.split(' ')
	const finalArray =  wordArray.map((word, i) => {
		return capitalizeString(word)
	})
	return finalArray.join(' ')
}

function toSnakeCase(string) {
	return string.replaceAll(' ','_')
}

function toKebabCase(string) {
	return string.replaceAll(' ','-')
}

function toTrim(string) {
	return string.replaceAll(' ','')
}

function updateScreen() {
	upperCaseOutput.innerText = input.value.trim().toLowerCase()
	lowerCaseOutput.innerText = input.value.trim().toUpperCase()
	camelCaseOutput.innerText = toCamelCase(input.value.trim())
	pascalCaseOutput.innerText = toPascalCase(input.value.trim())
	snakeCaseOutput.innerText = toSnakeCase(input.value.trim())
	kebabCaseOutput.innerText = toKebabCase(input.value.trim())
	trimOutput.innerText = toTrim(input.value.trim())
}

updateScreen()

input.addEventListener('input',() => {
	updateScreen()
})


