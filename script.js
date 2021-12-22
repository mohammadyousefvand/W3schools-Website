const menu = document.querySelector('.menu');
const hamberger = document.querySelector('.hamberger');
const linkItem = document.querySelectorAll('.link-item')
const goUpScroll = document.querySelector('.go-up')

// function

function goUpScrollHanler() {
    window.scrollTo(0, 0)
}

hamberger.addEventListener('click', function () {
    menu.classList.toggle('hide');
    hamberger.classList.toggle('rotate')
});

linkItem.forEach(function (link) {
    link.addEventListener('click', function () {
        menu.classList.remove('hide')
    })
})

goUpScroll.addEventListener('click', goUpScrollHanler)