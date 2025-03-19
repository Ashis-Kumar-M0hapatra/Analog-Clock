const hoursTime = document.getElementById('hour')
const minutesTime = document.getElementById('minute')
const secondsTime = document.getElementById('second')

setInterval(() => {
  let date = new Date();
  hour = date.getHours();
  minute = date.getMinutes();
  seconds = date.getSeconds();
  hourRotation = 30 * hour + minute / 2;
  minuteRotation = 6 * minute;
  secondRotation = 6 * seconds;

  hoursTime.style.transform = `rotate(${hourRotation}deg)`;
  minutesTime.style.transform = `rotate(${minuteRotation}deg)`;
  secondsTime.style.transform = `rotate(${secondRotation}deg)`;
}, 1000);
