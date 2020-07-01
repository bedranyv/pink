let buttonMenu = document.querySelector(".main-nav__toggle");
let menu = document.querySelector(".main-nav");


menu.classList.remove("main-nav--nojs");
console.log("убираем класс nojs");

buttonMenu.addEventListener("click", function() {
	if (menu.classList.contains("main-nav--closed")) {
		console.log("открыть меню");
		menu.classList.remove("main-nav--closed");
		menu.classList.add("main-nav--opened");
	}

	else {
		console.log("закрыть меню");
		menu.classList.remove("main-nav--opened");
		menu.classList.add("main-nav--closed");
	}
})