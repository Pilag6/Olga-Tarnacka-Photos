// Right Clik Desactivado

// document.oncontextmenu = function(){return false}

// Change Nav Style on Scroll

window.addEventListener("scroll", () => {
    document
        .querySelector("nav")
        .classList.toggle("window-scrolled", window.scrollY > 0);
});

// Contact buttons (circular text buttons)

const textButtons = document.querySelectorAll(".contact__btn");

textButtons.forEach((textButtons) => {
    let text = textButtons.querySelector("p");
    text.innerHTML = text.innerHTML
        .split("")
        .map(
            (character, index) =>
                `<span style="transform: rotate(${
                    index * 12
                }deg)">${character}</span>`
        )
        .join("");
});

//Swipper JS
var swiper = new Swiper(".mySwiper", {
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

//     mousewheel: {
//     invert: true,
//   },

    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

        1535: {
            slidesPerView: 4,
            spaceBetween: 20,
        },

        1919: {
            slidesPerView: 4,
            spaceBetween: 20,
        },

        2159: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});

swiper.autoplay.start();
