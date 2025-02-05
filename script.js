// Задание 1
const clickCounterBtn = document.getElementById("clickCounterBtn");
const clickCounterText = document.getElementById("clickCounterText");
let clickCount = 0;

clickCounterBtn.addEventListener("click", () => {
  clickCount++;
  clickCounterText.textContent = `Количество кликов: ${clickCount}`;
  if (clickCount >= 15) {
    clickCounterBtn.disabled = true;
    clickCounterText.textContent =
      "Вы достигли максимального количества кликов!";
  }
});

// Задание 2
const countdownText = document.getElementById("countdownText");
const resetCountdownBtn = document.getElementById("resetCountdownBtn");
let countdown = 10;
let countdownInterval;

function startCountdown() {
  countdown = 10;
  countdownText.textContent = `Осталось времени: ${countdown}`;
  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    countdown--;
    if (countdown <= 0) {
      clearInterval(countdownInterval);
      countdownText.textContent = "Время вышло!";
    } else {
      countdownText.textContent = `Осталось времени: ${countdown}`;
    }
  }, 1000);
}

resetCountdownBtn.addEventListener("click", startCountdown);

startCountdown();

// Задание 3
const timerText = document.getElementById("timerText");
const startTimerBtn = document.getElementById("startTimerBtn");
const stopTimerBtn = document.getElementById("stopTimerBtn");
const resetTimerBtn = document.getElementById("resetTimerBtn");

let timer = 0;
let timerInterval;

startTimerBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timer++;
    timerText.textContent = `Секунд прошло: ${timer}`;
  }, 1000);
  startTimerBtn.disabled = true;
  stopTimerBtn.disabled = false;
});

stopTimerBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  startTimerBtn.disabled = false;
  stopTimerBtn.disabled = true;
});

resetTimerBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timer = 0;
  timerText.textContent = "Секунд прошло: 0";
  startTimerBtn.disabled = false;
  stopTimerBtn.disabled = true;
});
