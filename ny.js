let days_to_count = document.querySelector("#days_to_count");
let hours_to_count = document.querySelector("#hours_to_count");
let mins_to_count = document.querySelector("#mins_to_count");
let seconds_to_count = document.querySelector("#seconds_to_count");
let count_down = document.querySelector("#count_down");
let the_year = document.querySelector("#the_year");
let load = document.querySelector("#load");

let curr_year = new Date().getFullYear();
let new_year = new Date(`Jan 01 ${curr_year + 1} 00:00:00`);

the_year.innerHTML = curr_year + 1;

function CountDown_Update() {
  let currentTime = new Date();
  let difference = new_year - currentTime;
  console.log(difference);

  let days = Math.floor(difference / 1000 / 60 / 60 / 24);
  let hours = Math.floor(difference / 1000 / 60 / 60) % 24;
  let mins = Math.floor(difference / 1000 / 60) % 60;
  let seconds = Math.floor(difference / 1000) % 60;

  days_to_count.innerHTML = days;
  hours_to_count.innerHTML = hours < 10 ? "0" + hours : hours;
  mins_to_count.innerHTML = mins < 10 ? "0" + mins : mins;
  seconds_to_count.innerHTML = seconds < 10 ? "0" + seconds : seconds;
}

setTimeout(() => {
  load.remove();
  count_down.style.display = "flex";
}, 1000);
setInterval(CountDown_Update, 1000);
