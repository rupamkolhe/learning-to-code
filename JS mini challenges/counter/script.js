
const count = document.querySelector('.count')
var countValue = parseInt(count.innerText)
const decrementBtn = document.querySelector('.decrement-button')
const incrementBtn = document.querySelector('.increment-button')
const resetBtn = document.querySelector('.reset-button')


decrementBtn.addEventListener('click',() => {
	const changeBy = parseInt(document.querySelector('.changeBy').value)
	countValue = countValue - changeBy
	count.innerText = countValue
})

incrementBtn.addEventListener('click',() => {
	const changeBy = parseInt(document.querySelector('.changeBy').value)
	countValue = countValue + changeBy
	count.innerText = countValue
})

resetBtn.addEventListener('click',() => {
	count.innerText = '0';
})

