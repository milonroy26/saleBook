// Search button js
let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
})
// Search button

// login from
let loginForm = document.querySelector('.login-form-container');
let loginBtn = document.getElementById('login-btn');
let closeBtn = document.getElementById('closeBtn');

loginBtn.addEventListener('click', () => {
    loginForm.classList.toggle('active');
})

closeBtn.addEventListener('click', () => {
    loginForm.classList.remove('active');
})

// login from end

// Header Scroll
window.onscroll = () => {
    
    searchForm.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .headerTwo').classList.add('acitve');
    }

    else {
        document.querySelector('.header .headerTwo').classList.remove('acitve');
    }
}

window.onload = () => {

    if(window.scrollY > 80){
        document.querySelector('.header .headerTwo').classList.add('acitve');
    }

    else {
        document.querySelector('.header .headerTwo').classList.remove('acitve');
    }
}

// Header Scroll End

// Swiper js
var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });




