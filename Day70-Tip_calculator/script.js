const btn = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const total = document.getElementById("total");

function calculateTotal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = (billValue * tipValue / 100) + Number(billValue);
  total.innerText = totalValue.toFixed(2);
}

btn.addEventListener("click", calculateTotal);