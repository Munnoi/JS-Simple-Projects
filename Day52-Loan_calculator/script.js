const inputs = document.querySelectorAll('.input');
const payment = document.querySelector('.payment');

inputs.forEach(input => input.addEventListener('change', calculateLoan));

function calculateLoan () {
    const loanAmount = document.getElementById('loan-amount').value;
    const interestRate = document.getElementById('interest-rate').value;
    const monthsToPay = document.getElementById('months-to-pay').value;

    const interest = (loanAmount * interestRate * .01) / monthsToPay;
    const monthlyPayment = loanAmount / monthsToPay + interest 

    payment.innerText = `Monthly Payment: ${monthlyPayment.toFixed(3)}`;
}