const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const message = document.getElementById('message');
const gif = document.getElementById('gif');

const ggif= [
    
    
    '3.gif',
    '4.gif'
];
const bgif = [
    
    '2.jpeg',
    '5.gif',
    '6.gif',
    '7.gif'

];

const comments = [
    'Aww, I knew it! You’re the best!',
    'You just made my day! 💖',
    'Yay! You’re so sweet! 😘'
];

const noResponses = [
    'Oh come on, I know you do!',
    'Really? Just admit it!',
    'Please, don’t be shy! I know you love me!',
    'Come on, just say yes!'
];

let noCounter = 0;

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

yesButton.addEventListener('click', () => {
    message.textContent = getRandomElement(comments);
    gif.src = getRandomElement(ggif);
});

noButton.addEventListener('click', () => {
    if (noCounter < noResponses.length) {
        message.textContent = noResponses[noCounter];
        noCounter++;
    } else {
        // message.textContent = 'Please don’t make me ask again!';
        noCounter=0;
        return 1;
    }
    gif.src = getRandomElement(bgif);
});
