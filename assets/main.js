const weddingDate = new Date("2026-08-06T12:30:00+05:00").getTime();

const fields = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds")
};

function updateCountdown() {
  const distance = Math.max(0, weddingDate - Date.now());
  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance % 86400000) / 3600000);
  const minutes = Math.floor((distance % 3600000) / 60000);
  const seconds = Math.floor((distance % 60000) / 1000);

  fields.days.textContent = days;
  fields.hours.textContent = hours;
  fields.minutes.textContent = minutes;
  fields.seconds.textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);
