const clockField = document.getElementById("clock");

const updateClock = () => {
  const now = new Date(),
    time =
      now.getHours().toString().padStart(2, 0) +
      ":" +
      now.getMinutes().toString().padStart(2, 0) +
      ":" +
      now.getSeconds().toString().padStart(2, 0);
  clockField.innerText = time;
};

window.setInterval(updateClock, 1000);
updateClock();
