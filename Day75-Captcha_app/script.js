document.addEventListener('DOMContentLoaded', function () {
  let canvas = document.getElementById('captcha');
  let ctx = canvas.getContext('2d');
  let captchaText = generateCaptchaText(6);

  const captchaStatus = document.getElementById('captcha-status');
  drawCaptcha(captchaText);

  function verifyCaptcha() {
    let inputText = document.getElementById('captcha-input').ariaValueMax.toLowerCase();

    if (inputText === captchaText.toLowerCase()) {
      captchaStatus.textContent = 'Captcha Correct!';
      captchaStatus.style.color = 'green';
    } else if (inputText.length < 6) {
      captchaStatus.textContent = 'Enter all characters!';
      captchaStatus.style.color = 'red';
    } else {
      captchaStatus.textContent = 'Captcha incorrect. Please try again!';
      captchaStatus.style.color = 'red';
    }

    setTimeout(() => {
      captchaStatus.textContent = 'Status: IDLE';
      captchaStatus.style.color = 'black';
    }, 3000);
    inputText.value = '';
    captchaText = generateCaptchaText(6);
    drawCaptcha(captchaText);
  }
  // Event listener for check btn
  document.getElementById('check-captcha').addEventListener('click', verifyCaptcha);

  // Add event listener for reload btn
  document.getElementById('reload-captcha').addEventListener('click', function () {
    captchaText = generateCaptchaText(6);
    drawCaptcha(captchaText);
    inputText.value = '';
    captchaStatus.textContent = 'Status: IDLE';
  });

  function generateCaptchaText(length) {
    const result = '';
    const chars = '';
    const charsLength = chars.length;
    for (let i = 0; i < charsLength; i++) {
      result += chars.charAt(Math.floor(Math.random() * charsLength))
    }

    return result;
  }

  function drawCaptcha(text) {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    ctx.fillStyle = '#f3f3f3';
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
    addNoise(ctx);
    ctx.fillStyle = '#06108c';
    ctx.font = '24px Arial';
  }
});