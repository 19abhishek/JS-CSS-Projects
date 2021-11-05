const boxes = document.querySelectorAll('.container');

window.addEventListener('scroll', animate);

animate();

function animate() {
    const trigger = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const top = box.getBoundingClientRect().top;

        if(top < trigger) {
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
}