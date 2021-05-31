const btn = document.querySelector('.products__button');
const form = document.querySelector('.form__container');
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const closer = document.querySelector('.form--close');
const closer2 = document.querySelector('.thanks--close');
const closer3 = document.querySelector('.regulations--close');
const closer4 = document.querySelector('.privacy--close');



btn.addEventListener('click' , function() {
    header.classList.add('inactive')
    main.classList.add('inactive')
    footer.classList.add('inactive')
    form.classList.remove('inactive')
    window.scrollTo(0, 0);
})

closer.addEventListener('click' , function() {
    header.classList.remove('inactive')
    main.classList.remove('inactive')
    footer.classList.remove('inactive')
    form.classList.add('inactive')
    document.querySelector('.thanks').classList.add('inactive');
    window.scrollTo(0, 0);
})

closer2.addEventListener('click' , function() {
    header.classList.remove('inactive')
    main.classList.remove('inactive')
    footer.classList.remove('inactive')
    form.classList.add('inactive')
    document.querySelector('.thanks').classList.add('inactive');
    window.scrollTo(0, 0);
})

closer3.addEventListener('click' , function() {
    header.classList.remove('inactive')
    main.classList.remove('inactive')
    footer.classList.remove('inactive')
    form.classList.add('inactive')
    document.querySelector('.thanks').classList.add('inactive');
    document.querySelector('.regulations').classList.add('inactive');
    window.scrollTo(0, 0);
})

closer4.addEventListener('click' , function() {
    header.classList.remove('inactive')
    main.classList.remove('inactive')
    footer.classList.remove('inactive')
    form.classList.add('inactive')
    document.querySelector('.thanks').classList.add('inactive');
    document.querySelector('.regulations').classList.add('inactive');
    document.querySelector('.privacy').classList.add('inactive');
    window.scrollTo(0, 0);
})


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












// Wyświetlanie ceny końcowej
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






// Zmiana zdjęcia koszulki w zależności od wybranego koloru

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

