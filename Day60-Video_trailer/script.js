const closeBtn = document.querySelector(".trailer-container i");
const btn = document.querySelector(".btn");
const trailerContainer = document.querySelector(".trailer-container");
const video = document.querySelector("video");

btn.addEventListener("click", function () {
    trailerContainer.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
    trailerContainer.classList.add("hidden");
    video.pause();
    video.currentTime = 0;
});