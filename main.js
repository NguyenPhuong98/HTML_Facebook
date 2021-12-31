const slidesToShowStory = 5;
const slidesToShowChatRoom = 10;

const listChatRoom = $('.list-account-chatroom');
$(window).on('load', function () {
	$('.story-list').slick({
		infinite: false,
		slidesToShow: slidesToShowStory,
		slidesToScroll: 1,
		dots: false,
		prevArrow: `<button type='button' class='slick-prev pull-left'><i class="fas fa-chevron-left"></i></button>`,
		nextArrow: `<button type='button' class='slick-next pull-right'><i class="fas fa-chevron-right"></i></button>`,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: false,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
	});

	$('.list-account-chatroom').slick({
		infinite: false,
		slidesToShow: slidesToShowChatRoom,
		slidesToScroll: 1,
		dots: false,
		swipeToSlide: true,
		swipe: true,
		variableWidth: true,
		prevArrow: `<button type='button' class='slick-prev pull-left'><i class="fas fa-chevron-left"></i></button>`,
		nextArrow: `<button type='button' class='slick-next pull-right'><i class="fas fa-chevron-right"></i></button>`,
	});

	$('.slick-prev').hide();
	// Handle button of slider Story
	$('.story-list').on('afterChange', function (event, slick, currentSlide) {
		console.log(currentSlide);
		if (currentSlide === 0) {
			$('.story-list .slick-prev').hide();
			$('.story-list .slick-next').show();
		} else {
			$('.story-list .slick-prev').show();

			if (slick.slideCount !== currentSlide + slidesToShowStory) {
				$('.list-account-chatroom .slick-next').show();
			}
			//If we're on the last slide hide the Next button.
			if (slick.slideCount === currentSlide + slidesToShowStory) {
				$('.story-list .slick-next').hide();
			}
		}
	});
	$('.list-account-chatroom').on('afterChange', function (event, slick, currentSlide) {
		console.log(currentSlide);
		if (currentSlide === 0) {
			$('.list-account-chatroom .slick-prev').hide();
			$('.list-account-chatroom .slick-next').show();
		} else {
			$('.list-account-chatroom .slick-prev').show();
			if (slick.slideCount !== currentSlide + slidesToShowChatRoom) {
				$('.list-account-chatroom .slick-next').show();
			}
			if (slick.slideCount === currentSlide + slidesToShowChatRoom) {
				//If we're on the last slide hide the Next button.
				$('.list-account-chatroom .slick-next').hide();
			}
		}
	});
});

const main = document.querySelector('.main');
const headerPages = document.querySelectorAll('.header-page-item');
const underlineHeaderPages = document.querySelector('.header-pages .underline');

const headerPageActive = document.querySelector('.header-page-item.active');

const btnHeaderAccount = document.querySelector('.header-account');
const btnHeaderNotify = document.querySelector('.header-notify');
const btnheaderMessage = document.querySelector('.header-messenger');

const headerAccountDetail = document.querySelector('.header-account-detail');
const headerNotifyDetail = document.querySelector('.header-notify-detail');

const headerMessageDetail = document.querySelector('.header-messenger-detail');

const btnPostOption = document.querySelector('.js-post-header__option');
const postOptionDetail = document.querySelector('.js-post__option-detail');

const sideBarSeeMore = document.querySelector('.js-sidebar-seemore');
const btnSeeMore = document.querySelector('.js-icon-seemore');
const btnSeeLess = document.querySelector('.js-icon-seeless');
const HideAccountDetail = () => {
	headerAccountDetail.style.display = 'none';
};
const HideNotifyDetail = () => {
	headerNotifyDetail.style.display = 'none';
};

const HideMessageDetail = () => {
	headerMessageDetail.style.display = 'none';
};

const HidePostOptionDetail = () => {
	postOptionDetail.style.display = 'none';
};
const ShowHideAccountDetail = (e) => {
	e.stopPropagation();
	if (headerAccountDetail.style.display === 'block') {
		headerAccountDetail.style.display = 'none';
	} else {
		HideNotifyDetail();
		HideMessageDetail();
		HidePostOptionDetail();
		headerAccountDetail.style.display = 'block';
	}
};
const ShowHideNotifyDetail = (e) => {
	e.stopPropagation();
	if (headerNotifyDetail.style.display === 'block') {
		headerNotifyDetail.style.display = 'none';
	} else {
		HideMessageDetail();
		HidePostOptionDetail();
		HideAccountDetail();
		headerNotifyDetail.style.display = 'block';
	}
};
const ShowHideMessageDetail = (e) => {
	e.stopPropagation();
	if (headerMessageDetail.style.display === 'block') {
		headerMessageDetail.style.display = 'none';
	} else {
		HideNotifyDetail();
		HideAccountDetail();
		HidePostOptionDetail();
		headerMessageDetail.style.display = 'block';
	}
};
const ShowHidePostOptionDetail = (e) => {
	e.stopPropagation();
	if (postOptionDetail.style.display === 'block') {
		postOptionDetail.style.display = 'none';
	} else {
		HideNotifyDetail();
		HideMessageDetail();
		HideAccountDetail();
		postOptionDetail.style.display = 'block';
	}
};

// Underline
if (headerPageActive !== null) {
	underlineHeaderPages.style.left = headerPageActive.offsetLeft + 'px';
	underlineHeaderPages.style.width = headerPageActive.offsetWidth + 'px';
}
headerPages.forEach((headerPage, index) => {
	headerPage.onclick = function () {
		document.querySelector('.header-page-item.active').classList.remove('active');
		this.classList.add('active');
		underlineHeaderPages.style.left = this.offsetLeft + 'px';
		underlineHeaderPages.style.width = this.offsetWidth + 'px';
	};
});

// Show/Hide Account Detail
btnHeaderAccount.addEventListener('click', ShowHideAccountDetail);
headerAccountDetail.addEventListener('click', (e) => {
	e.stopPropagation();
});
main.addEventListener('click', HideAccountDetail);

// Show/Hide Notify Detail
btnHeaderNotify.addEventListener('click', ShowHideNotifyDetail);
headerNotifyDetail.addEventListener('click', (e) => {
	e.stopPropagation();
});
main.addEventListener('click', HideNotifyDetail);

// Show/Hide Message Detail
btnheaderMessage.addEventListener('click', ShowHideMessageDetail);
headerMessageDetail.addEventListener('click', (e) => {
	e.stopPropagation();
});
main.addEventListener('click', HideMessageDetail);

// Show/Hide Post Option
if (btnPostOption) {
	btnPostOption.addEventListener('click', ShowHidePostOptionDetail);
	postOptionDetail.addEventListener('click', (e) => {
		e.stopPropagation();
	});
	main.addEventListener('click', HidePostOptionDetail);
}

// Handle Sidebar
const showSideBar = () => {
	console.log(1);
	btnSeeMore.style.display = 'none';
	sideBarSeeMore.style.display = 'block';
};
const HideSideBar = () => {
	btnSeeMore.style.display = 'flex';
	sideBarSeeMore.style.display = 'none';
};
btnSeeMore.addEventListener('click', showSideBar);
btnSeeLess.addEventListener('click', HideSideBar);
