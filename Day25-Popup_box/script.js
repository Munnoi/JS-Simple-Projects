const btn = document.querySelector('.btn');
const okBtn = document.querySelector('.button');
const popup = document.getElementById('popup');

btn.addEventListener('click', function () {
    popup.classList.add('open-popup');
});
okBtn.addEventListener('click', function () {
    popup.classList.remove('open-popup');
});