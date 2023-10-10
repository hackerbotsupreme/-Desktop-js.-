var spantext = document.getElementById("tooltip");
window.onmousemove = function (e) {
  var x = e.clientX;
  var y = e.clientY;
  spantext.style.top = y + 20 + "px";
  spantext.style.left = x + 20 + "px";
};
