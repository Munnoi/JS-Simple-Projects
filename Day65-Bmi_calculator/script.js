const btnEl = document.getElementById("btn");
const weightConditionEl = document.getElementById("weight-condition");

btnEl.addEventListener("click", calculateBMI);

function calculateBMI () {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;
  const bmiEl = document.getElementById("bmi-result");

  const bmiValue = weightValue / (heightValue * heightValue);

  // console.log(bmiValue);
  bmiEl.value = bmiValue.toFixed(2);

  if (bmiValue < 18.5)
    weightConditionEl.innerText = "Under Weight";
  else if (bmiValue >= 18.5 && bmiValue <= 24.9)
    weightConditionEl.innerText = "Normal";
  else if (bmiValue >= 25 && bmiValue <= 29.9)
    weightConditionEl.innerText = "Overweight";
  else
    weightConditionEl.innerText = "Obese";
}