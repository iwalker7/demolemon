const modeSwitch = document.querySelector("#darkmode");

modeSwitch.addEventListener("click", function () {
	document.documentElement.classList.toggle("dark");
});
