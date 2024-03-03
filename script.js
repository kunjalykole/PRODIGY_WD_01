// script.js
const display = document.querySelector('.display');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');

let startTime;
let elapsedTime = 0;
let intervaId;
let isRunning = false;

// Function to format the time
function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor((time % 60) / 10);
  const milliseconds = time % 10;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds}`;
}

// Function to start the stopwatch
function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    intervaId = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      display.textContent = formatTime(elapsedTime);
    }, 10);
    isRunning = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
  }
}

// Function to stop the stopwatch
function stop() {
  if (isRunning) {
    clearInterval(intervaId);
    isRunning = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;
  }
}

// Function to reset the stopwatch
function reset() {
  if (!isRunning) {
    elapsedTime = 0;
    display.textContent = formatTime(elapsedTime);
    clearInterval(intervaId);
  }
}

// Event listeners
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
