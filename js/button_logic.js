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

	document.getElementById("map-frame").hidden = true;
	document.getElementById("trainer-frame").hidden = true;

	document.getElementById("start-menu").hidden = true;
}

function openMap() {
	document.getElementById("map-frame").hidden = false;

	document.getElementById("welcome-frame").hidden = true;
	document.getElementById("trainer-frame").hidden = true;

	document.getElementById("start-menu").hidden = true;
}

function openTrainer() {
	document.getElementById("trainer-frame").hidden = false;

	document.getElementById("welcome-frame").hidden = true;
	document.getElementById("map-frame").hidden = true;

	document.getElementById("start-menu").hidden = true;
}

function closeWelcome() {
	document.getElementById("welcome-frame").hidden = true;
}

function closeMap() {
	document.getElementById("map-frame").hidden = true;
}

function closeTrainer() {
	document.getElementById("trainer-frame").hidden = true;
}
