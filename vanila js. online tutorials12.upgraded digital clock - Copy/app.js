function clock() {
  var hour = document.getElementById("hour");
  var minutes = document.getElementById("minutes");
  var Seconds = document.getElementById("Seconds");
  var ampm = document.getElementById("ampm");

  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();
  var am = "AM";

  if (h > 12) {
    h = h - 12;
    var am = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerHTML = h;
  minutes.innerHTML = m;
  Seconds.innerHTML = s;

  ampm.innerHTML = am;
}

var interval = setInterval(clock, 1000);
