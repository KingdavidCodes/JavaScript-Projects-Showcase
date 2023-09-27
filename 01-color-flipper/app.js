const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const emoji = ["😂", "😁", "😃", "😎", "😉"]

const btn = document.getElementById('btn');
const emoji_id = document.getElementById('emoji');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    // get random number between 0 - 3
    const randomNumber = Math.floor(Math.random() * colors.length);
    const pickedRandom = colors[randomNumber];
    document.body.style.backgroundColor = pickedRandom;
    color.textContent = pickedRandom;

    // emoji changer
    const emojiRandom =  Math.floor(Math.random() * emoji.length);
    emoji_id.textContent = emoji[emojiRandom];
});

