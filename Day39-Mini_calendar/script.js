const monthName = document.getElementById('month-name');
const dayName = document.getElementById('day-name');
const dayNumber = document.getElementById('day-number');
const year = document.getElementById('year');

const date = new Date();
const month = date.getMonth();
const day = date.getDay();

monthName.innerText = date.toLocaleString("en", {
    month: "long",
});
dayName.innerText = date.toLocaleString("en", {
    weekday: "long",
});
dayNumber.innerText = date.getDate();
yearEl.innerText = date.getFullYear();

// console.log(month)