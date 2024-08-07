const toggle = document.getElementById('toggleDark');
const body = document.body;

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');

    if (this.classList.contains('bi-moon')) {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        body.style.transition = '1.5s';
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        body.style.transition = '1.5s';
    }
});