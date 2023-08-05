const monthEl = document.querySelector("#month");
const weekdayEl = document.querySelector("#weekday");
const dayNumEl = document.querySelector("#dayNum");
const yearEl = document.querySelector("#year");

const dateNow = new Date();

const month = dateNow.getMonth();
const arrayMonth = [
  "Janvier",
  "Fevrier",
  "Mars",
  "Avril",
  "May",
  "Juin",
  "Juillet",
  "Aout",
  "September",
  "Octobre",
  "November",
  "December",
];
// console.log(arrayMonth[month]);

const weekday = dateNow.getDate();
const arrayWeekday = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];
// console.log(arrayWeekday[weekday]);

const day = dateNow.getDate();
// console.log(day);

const year = dateNow.getFullYear();
// console.log(year);

monthEl.textContent = arrayMonth[month];
weekdayEl.textContent = arrayWeekday[weekday];
dayNumEl.textContent = day < 10 ? "0" + day : day;
yearEl.textContent = year;
