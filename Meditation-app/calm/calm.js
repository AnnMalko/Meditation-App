const timer = 5;
let amountTime = timer * 60;

function calculateTime() {
    const countdown = document.querySelector('#countdown');
    let minutes = Math.floor(amountTime / 60);
    let seconds = amountTime % 60;

    if (seconds < 10) {
        seconds = "0" + seconds
    } else {
        seconds = seconds;
    }
    countdown.textContent = `${minutes} : ${seconds}`;

    amountTime--;
    if (amountTime < 0) {
        stopTimer();
        amountTime = 0;
    } else {
        amountTime = amountTime
    }

}

let timerId = setInterval(calculateTime, 1000);

function stopTimer() {
    clearInterval(timerId);
}
const button = document.querySelector("#myButton");
const audio = document.querySelector('#player');

button.addEventListener("click", function() {
    document.querySelector("#myVideo").play();
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
})
