const inputs = document.querySelectorAll('input');
const celsius = document.getElementById("celsius");
const farenheit = document.getElementById("farenheit");
const kelvin = document.getElementById("kelvin");

inputs.forEach(input => input.addEventListener("change", computeTemp));

function computeTemp (e) {
    const currentValue = +e.target.value;
    console.log(currentValue);
    switch (e.target.name) {
        case "celsius":
            kelvin.value = (currentValue + 273.32).toFixed(2);
            farenheit.value = (currentValue * 1.8 + 32).toFixed(2);
            break;
        case "farenheit":
            celsius.value = ((currentValue - 32) / 1.8).toFixed(2);
            kelvin.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case "kelvin":
            celsius.value = (currentValue - 273.32).toFixed(2);
            farenheit.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
            break;
        default:
            console.error("error occured!");
    }
}