const backgrounds = [
  "https://pixabay.com/get/g7e1f8d3c9e7f.jpg", // IQ Test
  "https://pixabay.com/get/g8a2f9d2a1b3f.jpg", // Sport
  "https://pixabay.com/get/g9b3f0e1c2d4f.jpg", // Learn Sports
  "https://pixabay.com/get/g1c4f5d6e7a8.jpg", // Cars
  "https://pixabay.com/get/g2d5e6f7g8h9.jpg"  // Ethical Hacking
];

let index = 0;

function updateBackground() {
  document.getElementById("background").style.backgroundImage = `url('${backgrounds[index]}')`;
  index = (index + 1) % backgrounds.length;
}

updateBackground();
setInterval(updateBackground, 420000); // 7 minutes
