// * function to store url of active slide's image to local storage
const storeSlideUrlToStorage = () => {
	localStorage.setItem(
		"activeSlideUrl",
		mainSwiperHotel1.imagesToLoad[mainSwiperHotel1.activeIndex].src
	);
};

// * object with thumbnails' properties
const thumbProps = {
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

// ! storing current slid's url to local storage
mainSwiperHotel1.on("transitionEnd", storeSlideUrlToStorage);
