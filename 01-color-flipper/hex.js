const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// ? Generating a random HEX color (#f15025 )

const emoji = ["😂", "😁", "😃", "😎", "😉"]

const btn = document.getElementById('btn');
const emoji_id = document.getElementById('emoji');
const color = document.querySelector('.color');


btn.addEventListener("click", function() {
    let hexColor = '#';

    // console.log( Math.floor(Math.random() * hex.length));

    for(let i = 0; i < 6; i++){
        const generator = Math.floor(Math.random() * hex.length);
        hexColor += hex[generator];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

    // emoji changer
    const emojiRandom =  Math.floor(Math.random() * emoji.length);
    emoji_id.textContent = emoji[emojiRandom];
});
