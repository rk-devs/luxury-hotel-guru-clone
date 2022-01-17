// * function to store url of active slide's image to local storage
const storeSlideUrlToStorage = (activeSwiper) => {
	localStorage.setItem(
		"activeSlideUrl",
		activeSwiper.imagesToLoad[activeSwiper.activeIndex].src
	);
};

// * object with thumbnails' properties
const thumbProps = {
	direction: "vertical",
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
};

// * object with main swiper's properties
const mainSwiperProps = {
	spaceBetween: 10,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
};

//* For hotel 1
const thumbSwiperHotel1 = new Swiper(".thumb_swiper_hotel_1", thumbProps);

const mainSwiperHotel1 = new Swiper(".main_swiper_hotel_1", {
	...mainSwiperProps,
	thumbs: {
		swiper: thumbSwiperHotel1,
	},
});
//* For hotel 1

//* For hotel 2
const thumbSwiperHotel2 = new Swiper(".thumb_swiper_hotel_2", thumbProps);

const mainSwiperHotel2 = new Swiper(".main_swiper_hotel_2", {
	...mainSwiperProps,
	thumbs: {
		swiper: thumbSwiperHotel2,
	},
});
//* For hotel 2

// ! storing current slid's url to local storage
mainSwiperHotel1.on("transitionEnd", storeSlideUrlToStorage);
mainSwiperHotel2.on("transitionEnd", storeSlideUrlToStorage);
