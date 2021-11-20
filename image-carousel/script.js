const image = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const imgs = document.querySelectorAll("img");

let index = 0;

function run() {
  index++;
  changeImage();
}

let interval = setInterval(() => {
  run();
}, 2000);

function changeImage() {
  if (index > imgs.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = 0;
  }
  image.style.transform = `translateX(${-index * 50}vw)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

leftBtn.addEventListener("click", () => {
  index--;
  changeImage();
  resetInterval();
});

rightBtn.addEventListener("click", () => {
  index++;
  changeImage();
  resetInterval();
});
