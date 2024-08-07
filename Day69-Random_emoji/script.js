const btn = document.querySelector('.btn');
const par = document.querySelector('.emoji-name');

const emoji = [];

getEmoji();
async function getEmoji() {
  let response = await fetch('https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1');
  data = await response.json();
  // console.log(data);
  for (let i = 0; i < data.length; i++) {
    emoji.push({
      name: data[i].unicodeName,
      character: data[i].character
    });
  }
}

btn.addEventListener('click', function() {
  const randomNum = Math.floor(Math.random() * emoji.length);
  // console.log(randomNum);
  btn.innerText = emoji[randomNum].character;
  par.innerText = emoji[randomNum].name;
});