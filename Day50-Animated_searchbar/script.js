const searchBar = document.querySelector('.search-bar-container');
const magnifier = document.querySelector('.magnifier');
const input = document.querySelector('.input');

magnifier.addEventListener('click', function () {
    searchBar.classList.toggle('active');
    input.focus();
});