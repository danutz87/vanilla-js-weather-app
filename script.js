const date = document.getElementsByClassName("date");
const location = document.getElementsByClassName("location");
const temp = document.getElementsByClassName("temp");
const weather = document.getElementsByClassName("weather");

const data = {
  api_key: "53378ee977b0303b6607dd81e9c50a3b",
  url_base: "https://api.openweathermap.org/data/2.5/",
};

function fetchWeather(e) {
  if (e.key == "Enter") {
    fetch(
      `${data.url_base}weather?q=${data.query}&units=metric&APPID=${data.api_key}`
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => console.log(data));
  }
}

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
