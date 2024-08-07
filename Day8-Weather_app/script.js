function getWeather () {
    const API_KEY = "cca90b2ea7ab07e4cd5ae1c11f81f38f";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => console.log(data))
}

document.body.addEventListener('load', getWeather());