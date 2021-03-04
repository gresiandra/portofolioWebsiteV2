const menuToggle = document.querySelector('.menu-toggle');

window.addEventListener('scroll', (e) => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolls', window.scrollY>0);
});

menuToggle.addEventListener('click', (e) => {
    const header = document.querySelector('header');
    const menu = document.querySelector('.menu');
    const menuLi = document.querySelectorAll('.menu li');

    for (let index = 0; index < menuLi.length; index++) {
        menuLi[index].classList.toggle('active');   
    }

    menu.classList.toggle('active');
    header.classList.toggle('active');
})

function toggleMenu(){
    const header = document.querySelector('header');
    const menu = document.querySelector('.menu');
    const menuLi = document.querySelectorAll('.menu li');

    for (let index = 0; index < menuLi.length; index++) {
        menuLi[index].classList.remove('active');   
    }

    menu.classList.remove('active');
    header.classList.toggle('active');
}
