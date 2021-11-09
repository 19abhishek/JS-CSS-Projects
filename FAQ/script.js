const questions = document.querySelectorAll(".questions");

questions.forEach((question) => {
  // const openIcon = question.querySelector(".open-icon");
  // const answer = question.querySelector(".faq-answer");
  // const closeIcon = document.querySelector(".close-icon");
  // openIcon.addEventListener("click", open(openIcon, answer));
  // closeIcon.addEventListener("click", close(answer, openIcon));
});

function open(openIcon, answer) {
  openIcon.classList.add("close");
  answer.classList.add("close");
}

function close(answer, openIcon) {
  answer.classList.toggle("close");
  openIcon.classList.toggle("close");
}
