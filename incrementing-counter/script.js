const counts = document.querySelectorAll(".count");

counts.forEach((count) => {
  const follower = count.textContent;
  console.log(follower);
  let current = 0;
  var interval = setInterval(counter, 1);

  function counter() {
    if (current === follower) {
      current = 0;
      clearInterval(interval);
      console.log("hello");
    } else {
      count.innerHTML = current;
      current++;
    }
  }
});
