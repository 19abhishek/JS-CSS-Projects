const images = document.querySelectorAll(".content");
const items = document.querySelectorAll("nav ul li");

items.forEach((item, idx) => {
  item.addEventListener("click", () => {
    hideAllContents();
    hideAllItems();

    item.classList.add("active");
    images[idx].classList.add("show");
  });
});

function hideAllContents() {
  images.forEach((content) => content.classList.remove("show"));
}

function hideAllItems() {
  items.forEach((item) => item.classList.remove("active"));
}
