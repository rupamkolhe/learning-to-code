
const showToastBtn = document.querySelector('.show-toast')
const horizontalPosition = document.querySelector('#horizontal-position')
const verticalPosition = document.querySelector('#vertical-position')
const toastContainer = document.querySelector('.toast-container')
const toastType = document.querySelector('#toast-type')
const toastMessage = document.querySelector('#toast-message')

const duration = document.querySelector('#duration')

showToastBtn.addEventListener('click',() => {
	const newToast = document.createElement('div')
	newToast.classList.add('toast')
	newToast.classList.add(toastType.value)
	newToast.innerText = ' '+`${toastMessage.value}`+' '

	const closeIcon = document.createElement('span')
	closeIcon.innerText = '✕'

	newToast.append(closeIcon)
	closeIcon.addEventListener('click',() => {
		removeToast()
	})

	function removeToast () {
		if (toastContainer.classList.contains('right')) {
			newToast.classList.add('go-right')
		} else {
			newToast.classList.add('go-left')
		}
		setTimeout (() => {
			newToast.remove();
		}, 100)
	}

	setTimeout (() => {
		removeToast()
		},parseInt(duration.value)*1000)

	toastContainer.append(newToast)

	if (horizontalPosition.value === 'right') {
		toastContainer.classList.add('right')
	} else {
		toastContainer.classList.remove('right')
	} 
	if (verticalPosition.value === 'bottom') {
		toastContainer.classList.add('bottom')
	} else  {
		toastContainer.classList.remove('bottom')
	}
})




