const swiper = new Swiper(".mySwiper", {
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
	spaceBetween: 10,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper,
	},
});

// ! storing current slid's url to local storage
swiper2.on("transitionEnd", function () {
	localStorage.setItem(
		"activeSlideUrl",
		swiper2.imagesToLoad[swiper2.activeIndex].src
	);
});
