// Define variables
const carousel = document.getElementById("carousel");
const button = document.getElementById("carousel__exit");
const images = document.getElementsByClassName("image");

// Define a function to control visibility of the carousel
function toggleVisibility() {
    let currentVisibility = carousel.style.visibility;
    if (currentVisibility !== "hidden") {
        carousel.style.visibility = "hidden";
    }
    if (currentVisibility !== "visible") {
        carousel.style.visibility = "visible";
    }
}

// Add event listener to the "exit" button to hide the carousel
button.addEventListener("click", toggleVisibility);

// Add event listener to each image to show the carousel
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", toggleVisibility);
}
