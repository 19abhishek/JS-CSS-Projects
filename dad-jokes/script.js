const jokeText = document.querySelector(".joke-text");
const jokeBtn = document.querySelector(".btn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    header: {
      Accept: "application/Json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  jokeText.textContent = data.joke;
}
