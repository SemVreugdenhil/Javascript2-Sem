// API_KEY wordt geladen vanuit config.js (zie config.example.js voor instructies)
let weatherInfo = document.querySelector("#weather-info");

const showWeather = (data) => {
  console.log(data);
  weatherInfo.innerHTML += `
      <h2>name: ${data.name} </h2>
        <h2>Temperatuur: ${Math.round(data.main.temp)} </h2>
        <h2>Gevoelstemperatuur: ${Math.round(data.main.feels_like)} </h2>
        <h2>Luchtvochtigheid: ${data.main.humidity} </h2>
        <h2>Windsnelheid: ${data.wind.speed} </h2>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png">
      `;
  // Zet de weerinformatie van data om naar HTML in #weather-info
  // Toon: stadsnaam, weer-icon, temperatuur, gevoelstemperatuur, luchtvochtigheid en windsnelheid
  // Rond de temperaturen af met Math.round()
  // Gebruik console.log(data) om de structuur te bekijken
  // De icon-URL is: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
};

const getWeather = (city) => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric",
  )
    .then((r) => r.json())
    .then((data) => {
      console.log(data); // Bekijk de structuur
      showWeather(data);
    });
  // Doe een fetch naar de OpenWeather API met city en API_KEY
  // De URL is: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  // Gebruik console.log(data) om de structuur te bekijken
  // Roep showWeather(data) aan met de response
};
let cityInput = document.querySelector("#city-input");
let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = document.getElementById('city-input').value;
  getWeather(city);
  city.value = "";
});

// Voeg hier een submit event listener toe aan #search-form
// Gebruik e.preventDefault() zodat de pagina niet herlaadt
// Lees de waarde uit #city-input en roep getWeather(city) aan
// Maak de input daarna leeg
