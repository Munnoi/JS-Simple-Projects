const btn = document.querySelector('.btn');
const parentEl = btn.parentElement;

btn.addEventListener('mouseover', e => {
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;
    // console.log(x, y);

    btn.style.setProperty("--xPos", x + 'px');
    btn.style.setProperty("--yPos", y + 'px');
});