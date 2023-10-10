var scroll = document.getElementById("top");
window.addEventListener("scroll", function () {
  scroll.style.transform = "rotate(" + window.pageYOffset + "deg)";
});
