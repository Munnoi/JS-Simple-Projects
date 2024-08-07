const input = document.querySelector('.input');
const body = document.body;

input.checked = JSON.parse(localStorage.getItem('mode'));
updateBody();
function updateBody () {
    if (input.checked)
        body.style.backgroundColor = 'black';
    else
        body.style.backgroundColor = 'white';
}

input.addEventListener('input', function () {
    updateBody();
    updateLocalStorage();
});

function updateLocalStorage () {
    localStorage.setItem('mode', JSON.stringify(input.checked));
}