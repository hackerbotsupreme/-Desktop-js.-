var slide = document.getElementById("layer");
window.onmousemove = function (e) {
  var x = e.clientX;
  slide.style.left = x + "px";
};
