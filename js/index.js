var balls = document.getElementsByClassName("eye__ball");

document.addEventListener("mousemove", (e) => {
  var x = (e.clientX * 100) / window.innerWidth + "%";
  var y = (e.clientY * 100) / window.innerHeight + "%";

  for (var i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-" + x + ", -" + y + ")";
  }
});

document.addEventListener("touchmove", (e) => {
  var x = (e.changedTouches[0].clientX * 100) / window.innerWidth + "%";
  var y = (e.changedTouches[0].clientY * 100) / window.innerHeight + "%";

  for (var i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-" + x + ", -" + y + ")";
  }
});

/* -=-=-=-=-=-= Audio =-=-=-=-=-=- */
var audio = document.getElementById("audio");
var playPauseBtn = document.getElementById("playPauseBtn");
var muteBtn = document.getElementById("mute");
var count = 0;
function playPause() {
  if (count == 0) {
    count = 1;
    audio.pause();
    playPauseBtn.innerHTML = "&#9658;";
  } else {
    count = 0;
    audio.play();
    playPauseBtn.innerHTML = "&#10074;&#10074;";
  }
}

function mute() {
  if (audio.muted) {
    audio.muted = false;
    muteBtn.style.background = "url(./img/speaker.png) no-repeat ";
    muteBtn.style.backgroundSize = "cover";
  } else {
    audio.muted = true;
    muteBtn.style.background = "url(./img/non-speaker.png) no-repeat ";
    muteBtn.style.backgroundSize = "cover";
  }
}
