let bg = document.querySelector("#bg");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  bg.style.backgroundSize = 100 + value*2 + "px";
});
