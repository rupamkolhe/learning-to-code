
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

updateCountdown = (deadline) => {
	const formatTime = (time) => {
		return time < 10 ? `0${time}`:time;
	}
	const currentTime = new Date();
	const timeDifference = deadline - currentTime;
	let calSecs = Math.floor(timeDifference/1000)%60;
	let calMins = Math.floor(timeDifference/1000/60)%60;
	let calHours = Math.floor(timeDifference/1000/60/60)%24;
	let calDays = Math.floor(timeDifference/1000/60/60/24);
	secs.innerHTML = formatTime(calSecs);
	mins.innerHTML = formatTime(calMins);
	hours.innerHTML = formatTime(calHours);
	days.innerHTML = formatTime(calDays);

}

const countDown = (targetDate) => {
	setInterval(updateCountdown,1000,targetDate);
}

const targetDate = new Date('December 01 2026 07:00');
countDown(targetDate);
