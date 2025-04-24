let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

window.toggleMenu = function () {
    const menu = document.getElementById('main-menu');
    const hamburger = document.getElementById('hamburger');
    const closeIcon = document.getElementById('close');

    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        hamburger.style.display = 'inline';
        closeIcon.style.display = 'none';
    } else {
        menu.style.display = 'flex';
        hamburger.style.display = 'none';
        closeIcon.style.display = 'inline';
    }
};