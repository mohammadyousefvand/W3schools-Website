const menu = document.querySelector('.menu');

const hamberger = document.querySelector('.hamberger');

hamberger.addEventListener('click', function () {
    menu.classList.toggle('hide');
    hamberger.classList.toggle('rotate')
});