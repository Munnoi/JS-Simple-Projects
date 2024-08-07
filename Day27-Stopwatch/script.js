const time = document.querySelector('h1');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;

function stopWatch () {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    time.innerText = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

start.addEventListener('click', watchStart);
stop.addEventListener('click', watchStop);
reset.addEventListener('click', watchReset);
function watchStart () {
    if (timer !== null)
        clearInterval(timer);
    timer = setInterval(stopWatch, 1000);
}

function watchStop () {
    clearInterval(timer);
}
function watchReset () {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    time.innerText = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}