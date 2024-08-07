const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let interval;
let timeLeft = 2;

function updateTimer () {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timer.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

start.addEventListener("click", () => {
    interval = setInterval(function () {
        timeLeft--;
        if (timeLeft === 0) {
            alert("Time's up!")
            clearInterval(interval);
            timeLeft = 1500;
        }
        updateTimer();
    }, 1000);
});
stop.addEventListener("click", function () {
    clearInterval(interval);
});
reset.addEventListener("click", () => {
    timeLeft = 1500;
    updateTimer();
    clearInterval(interval);
});