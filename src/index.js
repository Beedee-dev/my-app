function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = response.data.city;
  let currentTemp = document.querySelector(".current-temperature-value");
  currentTemp.innerHTML = `${temperature}`;

  let apiKey = "125o5b33c50ca0dbaft5f82655f06df4";
  let city = document.querySelector("#search-input");
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
