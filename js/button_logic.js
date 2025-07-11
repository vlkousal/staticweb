function toggleStartMenu() {
	let startMenu = document.getElementById("start-menu");
	if(startMenu.hidden) {
		startMenu.hidden = false;
		return;
	}
	startMenu.hidden = true;
}

function openWelcome() {
	document.getElementById("welcome-frame").hidden = false;
	document.getElementById("start-menu").hidden = true;
}

function openMap() {
	document.getElementById("map-frame").hidden = false;
	document.getElementById("start-menu").hidden = true;
}

function closeWelcome() {
	document.getElementById("welcome-frame").hidden = true;
}

function closeMap() {
	document.getElementById("map-frame").hidden = true;

}