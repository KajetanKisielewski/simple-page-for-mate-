window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('contact_service', 'contact-form', this)
            .then(function () {
                document.querySelector('.thanks').classList.remove('inactive');
                document.querySelector('header').classList.add('inactive');
                document.querySelector('main').classList.add('inactive');
                document.querySelector('footer').classList.add('inactive');
                document.querySelector('.form__container').classList.add('inactive');
                window.scrollTo(0, 0);
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}