const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar-mobile ul')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})