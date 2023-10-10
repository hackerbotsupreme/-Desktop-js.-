var scroll = document.querySelector(".curve");
window.addEventListener("scroll", function () {
  var value =1+ this.window.scrollY/-500;
  scroll.style.transform = `scaleY(${value})`;
});