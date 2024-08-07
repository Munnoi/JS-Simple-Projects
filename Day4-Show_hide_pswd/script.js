const icon = document.querySelector('.fa-eye');
const input = document.querySelector('input');

icon.addEventListener('click', () => {
    input.type === 'password' ? input.type = 'text' : input.type = 'password';
    icon.classList.toggle('color');
});