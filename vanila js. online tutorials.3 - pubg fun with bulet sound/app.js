document.addEventListener("click", function (e) {
  var body = document.querySelector("body");
  var bullet = document.createElement("span");
  var x = e.offsetX;
  var y = e.offsetY;
  bullet.style.left = x + "px";
  bullet.style.top = y + "px";
  body.appendChild(bullet);

  var audio = document.getElementById("audio");
  audio.play();
});
