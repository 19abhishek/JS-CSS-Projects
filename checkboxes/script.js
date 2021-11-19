const toggles = document.querySelectorAll(".toggle");
const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => trick(e.target))
);

function trick(checkedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === checkedOne) {
      good.checked = false;
    }
    if (cheap === checkedOne) {
      cheap.checked = false;
    }
    if (fast === checkedOne) {
      fast.checked = false;
    }
  }
}
