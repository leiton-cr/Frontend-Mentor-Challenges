import data from './data.json' assert {type: 'json'};

const days = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
}

const cardDays = document.querySelector(".card__days");

data.forEach(day => {
  cardDays.innerHTML += `
  <div class="card__day" title="${days[day.day]}: $${day.amount}">
    <div class="card__day-bar" style="height:${day.amount*2}px;"></div>
    <span>${day.day}</span>
  </div>
  `
})