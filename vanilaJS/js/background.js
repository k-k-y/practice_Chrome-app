const images = [
    "0.jpg",
    "1.jpeg",
    "2.jpeg",
    "3.jpg",
];

const randomNum = Math.floor(Math.random() * images.length);
const chosenImage = images[randomNum];
document.body.style.backgroundImage = `url('img/${chosenImage}')`;
