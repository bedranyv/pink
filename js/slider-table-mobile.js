let toggleTable1 = document.querySelector(".table__toggle--1");
let toggleTable2 = document.querySelector(".table__toggle--2");
let toggleTable3 = document.querySelector(".table__toggle--3");
let priceTable = document.querySelector(".price__table");


toggleTable1.addEventListener("click", function() {
	priceTable.classList.add("price__table--show-1");
	priceTable.classList.remove("price__table--show-2");
	priceTable.classList.remove("price__table--show-3");

	toggleTable1.classList.add("toggle__button--current");
	toggleTable2.classList.remove("toggle__button--current");
	toggleTable3.classList.remove("toggle__button--current");
});

toggleTable2.addEventListener("click", function() {
	priceTable.classList.remove("price__table--show-1");
	priceTable.classList.add("price__table--show-2");
	priceTable.classList.remove("price__table--show-3");

	toggleTable1.classList.remove("toggle__button--current");
	toggleTable2.classList.add("toggle__button--current");
	toggleTable3.classList.remove("toggle__button--current");
});


toggleTable3.addEventListener("click", function() {
	priceTable.classList.remove("price__table--show-1");
	priceTable.classList.remove("price__table--show-2");
	priceTable.classList.add("price__table--show-3");

	toggleTable1.classList.remove("toggle__button--current");
	toggleTable2.classList.remove("toggle__button--current");
	toggleTable3.classList.add("toggle__button--current");
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
