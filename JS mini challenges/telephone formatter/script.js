
const input = document.querySelector('input')
let previousValue = ''
let firstNumbers = ''

input.addEventListener('input', (e) => {
	const inputValue = e.target.value  
	console.log(inputValue + '  ' +firstNumbers)
	if (/\d+$/g.test(inputValue)) {
		input.value = inputValue 
	} else {
		input.value = inputValue.substring(0,inputValue.length - 1)
	}

	if (inputValue.length === 4 && previousValue.length < inputValue.length) {
		firstNumbers = inputValue.substring(0,3)
		input.value = `+(${firstNumbers}) - ${inputValue[inputValue.length-1]}`
	} else if (inputValue.length === 7 && previousValue.length > inputValue.length) {
		console.log('hiii')
		input.value = firstNumbers
	}
	previousValue = inputValue
})

