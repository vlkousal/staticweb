function updateTime() {
	const timeContainer = document.getElementById('time-container');
	const now = new Date();

	let hours = now.getHours();
	const minutes = now.getMinutes();
	const ampm = hours >= 12 ? 'PM' : 'AM';

	hours = hours % 12;
	hours = hours ? hours : 12;

	const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

	timeContainer.textContent = `${hours}:${formattedMinutes} ${ampm}`;
}

updateTime();
setInterval(updateTime, 1000);