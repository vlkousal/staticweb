function toggleStartMenu() {
	let startMenu = document.getElementById("start-menu");
	if(startMenu.hidden) {
		startMenu.hidden = false;
		return;
	}
	startMenu.hidden = true;
}

function onWelcomeMenuClick() {
	let welcomeWindow = document.getElementById("gosling-window");
	let startMenu = document.getElementById("start-menu");
	welcomeWindow.hidden = false;
	startMenu.hidden = true;
}