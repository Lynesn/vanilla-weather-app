function formatDate(timestamp){
  let date = new Date(timestamp);
  
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
function displayTemperature(response){
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt*1000);
  iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

let apiKey = "8c43a9396234aa25ef4906a9eda3077c";
let city = "Kampala";
let apiEndPoint = "https://api.openweathermap.org/data";
let apiUrl = `${apiEndPoint}/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);


// function searchCity(city) {
//   let apiKey = "8c43a9396234aa25ef4906a9eda3077c";
//   let unit = "metric";
//   let apiEndPoint = "https://api.openweathermap.org/data";
//   let apiUrl = `${apiEndPoint}/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
//   axios.get(apiUrl).then(showWeather);
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   let city = document.querySelector("#city-input").value;
//   searchCity(city);
// }
// let form = document.querySelector("#search_form");
// form.addEventListener("submit", handleSubmit);

// searchCity("Paris");

// // current location
// function showCurrentTemperature(position) {
//   let units = "metric";
//   let apiKey = "8c43a9396234aa25ef4906a9eda3077c";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;
//   axios.get(apiUrl).then(showWeather);
// }

// function getCurrentLocation(event) {
//   event.preventDefault();
//   navigator.geolocation.getCurrentPosition(showCurrentTemperature);
// }
// let currentLocationButton = document.querySelector("#current-button");
// currentLocationButton.addEventListener("click", getCurrentLocation);
