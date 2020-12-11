const poster = document.querySelector('#poster');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');

poster.addEventListener('click', function() {
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function() {
    modalBg.classList.remove('bg-active');
});