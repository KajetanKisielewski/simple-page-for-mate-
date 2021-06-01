const btn = document.querySelector('.products__button');


const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const form = document.querySelector('.form__container');
const thanks = document.querySelector('.thanks');
const regulations = document.querySelector('.regulations');
const privacy = document.querySelector('.privacy');
const contact = document.querySelector('.contact');


const close = document.querySelectorAll('.close');


const inactive = function() {
    header.classList.add('inactive')
    main.classList.add('inactive')
    footer.classList.add('inactive')
    form.classList.remove('inactive')
    window.scrollTo(0, 0);
}

const active = function() {
    header.classList.remove('inactive')
    main.classList.remove('inactive')
    footer.classList.remove('inactive')
    form.classList.add('inactive')
    thanks.classList.add('inactive');
    regulations.classList.add('inactive')
    privacy.classList.add('inactive');
    contact.classList.add('inactive');
    window.scrollTo(0, 0);
}

btn.addEventListener('click' , inactive);

close.forEach( function(element) {
    element.addEventListener('click' , active);
} )


document.querySelector('.description--first').addEventListener('click' , function() {
    header.classList.add('inactive')
    main.classList.add('inactive')
    footer.classList.add('inactive')
    document.querySelector('.regulations').classList.remove('inactive')
    window.scrollTo(0, 0);
})


document.querySelector('.description--second').addEventListener('click' , function() {
    header.classList.add('inactive')
    main.classList.add('inactive')
    footer.classList.add('inactive')
    document.querySelector('.privacy').classList.remove('inactive')
    window.scrollTo(0, 0);
})


document.querySelector('.nav__link--contact').addEventListener('click' , function() {
    header.classList.add('inactive')
    main.classList.add('inactive')
    footer.classList.add('inactive')
    contact.classList.remove('inactive')
    window.scrollTo(0, 0);
})







function setPrice(selectedShip) {

    const x = selectedShip();
    const infoPrice = document.querySelector('.info__price');
    const dataPrice = document.querySelector('.data__price');
    const base = 49.99;
    const courierShip = 11.00;
    const parcelLockerShip = 9.00;
    const personalShip = 0.00;

    if( x === "60,99zł - dostawa kurierem" ) {
        infoPrice.textContent = `Cena: ${base + courierShip}zł`
        dataPrice.textContent = `${base + courierShip}zł`
    }
    else if( x === "58,99zł - dostawa paczkomatem" ) {
        infoPrice.textContent = `Cena: ${base + parcelLockerShip}zł`
        dataPrice.textContent = `${base + parcelLockerShip}zł`
    }
    else if( x === "49,99zł - odbiór osobisty" ) {
        infoPrice.textContent = `Cena: ${base + personalShip}zł`
        dataPrice.textContent = `${base + personalShip}zł`
    }
    else {
        infoPrice.textContent = "Cena: 49,99 zł + przesyłka";
    }
}


function getSelectedShip() {

    const selectedShip = document.getElementById('ship-select').value;
    return selectedShip
}

function setColor(selectedColor) {

    const x = selectedColor();
    const infoImg = document.querySelector('.info__img');

    if( x === "Biały" ) {
        infoImg.setAttribute('src' , './img/product1.png')
    }
    else if( x === "Czerwony" ) {
        infoImg.setAttribute('src' , './img/product2.png')
    }
    else{
        infoImg.setAttribute('src' , './img/product1.png')
    }
}

function getSelectedColor() {

    const selectedColor = document.getElementById('color-select').value;
    return selectedColor
}

