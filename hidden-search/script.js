const btn = document.getElementById("btn");
const input = document.querySelector('.input');
const search = document.querySelector('.search');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    input.classList.toggle('active');
    search.classList.toggle('active');
    input.focus();
});