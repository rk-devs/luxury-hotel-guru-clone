const storeSlideUrlToStorage = () => {
	localStorage.setItem(
		"activeSlideUrl",
		mainSwiperHotel1.imagesToLoad[mainSwiperHotel1.activeIndex].src
	);
};

const thumbSwiperHotel1 = new Swiper(".thumb_swiper_hotel_1", {
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
});

const mainSwiperHotel1 = new Swiper(".main_swiper_hotel_1", {
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
		swiper: thumbSwiperHotel1,
	},
});

// ! storing current slid's url to local storage
mainSwiperHotel1.on("transitionEnd", storeSlideUrlToStorage);
