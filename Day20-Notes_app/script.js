const notesContainer = document.querySelector('.notes-container');
// const createBtn = document.getElementsByTagName('button');
const createBtn = document.querySelector('button');
const notes = document.querySelector('.input-box');

const showNotes = () => {
    notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();

const updateStorage = () => {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = () => {
                updateStorage();
            }
        });
    }
});