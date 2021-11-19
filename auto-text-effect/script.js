const text = document.querySelector(".text");
const random =
  "We have come too far to give up on who we are, so let's raise the bar and our cups to the stars.👊";
const speed = document.getElementById("speed");
let time = 200 / speed.value;
let index = 1;

loadText();

function loadText() {
  text.innerHTML = random.slice(0, index);

  index++;
  if (index > random.length) {
    index = 1;
  }
  setTimeout(loadText, time);
}

speed.addEventListener("input", (e) => (time = 300 / e.target.value));
