const currDate = new Date();
const newYear = '1 Jan 2022';
const newYearDate = new Date(newYear);


function timeRemaining() {
    const secs = Math.abs(newYearDate-currDate)/1000;

    const days = Math.floor(secs/(3600*24));
    const hours = Math.floor(secs/3600)%24;
    const mins = Math.floor(secs/60)%60;
    const seconds = Math.floor(secs)%60;

    const daysText = document.querySelector('.days');
    const hoursText = document.querySelector('.hours');
    const minsText = document.querySelector('.mins');
    const secsText = document.querySelector('.secs');
    
    daysText.textContent = formatTime(days);
    hoursText.textContent = formatTime(hours);
    minsText.textContent = formatTime(mins);
    secsText.textContent = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

timeRemaining();
setTimeout(function(){
    window.location.reload(1);
 }, 1000);