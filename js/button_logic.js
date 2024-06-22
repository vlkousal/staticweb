function toggleStartMenu() {
	let startMenu = document.getElementById("start-menu");
	if(startMenu.hidden) {
		startMenu.hidden = false;
		return;
	}
	startMenu.hidden = true;
}

function onWelcomeMenuClick() {
	document.getElementById("gosling-window").hidden = false;
	document.getElementById("start-menu").hidden = true;
}

function onMapMenuClick() {
	document.getElementById('window').hidden = false;
	document.getElementById('start-menu').hidden = true;
}

function closeGosling() {
	document.getElementById("gosling-window").hidden = true;
}