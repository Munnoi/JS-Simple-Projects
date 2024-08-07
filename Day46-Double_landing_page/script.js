const container = document.querySelector('.container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('mouseenter', function () {
    container.classList.remove('active-right');
    container.classList.add('active-left');
});
right.addEventListener('mouseenter', function () {
    container.classList.remove('active-left');
    container.classList.add('active-right');
});