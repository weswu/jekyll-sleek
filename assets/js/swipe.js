var swiperPages = new Swiper('.pages-swiper-container', {
    speed: 1000,
    parallax: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.paegs-swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.pages-button-next',
        prevEl: '.pages-button-prev',
    },
});
swiperPages.el.onmouseover = function () {
    swiperPages.navigation.$nextEl.removeClass('hide');
    swiperPages.navigation.$prevEl.removeClass('hide');
    swiperPages.autoplay.stop();
}
swiperPages.el.onmouseout = function () {
    swiperPages.navigation.$nextEl.addClass('hide');
    swiperPages.navigation.$prevEl.addClass('hide');
    swiperPages.autoplay.start();
}
