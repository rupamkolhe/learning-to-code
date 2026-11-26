
const timer = document.querySelector('.timer');
const title = document.querySelector('.title');
const startBtn = document.querySelector('.startBtn');
const pauseBtn = document.querySelector('.pauseBtn');
const resumeBtn = document.querySelector('.resumeBtn');
const resetBtn = document.querySelector('.resetBtn');
const pomoCountDisplay = document.querySelector('.pomoCountDisplay');

// making constant variables
const WORK_TIME = 1*10;
const BREAK_TIME = 1*5;
let timerId = null;
// one round = work time + break time 
let oneRoundCompleted = false; 
let totalCount = 1;
let paused = false;


// function to update title 
const updateTitle = (msg) => {
	title.textContent = msg;
}

const saveLocalCount = () => {
	let counts = JSON.parse(localStorage.getItem('pomoCount'));
	counts !== null ? counts++ : counts = 1;
	localStorage.setItem('pomoCount',JSON.stringify(counts));
}

// function to countdown 
const countDown = (time) => {
	return () => {
		const minutes = Math.floor(time/60).toString().padStart(2,'0');
		const seconds = Math.floor(time%60).toString().padStart(2,'0');
		timer.textContent = `${minutes}:${seconds}`;
		time--;
		if (time < 0) {
			stopTimer();
			if (oneRoundCompleted === false) {
				timerId = startTimer(BREAK_TIME);
				oneRoundCompleted = true;
				updateTitle("It's Break Time!")
			} else {
				updateTitle("Completed Pomodoro Round!");
				setTimeout(() => updateTitle("Start Timer Again"),2000)
				totalCount++;
				saveLocalCount();
				showPomoCount();
				oneRoundCompleted = false;
			}
		}
	}
}

// function to start timer
const startTimer = (startTime) => {
	if (timerId !== null) {
		stopTimer()
	}
	return setInterval(countDown(startTime),1000);
}

// arrow function to stop timer
const stopTimer = () => {
	clearInterval(timerId);
	timerId = null;
}

const getTimeInSeconds = (timeString) => {
	const[minutes, seconds] = timeString.split(':');
	return parseInt(minutes)*60 + parseInt(seconds)
}

startBtn.addEventListener('click',() => {
	timerId = startTimer(WORK_TIME);
	updateTitle("It's Work Time!")
})

resetBtn.addEventListener('click',() => {
	stopTimer();
	timer.textContent = "25:00"
})

pauseBtn.addEventListener('click',() => {
	stopTimer();
	paused = true;
	updateTitle('Timer Paused')
})

resumeBtn.addEventListener('click',() => {
	if (paused) {
		const currentTime = getTimeInSeconds(timer.textContent);
		timerId = startTimer(currentTime);
		paused = false;
		(!oneRoundCompleted) ? updateTitle("It's Work Time!") : updateTitle("It's a Break Time!")
	}
})

const showPomoCount = () => {
	const counts = JSON.parse(localStorage.getItem('pomoCount'));
	if (counts > 0) {
		pomoCountDisplay.style.display = 'flex';
	}
	pomoCountDisplay.firstElementChild.textContent = counts;
}

showPomoCount();


