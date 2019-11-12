//timer id
const timer = document.getElementById("timer");

//button variables

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

//radio variables

let workMode = document.getElementById("workId");
let restMode = document.getElementById("restId");

//button event functions

startButton.addEventListener('click', () => {
  console.log("start");
})

stopButton.addEventListener('click', () => {
  console.log("Stop");
})

resetButton.addEventListener('click', () => {
  console.log("reset");
})

//radio button event functions - toggles between 25 and 5 min

workMode.addEventListener('click', () => {
  document.getElementById("timer").innerHTML = "25:00";
})

restMode.addEventListener('click', () => {
  document.getElementById("timer").innerHTML = "5:00";
});