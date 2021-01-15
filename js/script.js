let menuOpen = document.querySelector('#menu-open');
let menuClose = document.querySelector('#menu-close');
let menu = document.querySelector('.header-nav');

menuOpen.addEventListener('click', function(event) {
    event.preventDefault();
    menu.classList.toggle('mobile');
    menuOpen.classList.toggle('hidden');
    menuClose.classList.toggle('visible');
});

menuClose.addEventListener('click', function(event) {
    event.preventDefault();
    menu.classList.toggle('mobile');
    menuClose.classList.toggle('visible');
    menuOpen.classList.toggle('hidden');
});