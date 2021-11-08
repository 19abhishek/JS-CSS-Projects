const key = document.getElementById("event-key");
const keyCode = document.getElementById("event-keyCode");
const code = document.getElementById("event-code");
const initial = document.querySelector(".initial");
const final = document.querySelector(".final");

console.log(code);

window.addEventListener("keydown", keyInfo);

function keyInfo(e) {
  key.innerHTML = e.key === " " ? "Space" : e.key;
  keyCode.innerHTML = e.keyCode;
  code.innerHTML = e.code;
  initial.classList.add("no-show");
  final.classList.remove("no-show");
}
