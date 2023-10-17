var balls = document.getElementsByClassName("ball");
var turnOff = document.getElementsByClassName("btn");
var turnOn = document.getElementsByClassName("btn1");

turnOff[0].addEventListener("click", function (event) {
  event.preventDefault();
  document.onmousemove = null;
});
turnOn[0].addEventListener("click", function (event) {
  event.preventDefault();
  document.onmousemove = handleMouseMove;
});

document.onmousemove = handleMouseMove;

function handleMouseMove(event) {
  var x = (event.clientX * 100) / window.innerWidth + "%";
  var y = (event.clientY * 100) / window.innerHeight + "%";
  for (let i = 0; i < balls.length; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";
  }
}
