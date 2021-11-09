const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  // console.log(faq.childNodes);

  faq.children[1].addEventListener("click", () => {
    faq.children[3].classList.toggle("close");
    //console.log(faq.children[3].children[1]);
  });
  faq.children[3].children[1].addEventListener("click", () => {
    faq.children[3].classList.toggle("close");
  });
});

// function open(openIcon, answer) {
//   openIcon.classList.add("close");
//   answer.classList.add("close");
// }

// function close(answer, openIcon) {
//   answer.classList.toggle("close");
//   openIcon.classList.toggle("close");
// }
