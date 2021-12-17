const menu = document.querySelector('.menu');

const hamberger = document.querySelector('.hamberger');

let linkItem = document.querySelectorAll('.link-item')

hamberger.addEventListener('click', function () {
    menu.classList.toggle('hide');
    hamberger.classList.toggle('rotate')
});

linkItem.forEach(function (link) {
    link.addEventListener('click' , function () {
        menu.classList.remove('hide')
    })
})