const images = [
    'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/10e15f15b32bcddc.jpg?q=20', 
    'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/8921fc73c192a29f.jpg?q=20',
    'slider1.webp', 
    'slider2.webp', 
    'slider3.webp',
    'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/a354077c3747d8f6.png?q=20'
]; // Replace with actual image URLs

let currentIndex = 0;
const slider = document.querySelector('.slider');
const leftButton = document.querySelector('.sileft');
const rightButton = document.querySelector('.siright');

function updateImage() {
    slider.style.backgroundImage = `url(${images[currentIndex]})`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

rightButton.addEventListener('click', nextImage);
leftButton.addEventListener('click', prevImage);

setInterval(nextImage, 1000); // Auto change every second

updateImage();

document.getElementById("icon").addEventListener("click", function() {
    
});

/*-----------*/
function openModal() {
    alert("Only for women! Continue?");
    document.getElementById("womenModal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeModal() {
    document.getElementById("womenModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}