const menuToggle = document.querySelector('.menu-toggle div:first-child');

window.addEventListener('scroll', (e) => {
    const header = document.querySelector('header');
    header.classList.toggle('responsive', window.scrollY>0);
});

menuToggle.addEventListener('click', (e) => {
    const menu = document.querySelector('.menu');
    const menuLi = document.querySelectorAll('.menu li');

    for (let index = 0; index < menuLi.length; index++) {
        menuLi[index].classList.toggle('active');   
    }

    menu.classList.toggle('active');
})

function toggleMenu(){
    const menu = document.querySelector('.menu');
    const menuLi = document.querySelectorAll('.menu li');

    for (let index = 0; index < menuLi.length; index++) {
        menuLi[index].classList.remove('active');   
    }

    menu.classList.remove('active');
}
