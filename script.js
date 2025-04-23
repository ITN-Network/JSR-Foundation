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

document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const slider = document.getElementById("slider");
  const slides = slider.querySelectorAll("img");

  function updateSlider() {
    slides.forEach((img, index) => {
      const offset = (index - currentIndex) * 320;
      img.classList.remove("active");
      img.style.transform = `translateX(${offset}px) scale(${index === currentIndex ? 1 : 0.9})`;
      img.style.opacity = index === currentIndex ? "1" : "0.5";
    });

    if (slides[currentIndex]) {
      slides[currentIndex].classList.add("active");
    }
  }

  window.moveSlide = function (step) {
    currentIndex += step;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    updateSlider();
  };

  updateSlider();
});
