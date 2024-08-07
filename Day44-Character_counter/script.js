const textArea = document.getElementById('textarea');
const totalCounter = document.getElementById('total-counter');
const remainingCounter = document.getElementById('remaining-counter');

textArea.addEventListener("keyup", function () {
    updateCounter();
});

function updateCounter () {
    const length = textArea.value.length;
    totalCounter.innerText = length;
    remainingCounter.innerText = textArea.getAttribute("maxLength") - length;
}