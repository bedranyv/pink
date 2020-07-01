let togglePrice1 = document.querySelector(".price__toggle--1");
let togglePrice2 = document.querySelector(".price__toggle--2");
let togglePrice3 = document.querySelector(".price__toggle--3");
let priceTable = document.querySelector(".price__table");


togglePrice1.addEventListener("click", function() {
	priceTable.classList.add("price__table--show-1");
	priceTable.classList.remove("price__table--show-2");
	priceTable.classList.remove("price__table--show-3");

	togglePrice1.classList.add("toggle__button--current");
	togglePrice2.classList.remove("toggle__button--current");
	togglePrice3.classList.remove("toggle__button--current");
});

togglePrice2.addEventListener("click", function() {
	priceTable.classList.remove("price__table--show-1");
	priceTable.classList.add("price__table--show-2");
	priceTable.classList.remove("price__table--show-3");

	togglePrice1.classList.remove("toggle__button--current");
	togglePrice2.classList.add("toggle__button--current");
	togglePrice3.classList.remove("toggle__button--current");
});


togglePrice3.addEventListener("click", function() {
	priceTable.classList.remove("price__table--show-1");
	priceTable.classList.remove("price__table--show-2");
	priceTable.classList.add("price__table--show-3");

	togglePrice1.classList.remove("toggle__button--current");
	togglePrice2.classList.remove("toggle__button--current");
	togglePrice3.classList.add("toggle__button--current");
});