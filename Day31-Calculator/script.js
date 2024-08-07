const numInputs = document.querySelectorAll('#btn');
const display = document.querySelector('.display input');

let content = '';
numInputs.forEach(numInput => {
    numInput.addEventListener('click', (e) => {
        // console.log(numInput.value)
        content += numInput.value; 
        if (numInput.value === 'AC') {
            display.value = '';
            content = '';
        } else if (numInput.value === 'DE') {
            display.value = content.toString().slice(0, content.length - 3);
            content = Number(content.toString().slice(0, content.length - 3));
        } else if (numInput.value === '=') {
            content = eval(content.slice(0, content.length - 1));
            // console.log(content);
            display.value = content;
        } else
            display.value = content;
    });
});