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
  var x = (e.clientX * 100) / window.innerWidth + "%";
  var y = (e.clientY * 100) / window.innerHeight + "%";

  for (var i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-" + x + ", -" + y + ")";
  }
});
