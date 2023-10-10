var number = document.getElementById("box");
for (i = 0; i < 100; i++) {
  var span = document.createElement("span");
  span.textContent = i;
  number.appendChild(span);
}
var num = number.getElementsByTagName("span");
var index = 0;
function nextNum() {
  num[index].style.display = "none";
  index = (index + 1) % num.length;
  num[index].style.display = "initial";
}
function prevNum() {
  num[index].style.display = "none";
  index = (index - 1 + num.length) % num.length;
  num[index].style.display = "initial";
}
