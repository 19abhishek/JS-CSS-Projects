const body = document.body;
const slides = document.querySelectorAll(".slides");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

let current = 0;
console.log(slides);

rightBtn.addEventListener("click", () => {
  current++;
  if (current == slides.length) {
    current = 0;
  }
  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  current--;
  if (current < 0) {
    current = slides.length - 1;
  }
  setBgToBody();
  setActiveSlide();
});

setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = slides[current].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[current].classList.add("active");
}
