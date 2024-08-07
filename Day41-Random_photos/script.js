const container = document.querySelector('.image-container');
const btn = document.querySelector('.btn');

const IMAGE_NO = 10;
btn.addEventListener('click', function () {
    addNewImages();
});

function addNewImages () {
    for (let i = 0; i < IMAGE_NO; i++) {
        const img = document.createElement('img');
        img.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 1000)}`; 
        container.appendChild(img);
    }
}