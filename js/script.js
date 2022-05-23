const header_slider = new Swiper(".header-siwper", {
    loop: true,
});

const navbar = document.querySelector(".navbar");

window.onscroll = function() {
    if (window.scrollY > 300) {
        navbar.classList.remove("mt-5");
        navbar.style.backgroundColor = "#143d6a";
    } else {
        navbar.classList.add("mt-5");
        navbar.style.backgroundColor = "transparent";
    }
};

const our_team_swiper = new Swiper(".our-team-swiper", {
    slidesPerView: 2,
    spaceBetween: 15,
    breakpoints: {
        1200: {
            slidesPerView: 6,
        },
    },
});

const our_services_swiper = new Swiper(".our-services-swiper", {
    navigation: {
        nextEl: ".our-services-next",
        prevEl: ".our-services-prev",
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
});

const our_partners_swiper = new Swiper(".partners-swiper", {
    loop: true,
    spaceBetween: 15,
    navigation: {
        nextEl: ".our-partners-next",
        prevEl: ".our-partners-prev",
    },
    slidesPerView: 4,
    loopedSlides: 2,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
});

const blog_swiper = new Swiper(".blog-swiper", {
    spaceBetween: 25,
    breakpoints: {
        992: {
            slidesPerView: 2,
            spaceBetween: 45,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
});