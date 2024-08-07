const imageContainer = document.querySelector('.image-container');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let x = 0;
let timer;
prev.addEventListener('click', function () {
    x += 45;    
    clearTimeout(timer);
    updateGallery();
});
next.addEventListener('click', function () {
    x -= 45;
    clearTimeout(timer);
    updateGallery();
});

updateGallery();
function updateGallery () {
    imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(function () {
        x -= 45;
        updateGallery();
    }, 2000);
}
