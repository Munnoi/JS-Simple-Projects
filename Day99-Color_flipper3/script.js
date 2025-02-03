const colorDisplay = document.getElementById("color-display");
const newColorBtn = document.getElementById("new-color-button");
const currentColorElement = document.getElementById("current-color");

const hexValue = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function getRandomHexValue() {
  const randomIndexPos = Math.floor(Math.random() * hexValue.length);
  const randomHexValue = hexValue[randomIndexPos];
  return randomHexValue;
}
function getRandomHexString(stringLength) {
  let hexString = "";
  for (let i = 0; i < stringLength; i++) hexString += getRandomHexValue();
  return hexString;
}

newColorBtn.addEventListener("click", function () {
  const randomHexString = '#' + getRandomHexString(6);
  document.body.style.setProperty("background-color", randomHexString);
  currentColorElement.textContent = randomHexString;
  colorDisplay.style.borderColor = randomHexString;
});
