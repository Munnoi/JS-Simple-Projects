const kits = ["crash", "kick", "snare", "tom"];
const container = document.querySelector(".container");

kits.forEach(kit => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    container.appendChild(btn);
    btn.innerText = kit;
    btn.style.backgroundImage = `url(images/${kit}.png)`;
    // btn.style.backgroundImage = "images/kick.png";
    const audio = document.createElement("audio");
    audio.src = `sounds/${kit}.mp3`;
    container.appendChild(audio);

    btn.addEventListener("click", () => {
        audio.play();
        btn.style.backgroundSize = "105%";
        setTimeout(() => {
                btn.style.backgroundSize = "100%";
        }, 100);
    });
    window.addEventListener("keydown", e => {
        if (e.key === kit.slice(0, 1)) {
            audio.play();
            btn.style.backgroundSize = "105%";
            setTimeout(() => {
                btn.style.backgroundSize = "100%";
            }, 100);
        }
    })
});