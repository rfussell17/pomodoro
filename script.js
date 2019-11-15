//function for pomodoro timer

function pomodoro(){

  //time variables needed for timer, buttons and radio toggle

  const time = document.getElementById("timer");
  let minutes = 24;
  let seconds = 60;
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const resetButton = document.getElementById("reset");
  const workMode = document.getElementById("workId");
  const restMode = document.getElementById("restId");

  //displays digits used in countDown function and displays in innerHTML 

  function timerDisplay(){
    let refactoredMinutes;
    let refactoredSeconds;

    refactoredMinutes = minutes < 10 ? refactoredMinutes = `0${minutes}` : refactoredMinutes = `${minutes}`;
    refactoredSeconds = seconds < 10 ? refactoredSeconds = `0${seconds}` : refactoredSeconds = `${seconds}`;

    time.innerHTML = `${refactoredMinutes}:${refactoredSeconds}`;
  };

  //function to calculate + display digits counting down

  function countDown(){
    seconds --;
    if(seconds == 0){
      seconds = 59;
      minutes--;
    } 
  timerDisplay();
  if(seconds == 0 && minutes == 0){
    playSound();
    }
  };

  //button event functions

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
    refactoredMinutes = 25;
    refactoredSeconds = 0;
    time.innerHTML = `${refactoredMinutes}:0${refactoredSeconds}`;
  });

  //radio buttons for study and rest timer toggle 

  workMode.addEventListener('click', () => {
    console.log("Work mode")
  }); 

  restMode.addEventListener('click', () => {
    console.log("Rest mode")
    time
  }); 

  //placeholder for timer sound when countdown reaches 00:00

  function playSound(){
      alert("timer sound");
     }
  }

pomodoro();