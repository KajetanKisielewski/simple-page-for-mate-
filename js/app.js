const btn = document.querySelector('.products__button');
const form = document.querySelector('.form__container');
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const closer = document.querySelector('.form--close');

const infoData = document.querySelector('.info__data');
const sendInput = document.querySelector('[type="submit"]');



btn.addEventListener('click' , function() {
    header.classList.toggle('inactive')
    main.classList.toggle('inactive')
    footer.classList.toggle('inactive')
    form.classList.toggle('inactive')
    window.scrollTo(0, 0);
})

closer.addEventListener('click' , function() {
    header.classList.toggle('inactive')
    main.classList.toggle('inactive')
    footer.classList.toggle('inactive')
    form.classList.toggle('inactive')
    window.scrollTo(0, 0);
})


sendInput.addEventListener('click' , function() {
    infoData.style.visibility="visible";
})

