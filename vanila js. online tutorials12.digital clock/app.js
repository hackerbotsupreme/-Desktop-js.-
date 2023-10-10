function clock() {
  var hour = document.getElementById("hour");
  var minutes = document.getElementById("minutes");
  var Seconds = document.getElementById("Seconds");
  
  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();
  
  hour.innerHTML= h;
  minutes.innerHTML= m;
  Seconds.innerHTML= s;
  
}

var interval = setInterval(clock,1000)
