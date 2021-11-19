const sliderContainer = document.querySelector(".slider-container");
const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const downButton = document.querySelector(".down-button");
const upButton = document.querySelector(".up-button");
const length = rightSlide.querySelectorAll("div").length;

let index = 0;

leftSlide.style.top = `-${(length - 1) * 100}vh`;

downButton.addEventListener("click", () => changeSlide("down"));
upButton.addEventListener("click", () => changeSlide("up"));

function changeSlide(direction) {
  const slideHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    index--;
    if (index < 0) {
      index = length - 1;
    }
  } else if (direction === "down") {
    index++;
    if (index === length) {
      index = 0;
    }
  }
  leftSlide.style.transform = `translateY(${index * slideHeight}px)`;
  rightSlide.style.transform = `translateY(-${index * slideHeight}px)`;
}
