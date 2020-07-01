let toggleRewiew1 = document.querySelector(".rewiews__toggle--1");
let toggleRewiew2 = document.querySelector(".rewiews__toggle--2");
let toggleRewiew3 = document.querySelector(".rewiews__toggle--3");
let rewiew1 = document.querySelector(".rewiews__item--1");
let rewiew2 = document.querySelector(".rewiews__item--2");
let rewiew3 = document.querySelector(".rewiews__item--3");
// let toggleBack = document.querySelector(".rewiews__button--back");
// let toggleNext = document.querySelector(".rewiews__button--next");



toggleRewiew1.addEventListener("click", function() {
	if (rewiew2.classList.contains("rewiews__item--current")) {
		rewiew2.classList.remove("rewiews__item--current");
		rewiew1.classList.add("rewiews__item--current");
		toggleRewiew2.classList.remove("toggle__button--current");
		toggleRewiew1.classList.add("toggle__button--current");

	} else {
		rewiew3.classList.remove("rewiews__item--current");
		rewiew1.classList.add("rewiews__item--current");
		toggleRewiew3.classList.remove("toggle__button--current");
		toggleRewiew1.classList.add("toggle__button--current");
	}
});

toggleRewiew2.addEventListener("click", function() {
	if (rewiew1.classList.contains("rewiews__item--current")) {
		rewiew1.classList.remove("rewiews__item--current");
		rewiew2.classList.add("rewiews__item--current");
		toggleRewiew1.classList.remove("toggle__button--current");
		toggleRewiew2.classList.add("toggle__button--current");

	} else {
		rewiew3.classList.remove("rewiews__item--current");
		rewiew2.classList.add("rewiews__item--current");
		toggleRewiew3.classList.remove("toggle__button--current");
		toggleRewiew2.classList.add("toggle__button--current");
	}
});

toggleRewiew3.addEventListener("click", function() {
	if (rewiew1.classList.contains("rewiews__item--current")) {
		rewiew1.classList.remove("rewiews__item--current");
		rewiew3.classList.add("rewiews__item--current");
		toggleRewiew1.classList.remove("toggle__button--current");
		toggleRewiew3.classList.add("toggle__button--current");

	} else {
		rewiew2.classList.remove("rewiews__item--current");
		rewiew3.classList.add("rewiews__item--current");
		toggleRewiew2.classList.remove("toggle__button--current");
		toggleRewiew3.classList.add("toggle__button--current");
	}
});

// toggleNext.addEventListener("click", function() {
// 	if (rewiew1.classList.contains("rewiews__item--current")) {
// 		rewiew1.classList.remove("rewiews__item--current");
// 		rewiew2.classList.add("rewiews__item--current");
// 		toggleRewiew1.classList.remove("toggle__button--current");
// 		toggleRewiew2.classList.add("toggle__button--current");

// 	} else {
// 		if (rewiew2.classList.contains("rewiews__item--current")) {
// 		rewiew2.classList.remove("rewiews__item--current");
// 		rewiew3.classList.add("rewiews__item--current");
// 		toggleRewiew2.classList.remove("toggle__button--current");
// 		toggleRewiew3.classList.add("toggle__button--current");

// 		}
// 		else {
// 		rewiew3.classList.remove("rewiews__item--current");
// 		rewiew1.classList.add("rewiews__item--current");
// 		toggleRewiew3.classList.remove("toggle__button--current");
// 		toggleRewiew1.classList.add("toggle__button--current");
// 		}
// 	}
// });

// toggleBack.addEventListener("click", function() {
// 	if (rewiew1.classList.contains("rewiews__item--current")) {
// 		rewiew1.classList.remove("rewiews__item--current");
// 		rewiew3.classList.add("rewiews__item--current");
// 		toggleRewiew1.classList.remove("toggle__button--current");
// 		toggleRewiew3.classList.add("toggle__button--current");

// 	} else {
// 		if (rewiew2.classList.contains("rewiews__item--current")) {
// 		rewiew2.classList.remove("rewiews__item--current");
// 		rewiew1.classList.add("rewiews__item--current");
// 		toggleRewiew2.classList.remove("toggle__button--current");
// 		toggleRewiew1.classList.add("toggle__button--current");

// 		}
// 		else {
// 		rewiew3.classList.remove("rewiews__item--current");
// 		rewiew2.classList.add("rewiews__item--current");
// 		toggleRewiew3.classList.remove("toggle__button--current");
// 		toggleRewiew2.classList.add("toggle__button--current");
// 		}
// 	}
// });
