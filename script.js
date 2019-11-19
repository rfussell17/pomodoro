
//all code is wrapped in pomodoro and then called at the bottom

function pomodoro(){

  //variables to grab seconds, buttons, and work modes

  const time = document.getElementById("timer");
  let totalSeconds = 1500;
  let restSeconds = 300;
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const resetButton = document.getElementById("reset");
  const workMode = document.getElementById("workId");
  const restMode = document.getElementById("restId");

  if(workMode.checked){
    time.innerHTML = "25:00";
    }
  if (restMode.checked){
      time.innerHTML = "05:00";
      totalSeconds = 300;
    }
  
  //timer function calculates and refactors seconds into seconds and minutes

  function timerDisplay(totalSeconds){
    let refactoredMinutes;
    let refactoredSeconds;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds - minutes * 60;
    refactoredMinutes = minutes < 10 ? refactoredMinutes = `0${minutes}` : refactoredMinutes = `${minutes}`;
    refactoredSeconds = seconds < 10 ? refactoredSeconds = `0${seconds}` : refactoredSeconds = `${seconds}`;
    time.innerHTML = `${refactoredMinutes}:${refactoredSeconds}`;    

    //radio buttons to toggle 25 and 5 min periods

    workMode.addEventListener('click', () => {
    //  console.log("Work mode")
    //  if(workMode.checked){
        time.innerHTML = "25:00";
        totalSeconds = 1500;

    }); 
  
    restMode.addEventListener('click', () => {
    //  console.log("Rest mode")
    //  if(restMode.checked){
      time.innerHTML = "05:00";
      totalSeconds = 300;
    }); 
  };

  //countDown function decrements totalSeconds until 0 and plays timer sound.

  function countDown(){
    totalSeconds --;
    console.log(timer);
    timerDisplay(totalSeconds);
      if(totalSeconds == 0){
        playSound();
        clearInterval(timer);
        time.innerHTML = "00:00";
      }
    };

    //timer sound

    function playSound(){
    const audio = new Audio("sounds/shine-ding_GyZLjr4O.mp3");
    audio.play();
    }

  //start, stop and reset buttons

  startButton.addEventListener('click', () => {
    clearInterval(timer);
    if (workMode.checked){
      totalSeconds = totalSeconds;
    }
    clearInterval(timer)

    timer = setInterval(countDown, 1000);
    if(restMode.checked){
       totalSeconds = restSeconds;
      }
      clearInterval(timer);
    timer = setInterval(countDown, 1000);
  });

  stopButton.addEventListener('click', () => {
    clearInterval(timer);
  });

  resetButton.addEventListener('click', () => {
    if(workMode.checked){
      totalSeconds = 1500;
      time.innerHTML = "25:00";
    } else if(restMode.checked){
      totalSeconds = restSeconds;
      time.innerHTML = "05:00";
      }
   });
};
pomodoro();
