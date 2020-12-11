const date = document.getElementById("date");
const temperature = document.getElementById("temp");
const city = document.getElementById("location");
const weather = document.getElementById("weather");
const searchBar = document.getElementById("search-bar");

function getWeather(event) {
  if (event.key == "Enter") {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&units=metric&appid=aaa6d0b9b6490881c63b3d3b715ea188`
    )
      .then((response) => response.json())
      .then((data) => {
        date.innerHTML = formatDate();
        temperature.innerText = `${Math.round(data.main.temp)}°C`;
        city.innerText = data.name + ", " + data.sys.country;
        weather.innerText = data.weather[0].main;
        if (data.main.temp > 23) {
          document.getElementById("app").classList.add("warm");
        } else {
          document.getElementById("app").classList.remove("warm");
        }
      });
  }
}

document.addEventListener("keyup", getWeather);

function formatDate() {
  let d = new Date();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = weekdays[d.getDay()];

  let months = [
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
  let month = months[d.getMonth()];

  let day = d.getDate();
  let year = d.getFullYear();

  return `${weekday} ${day} ${month} ${year}`;
}
