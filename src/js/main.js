const nav = document.querySelector('.nav');
const menu = document.querySelector('#menu');
const burgerBtn = document.querySelector('.burger');
const menuItems = document.querySelectorAll('.menu__item');

burgerBtn.addEventListener('click', function(event){
    event.stopPropagation();
    nav.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
menu.addEventListener('click', (event) => {
    if (event) {
        nav.classList.remove('active');
        burgerBtn.classList.remove('active');
        menu.classList.remove('active');
    }
})
document.addEventListener('click', (event) => {
    if (menu.classList.contains('active') && !menu.contains(event.target)) {
        nav.classList.remove('active');
        burgerBtn.classList.remove('active');
        menu.classList.remove('active');
    }
})

window.addEventListener('scroll', function () {
    if (window.scrollY >= 20) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
})

const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    })
})

animatedElements.forEach(el => observer.observe(el));

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const currentTimeString = `${hours}:${minutes}`;
    document.querySelector('.current-time').textContent = currentTimeString;
}

setInterval(updateClock, 1000);
updateClock();