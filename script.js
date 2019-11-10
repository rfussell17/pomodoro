var start = Document.getElementById("start");
var timer = Document.getElementById("timer")
let min = 25;
let secs = 60;

start.addEventListener("click", function(){
  timer = min + secs;
  setInterval(timer, 1000);
  timer --;
}); 