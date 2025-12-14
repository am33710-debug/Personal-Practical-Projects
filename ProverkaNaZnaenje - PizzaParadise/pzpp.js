let slideIndex = 0; // Current slide index

showSlides(slideIndex); // Initial call to show the first slide

function plusSlides(n) {
    showSlides(slideIndex += n); // Increment/decrement slide index and show the slide
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide"); // Get all slide elements
    if (n >= slides.length) { // If index exceeds the number of slides
        slideIndex = 0; // Reset to first slide
    }
    if (n < 0) { // If index is less than 0
        slideIndex = slides.length - 1; // Set to last slide
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slides[slideIndex].style.display = "flex"; // Display the current slide as flex
    slides[slideIndex].style.transition = "transform 0.5s ease-in-out"; // Smooth transition
}