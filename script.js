
function pomodoro(){

  const time = document.getElementById("timer");
  let workSeconds = 1500;
  let totalSeconds = 1500;
  let restSeconds = 300;
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const resetButton = document.getElementById("reset");
  const workMode = document.getElementById("workId");
  const restMode = document.getElementById("restId");

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
      console.log("Work mode")
      if(workMode.checked){
        clearInterval(timer);
       // time.innerHTML = "25:00";
        totalSeconds = workSeconds;
      }
    }); 
  
    restMode.addEventListener('click', () => {
      console.log("Rest mode")
      if(restMode.checked){
      clearInterval(timer);
     // time.innerHTML = "05:00";
      totalSeconds = restSeconds;
      }
    }); 
  };

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

  //start button issue one: doesn't switch time back from break mode unless reset is pressed

  // ex. "work setting: start - counts down, click rest setting: switches time from 25 to 5, counts down
  // click work setting again: stays at 5:00 unless reset is pressed"

  startButton.addEventListener('click', () => {
    clearInterval(timer);
     if (workMode.checked)
      totalSeconds = workSeconds;
     if(restMode.checked)
       totalSeconds = restSeconds;
      clearInterval(timer)
      timer = setInterval(countDown, 1000); 
  });

  stopButton.addEventListener('click', () => {
    clearInterval(timer);
  });

  resetButton.addEventListener('click', () => {
    if(workMode.checked){
      totalSeconds = workSeconds;
      time.innerHTML = "25:00";
    } else if(restMode.checked){
      totalSeconds = restSeconds;
      time.innerHTML = "05:00";
      }
   });
};
pomodoro();