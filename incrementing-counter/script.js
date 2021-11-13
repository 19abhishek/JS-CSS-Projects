const counts = document.querySelectorAll(".count");

counts.forEach((count) => {
  const follower = count.textContent;
  console.log(follower);
  let current = 0;

  function counter() {
    if (current < follower) {
      count.innerHTML = current;
      current++;
      setInterval(counter, 100);
    } else {
      //current = 0;
      count.innerHTML = follower;
      // clearInterval(interval);
      // console.log("hello");
    }

    // if (current === follower) {
    //   current = 0;
    //   clearInterval(interval);
    //   console.log("hello");
    // } else {
    //   count.innerHTML = current;
    //   current++;
    //   setInterval(counter, 100);
    // }
  }

  counter();
});
