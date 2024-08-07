const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

rightBtn.addEventListener('click', function () {
    activeSlide++;
    if (activeSlide > slides.length - 1)
        activeSlide = 0;
    setBgToBody();
    setActiveSlide();
});
leftBtn.addEventListener('click', function () {
    activeSlide--;
    if (activeSlide < 0)
        activeSlide = slides.length - 1;
    setBgToBody();
    setActiveSlide();
});

setBgToBody();
function setBgToBody () {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}


setActiveSlide();
function setActiveSlide () {
    // slides.forEach(slide => slide.classList.remove('active'));
    // slides[activeSlide].classList.add('active');
    // console.log(activeSlide)
    if (slides && slides.length > activeSlide && activeSlide >= 0) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[activeSlide].classList.add('active');
    } else {
        console.error('Invalid active slide index or slides array is not properly initialized.');
    }
}