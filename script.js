let startButton = document.getElementById("start");
let resetButton = document.getElementById("reset");


startButton.addEventListener("click", function(){
alert("Clicked!");
});  

resetButton.addEventListener("click", function(){
  alert("Clicked!");
  });

function radio1(){
  var workId = document.getElementById("workId");
  var restId = document.getElementById("restId");

  workId.checked == true? alert(workId.value) :
   restId.checked == true? alert(restId.value) : alert(workId.value) ;
}