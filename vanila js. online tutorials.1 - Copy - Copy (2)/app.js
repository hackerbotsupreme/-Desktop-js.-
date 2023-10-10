for (let i = 1; i <= 1500; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  document.querySelector(".container").appendChild(box);
}

const randomColorBlock = document.querySelectorAll(".box");
function addcolor(){
  randomColorBlock.forEach((e)=>{
    e.style.backgroundColor = randomColor();
  });
}

function randomColor(){
  var chars = "1234567890abcdef";
  var colorLength = 6;
  var color = "";

  for (let i = 1; i <= colorLength; i++) {
    let randomColor = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomColor, randomColor + 1);
  }
  return "#"+color;
}
addcolor()