let timer;
let startTime;
let isRunning = false;
let milliseconds = 0;

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    startTime = new Date().getTime() - (milliseconds || 0);
    timer = setInterval(updateStopwatch, 10);
  }
}

function stopStopwatch() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
}

function resetStopwatch() {
  isRunning = false;
  clearInterval(timer);
  milliseconds = 0;
  updateDisplay();
}

function updateStopwatch() {
  const currentTime = new Date().getTime();
  milliseconds = currentTime - startTime;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = formatTime(milliseconds);
}

function formatTime(time) {
  const minutes = Math.floor(time / (60 * 1000));
  const seconds = Math.floor((time % (60 * 1000)) / 1000);
  const milliseconds = time % 1000;
  return (
    formatDigits(minutes) +
    ":" +
    formatDigits(seconds) +
    ":" +
    formatMilliseconds(milliseconds)
  );
}

function formatDigits(value) {
  return value < 10 ? "0" + value : value;
}

function formatMilliseconds(milliseconds) {
  return milliseconds < 10
    ? "00" + milliseconds
    : milliseconds < 100
    ? "0" + milliseconds
    : milliseconds;
}