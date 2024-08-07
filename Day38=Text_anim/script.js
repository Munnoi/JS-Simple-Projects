const container = document.querySelector('.container');

const careers = ["Web Developer", "Freelancer", "Farmer"];

let index = 0;
let charIndex = 0;

updateText();
function updateText () {
    charIndex++;
    container.innerHTML = `<h1>I am a ${careers[index].slice(0, charIndex)}</h1>`;
    if (charIndex === careers[index].length) {
        if (index === careers.length - 1) index = 0;
        else
            index++;
        charIndex = 0;
    }
    setTimeout(updateText, 280);
}