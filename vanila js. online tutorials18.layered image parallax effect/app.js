document.addEventListener("mousemove", parallex);
function parallex(e) {
  this.querySelectorAll(".layer").forEach((Layer) => {
    var speed = Layer.getAttribute("data-speed");
    var x = (window.innerWidth - e.pageX * speed) / 250;
    var y = (window.innerWidth - e.pageX * speed) / 250;
    Layer.style.transform = `translate(${-x}px) translateY(${y}px)`;
  });
}
