const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0";
    const dataCeil = counter.getAttribute("data-ceil");
    const increment = dataCeil / 15;
    let currentNum = 0;

    const interval = setInterval(() => {
        currentNum += increment;
        if (currentNum <= dataCeil) {
            counter.innerText = Math.round(currentNum);
        } else {
            counter.innerText = dataCeil;
            clearInterval(interval);
        }
    }, 50)
});


function incrementCounter (counter) {
    if (currentNum < dataCeil) return;
}