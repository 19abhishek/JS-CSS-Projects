const sounds = ['boom', 'clap', 'hithat', 'kick', 'openhat', 'ride', 'snare', 'tink', 'tom'];

sounds.forEach(sound => {
    const cbtn = document.createElement('button');
    
    cbtn.innerText = sound;
    cbtn.classList.add('btn');

    cbtn.addEventListener('click', () => {
        stopPlay(sound);

        const caudio = document.getElementById(sound);
        caudio.play();
    });

    document.querySelector('.buttons').appendChild(cbtn);
});

function stopPlay() {
    sounds.forEach(caudio => { 
        const sound = document.getElementById(caudio);
        sound.pause();
        sound.currentTime = 0;
    });
}