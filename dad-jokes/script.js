const jokeText = document.querySelector(".joke-text");
const jokeBtn = document.querySelector(".btn");

console.log(jokeBtn);
console.log(jokeText);

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  jokeText.textContent = data.joke;
}
