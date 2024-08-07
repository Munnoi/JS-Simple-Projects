const container = document.querySelector('.container');

for (let index = 0; index < 30; index++) {
    const colorContainer = document.createElement('div');
    colorContainer.classList.add("color-container");
    colorContainer.innerText = randomColor();
    colorContainer.style.backgroundColor = randomColor();
    container.appendChild(colorContainer);
}

randomColor();
function randomColor () {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";

    for (let i = 0; i < colorCodeLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
        // console.log(colorCode)
    }
    return '#' + colorCode;
}