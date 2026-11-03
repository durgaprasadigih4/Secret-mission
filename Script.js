window.startMission = function () {
  const button = document.getElementById("startBtn");
  const countdown = document.getElementById("countdown");
  const status = document.getElementById("status");
  const reveal = document.getElementById("reveal");

  button.disabled = true;
  button.textContent = "MISSION IN PROGRESS...";

  let time = 3;
  countdown.textContent = time;

  const timer = setInterval(function () {
    time--;

    if (time > 0) {
      countdown.textContent = time;
    } else {
      clearInterval(timer);

      countdown.textContent = "🚀";
      status.textContent = "MISSION UNLOCKED!";
      button.style.display = "none";
      reveal.classList.remove("hidden");

      document.querySelector(".lock").textContent = "🔓";
    }
  }, 1000);
};
