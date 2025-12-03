const clock = document.getElementById("clock");

function updateClock() {
	const date = new Date();

	let hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	let ampm="";
	if (hours >= 12) {
		ampm = "PM";
	} else {
		ampm = "AM";
	}

	hours = hours % 12;
	if (hours === 0) {
		hours = 12; 
	}

	
	const hoursStr = String(hours).padStart(2, "0");
	const minutesStr = String(minutes).padStart(2, "0");
	const secondsStr = String(seconds).padStart(2, "0");

	clock.innerHTML = `${hoursStr}:${minutesStr}:${secondsStr} ${ampm}`;
}

setInterval(updateClock, 1000);
