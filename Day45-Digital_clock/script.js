const hourEl = document.getElementById('hours');
const minuteEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

updateClock()
function updateClock () {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = "AM";

    if (hour > 12) {
        hour = hour - 12;
        ampm = "PM";
    }

    hourEl.innerText = hour < 10 ? "0" + hour : hour;
    minuteEl.innerText = minute < 10 ? "0" + minute : minute;
    secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
    ampmEl.innerText = ampm;

    setTimeout(function () {
        updateClock();
    }, 1000);
}