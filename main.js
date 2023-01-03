// Search button js

let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
})
// Search button

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




