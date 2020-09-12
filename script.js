var dateElement = document.getElementById("date");
var locationElement = document.getElementById("location");
var tempElement = document.getElementById("temp");
var weatherElement = document.getElementById("weather");
var searchBar = document.getElementById("search-bar");

const variables = {
  api_key: "53378ee977b0303b6607dd81e9c50a3b",
  url_base: "https://api.openweathermap.org/data/2.5/",
};

function fetchWeather(e) {
  if (e.key == "Enter") {
    fetch(
      `${variables.url_base}weather?q=${searchBar.value}&units=metric&APPID=${variables.api_key}`
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        dateElement.innerHTML = buildDate();
        locationElement.innerText = data.name;
        tempElement.innerText = data.main.temp;
        weatherElement.innerText = data.weather[0].main;
        if (data.main.temp > 23) {
          document.getElementById("app").classList.add("warm");
        } else {
          document.getElementById("app").classList.remove("warm");
        }
      });
  }
}

document.addEventListener("keyup", fetchWeather);

function buildDate() {
  let d = new Date();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  return `${day} ${date} ${month} ${year}`;
}
