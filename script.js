

function pomodoro(){

  const time = document.getElementById("timer");

  let totalSeconds = 1500;
  let restSeconds = 300;
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const resetButton = document.getElementById("reset");
  const workMode = document.getElementById("workId");
  const restMode = document.getElementById("restId");
  
  function timerDisplay(){
    let refactoredMinutes;
    let refactoredSeconds;

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds - minutes * 60;

    restMinutes = minutes / 5;
    
    refactoredMinutes = minutes < 10 ? refactoredMinutes = `0${minutes}` : refactoredMinutes = `${minutes}`;
    refactoredSeconds = seconds < 10 ? refactoredSeconds = `0${seconds}` : refactoredSeconds = `${seconds}`;

    workMode.addEventListener('click', () => {
      console.log("Work mode")
      totalSeconds = 1500;
    }); 
  
    restMode.addEventListener('click', () => {
      console.log("Rest mode")
      totalSeconds = restSeconds;
    }); 
  
    if(workMode){
      time.innerHTML = `${minutes}:${seconds}`;
    } else if (restMode){
      time.innerHTML = `${minutes}:${seconds}`;
    }
  };

  function countDown(){
    totalSeconds --;
    timerDisplay();
      if(totalSeconds == 0){
        playSound();
      }
    };

  workMode.addEventListener('click', () => {
    console.log("Work mode")
    totalSeconds = 1500;
  }); 

  restMode.addEventListener('click', () => {
    console.log("Rest mode")
    totalSeconds = restSeconds;
  }); 

  startButton.addEventListener('click', () => {
    timer = setInterval(countDown, 1000);
    console.log("Start")
  });

  stopButton.addEventListener('click', () => {
    console.log("Stop");
    timer = clearInterval(timer);
  });

  resetButton.addEventListener('click', () => {
    console.log("Reset");
    timer = clearInterval(timer);
    if(workMode.checked){
      totalSeconds = 1500;
      time.innerHTML = `${totalSeconds}`;
    } else if(restMode.checked){
      totalSeconds = 300;
      time.innerHTML = `${totalSeconds}`;
    }
  });

  function playSound(){
      alert("timer sound");
     }
  }

pomodoro();