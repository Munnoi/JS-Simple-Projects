const btns = document.querySelectorAll('button');
btns.forEach((btn, idx) => btn.addEventListener('click', () => showToast(msgArr[idx])));
// Messages for displaying
const successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
const errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
const invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again';
const msgArr = [successMsg, errorMsg, invalidMsg]

const toastBox = document.getElementById('toastBox');

function showToast (text) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    // Adding content
    toast.innerHTML = text;
    toastBox.appendChild(toast);

    if (text.includes('error'))
        toast.classList.add('error');
    if (text.includes('Invalid'))
        toast.classList.add('invalid');

    setTimeout(() => {
        toast.remove();
    }, 5000);
}