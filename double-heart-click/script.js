const img = document.querySelector(".img");
const count = document.querySelector(".count");

img.addEventListener("dblclick", (e) => {
  heart(e);
});

function heart(e) {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const rightOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - rightOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  img.appendChild(heart);

  setTimeout(() => heart.remove(), 1500);
}
