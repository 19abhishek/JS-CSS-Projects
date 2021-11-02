const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll('.circle');

let current = 1;

nextBtn.addEventListener("click", () => {
    current++;
    if(current<=4){
        progress.style.width = ((current-1)/(circles.length-1))*100 + '%';
        if(current>1){
            prevBtn.disabled = false;
        }
        if(current==circles.length){
            nextBtn.disabled = true;
        }
        updateCircle();
    }else {
        nextBtn.disabled = true;
        current = circles.length;
    }
});

prevBtn.addEventListener("click", () => {
    current--;
    if(current>=1){
        progress.style.width = ((current-1)/(circles.length-1))*100 + '%';
        updateCircle();
        if(current<circles.length){
            nextBtn.disabled = false;
        }
        if(current === 1){
            prevBtn.disabled = true;
        }
    }else{
        prevBtn.disabled = true;
        current = 1;
    }
});

function updateCircle() {
    circles.forEach((circle, idx) => {
        if(idx < current) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
}