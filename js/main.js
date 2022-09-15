

        // Right Clik Desactivado

// document.oncontextmenu = function(){return false}

        // Change Nav Style on Scroll

window.addEventListener("scroll", () => {
    document
        .querySelector("nav")
        .classList.toggle("window-scrolled", window.scrollY > 0);
});

        // Responsive NAVBAR

const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener('click', openNav)

const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav);

if(document.body.clientWidth < 1024) {
    nav.querySelectorAll('li a').forEach(navLink => {
    navLink.addEventListener('click', closeNav);
})
}

        //WhatsApp

function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '34603431876';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value
        let email = document.querySelector('#email').value
        let msn = document.querySelector('#msn').value
        let mensaje = 'send?phone=' + telefono + '&text=*_Contact Form Ola_*%0A*Your Name*%0A' + nombre + '%0A*Your E-Mail*%0A' + email + '%0A*Tu mensaje*%0A' + msn + ''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
});

        // ART

$(document).ready(function(){
    $('.art__thumb a').click(function(e){
        e.preventDefault();
        $('.art__grid-big-img img').attr("src", $(this).attr("href"))
    })
})

$(document).ready(function(){
    $('.animals__thumb a').click(function(e){
        e.preventDefault();
        $('.animals__grid-big-img img').attr("src", $(this).attr("href"))
    })
})

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

        //Swiper JS
var swiper = new Swiper(".mySwiper", {
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    autoplay: {
        disableOnInteraction: false,
        delay: 1500,
    },

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




// Swiper JS Family

var swiper1 = new Swiper(".mySwiper1", {
    autoplay: {
        disableOnInteraction: false,
        delay: 3500,
    },

    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    // observer: true,
    // observeParents: true,
    // parallax:true,

    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Enable debugger
    debugger: true,

});

// Swiper JS Testimonial

var swiper2 = new Swiper(".mySwiper2", {
    effect: 'coverflow',
    grabCursor: true, 
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        strech: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    
    autoplay: {
        disableOnInteraction: false,
        delay: 4000,
    },

    slidesPerView: 'auto',
    loop: true,

    // Enable debugger
    debugger: true,

});

// swiper1.autoplay.start();

// swiper.autoplay.start();




