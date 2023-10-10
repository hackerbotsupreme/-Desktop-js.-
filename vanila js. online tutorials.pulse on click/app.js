var pulse = function () {
  var e = document.createElement("div");
  e.setAttribute("class", "circle"),
    document.body.appendChild(e),
    (e.style.top = event.pageY + "px"),
    (e.style.left = event.pageX + "px"),
    setTimeout(function () {
      document.body.removeChild(e);
    }, 1000);
};
document.addEventListener('click',pulse)
