const textArea = document.getElementById("textarea");
const tagsEl = document.querySelector(".tags");

textArea.focus();

textArea.addEventListener("keyup", (e) => {
  createTag(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

function createTag(input) {
  const tagEl = input
    .split(",")
    .filter((key) => key.trim() !== "")
    .map((key) => key.trim());

  tagsEl.innerHTML = "";

  tagEl.forEach((t) => {
    const tag = document.createElement("span");
    tag.classList.add("tag");
    tag.textContent = t;
    tagsEl.appendChild(tag);
  });
}

function randomSelect() {
  const times = 50;

  const intervals = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);

    setTimeout(() => {
      removeHighlight(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(intervals);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function removeHighlight(tag) {
  tag.classList.remove("highlight");
}
