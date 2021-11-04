const loadText = document.querySelector('.loading-text');
const img = document.querySelector('.img');

let time = setInterval(blurring, 30);

let load = 0;

function blurring() {
    load++;

    if(load>99){
        clearInterval();
    }

    loadText.innerHTML = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    img.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
  