const cityName = document.getElementById("cityName");
const tempNow = document.getElementById("tempNow");
const weatherIconNow = document.getElementById("weatherIconNow");
const dateNow = document.getElementById("dateNow");
const conditionNow = document.getElementById("conditionNow");
const feelsLikeNow = document.getElementById("feelsLikeNow");
const windSpeed = document.getElementById("windSpeed");
const humidity = document.getElementById("humidity");
const precipitation = document.getElementById("precipitation");
const uvIndex = document.getElementById("uvIndex");
const day1 = document.getElementById("day1");
const day2 = document.getElementById("day2");
const day3 = document.getElementById("day3");
const day4 = document.getElementById("day4");
const day5 = document.getElementById("day5");
const day6 = document.getElementById("day6");
const day7 = document.getElementById("day7");
const weatherIcon1Day = document.getElementById("weatherIcon1Day");
const temp1Day = document.getElementById("temp1Day");
const humidity1Day = document.getElementById("humidity1Day");
const weatherIcon2Day = document.getElementById("weatherIcon2Day");
const temp2Day = document.getElementById("temp2Day");
const humidity2Day = document.getElementById("humidity2Day");
const weatherIcon3Day = document.getElementById("weatherIcon3Day");
const temp3Day = document.getElementById("temp3Day");
const humidity3Day = document.getElementById("humidity3Day");
const weatherIcon4Day = document.getElementById("weatherIcon4Day");
const temp4Day = document.getElementById("temp4Day");
const humidity4Day = document.getElementById("humidity4Day");
const weatherIcon5Day = document.getElementById("weatherIcon5Day");
const temp5Day = document.getElementById("temp5Day");
const humidity5Day = document.getElementById("humidity5Day");
const weatherIcon6Day = document.getElementById("weatherIcon6Day");
const temp6Day = document.getElementById("temp6Day");
const humidity6Day = document.getElementById("humidity6Day");
const weatherIcon7Day = document.getElementById("weatherIcon7Day");
const temp7Day = document.getElementById("temp7Day");
const humidity7Day = document.getElementById("humidity7Day");
const searchButton = document.getElementById("submitSearch");
const searchInput = document.getElementById("search");

import { getWeather, getSearch } from "./api.js";
import { format } from "../node_modules/date-fns/index.js";
import partlyCloudyDay from "./img/partly-cloudy-day.png";
import partlyCloudyNight from "./img/partly-cloudy-night.png";
import clearDay from "./img/clear-day.png";
import clearNight from "./img/clear-night.png";
import cloudy from "./img/cloudy.png";
import rain from "./img/rain.png";

export default async function getCityName() {
  const weatherData = await getWeather();
  const formatDate = format(weatherData.dateNow, "EEEE, MMMM d yyyy");
  function formatDay(day) {
    return format(day, "EEEE");
  }

  cityName.textContent = weatherData.resolvedAddress;
  tempNow.textContent = weatherData.tempNow + "°C";
  dateNow.textContent = formatDate + " | " + weatherData.timeNow.slice(0, -3);
  conditionNow.textContent = weatherData.conditionNow;
  feelsLikeNow.textContent = "Feels Like " + weatherData.feelsLike + "°C";
  windSpeed.textContent = weatherData.windSpeed + " m/s";
  humidity.textContent = weatherData.humidity + "%";
  precipitation.textContent = weatherData.precipitation + "%";
  uvIndex.textContent = weatherData.uvIndex;
  day1.textContent = formatDay(weatherData.dateNow);
  day2.textContent = formatDay(weatherData.day2);
  day3.textContent = formatDay(weatherData.day3);
  day4.textContent = formatDay(weatherData.day4);
  day5.textContent = formatDay(weatherData.day5);
  day6.textContent = formatDay(weatherData.day6);
  day7.textContent = formatDay(weatherData.day7);
  temp1Day.textContent = weatherData.temp1day + "°C";
  humidity1Day.textContent = weatherData.humidity1day + "%";
  temp2Day.textContent = weatherData.temp2day + "°C";
  humidity2Day.textContent = weatherData.humidity2day + "%";
  temp3Day.textContent = weatherData.temp3day + "°C";
  humidity3Day.textContent = weatherData.humidity3day + "%";
  temp4Day.textContent = weatherData.temp4day + "°C";
  humidity4Day.textContent = weatherData.humidity4day + "%";
  temp5Day.textContent = weatherData.temp5day + "°C";
  humidity5Day.textContent = weatherData.humidity5day + "%";
  temp6Day.textContent = weatherData.temp6day + "°C";
  humidity6Day.textContent = weatherData.humidity6day + "%";
  temp7Day.textContent = weatherData.temp7day + "°C";
  humidity7Day.textContent = weatherData.humidity7day + "%";

  //weather current icon
  if (weatherData.weatherIconNow === "partly-cloudy-day") {
    weatherIconNow.src = partlyCloudyDay;
  } else if (weatherData.weatherIconNow === "partly-cloudy-night") {
    weatherIconNow.src = partlyCloudyNight;
  } else if (weatherData.weatherIconNow === "clear-day") {
    weatherIconNow.src = clearDay;
  } else if (weatherData.weatherIconNow === "clear-night") {
    weatherIconNow.src = clearNight;
  } else if (weatherData.weatherIconNow === "rain") {
    weatherIconNow.src = rain;
  } else {
    weatherIconNow.src = cloudy;
  }

  //weather forecast day 1 icon
  if (weatherData.weatherIcon1day === "partly-cloudy-day") {
    weatherIcon1Day.src = partlyCloudyDay;
  } else if (weatherData.weatherIcon1day === "partly-cloudy-night") {
    weatherIcon1Day.src = partlyCloudyNight;
  } else if (weatherData.weatherIcon1day === "clear-day") {
    weatherIcon1Day.src = clearDay;
  } else if (weatherData.weatherIcon1day === "clear-night") {
    weatherIcon1Day.src = clearNight;
  } else if (weatherData.weatherIcon1day === "rain") {
    weatherIcon1Day.src = rain;
  } else {
    weatherIcon1Day.src = cloudy;
  }

  //weather forecast day 2 icon
  if (weatherData.weatherIcon2day === "partly-cloudy-day") {
    weatherIcon2Day.src = partlyCloudyDay;
  } else if (weatherData.weatherIcon2day === "partly-cloudy-night") {
    weatherIcon2Day.src = partlyCloudyNight;
  } else if (weatherData.weatherIcon2day === "clear-day") {
    weatherIcon2Day.src = clearDay;
  } else if (weatherData.weatherIcon2day === "clear-night") {
    weatherIcon2Day.src = clearNight;
  } else if (weatherData.weatherIcon2day === "rain") {
    weatherIcon2Day.src = rain;
  } else {
    weatherIcon2Day.src = cloudy;
  }

  //weather forecast day 3 icon
  if (weatherData.weatherIcon3day === "partly-cloudy-day") {
    weatherIcon3Day.src = partlyCloudyDay;
  } else if (weatherData.weatherIcon3day === "partly-cloudy-night") {
    weatherIcon3Day.src = partlyCloudyNight;
  } else if (weatherData.weatherIcon3day === "clear-day") {
    weatherIcon3Day.src = clearDay;
  } else if (weatherData.weatherIcon3day === "clear-night") {
    weatherIcon3Day.src = clearNight;
  } else if (weatherData.weatherIcon3day === "rain") {
    weatherIcon3Day.src = rain;
  } else {
    weatherIcon3Day.src = cloudy;
  }

  //weather forecast day 4 icon
  if (weatherData.weatherIcon4day === "partly-cloudy-day") {
    weatherIcon4Day.src = partlyCloudyDay;
  } else if (weatherData.weatherIcon4day === "partly-cloudy-night") {
    weatherIcon4Day.src = partlyCloudyNight;
  } else if (weatherData.weatherIcon4day === "clear-day") {
    weatherIcon4Day.src = clearDay;
  } else if (weatherData.weatherIcon4day === "clear-night") {
    weatherIcon4Day.src = clearNight;
  } else if (weatherData.weatherIcon4day === "rain") {
    weatherIcon4Day.src = rain;
  } else {
    weatherIcon4Day.src = cloudy;
  }

  //weather forecast day 5 icon
  if (weatherData.weatherIcon5day === "partly-cloudy-day") {
    weatherIcon5Day.src = partlyCloudyDay;
  } else if (weatherData.weatherIcon5day === "partly-cloudy-night") {
    weatherIcon5Day.src = partlyCloudyNight;
  } else if (weatherData.weatherIcon5day === "clear-day") {
    weatherIcon5Day.src = clearDay;
  } else if (weatherData.weatherIcon5day === "clear-night") {
    weatherIcon5Day.src = clearNight;
  } else if (weatherData.weatherIcon5day === "rain") {
    weatherIcon5Day.src = rain;
  } else {
    weatherIcon5Day.src = cloudy;
  }

  //weather forecast day 6 icon
  if (weatherData.weatherIcon6day === "partly-cloudy-day") {
    weatherIcon6Day.src = partlyCloudyDay;
  } else if (weatherData.weatherIcon6day === "partly-cloudy-night") {
    weatherIcon6Day.src = partlyCloudyNight;
  } else if (weatherData.weatherIcon6day === "clear-day") {
    weatherIcon6Day.src = clearDay;
  } else if (weatherData.weatherIcon6day === "clear-night") {
    weatherIcon6Day.src = clearNight;
  } else if (weatherData.weatherIcon6day === "rain") {
    weatherIcon6Day.src = rain;
  } else {
    weatherIcon6Day.src = cloudy;
  }

  //weather forecast day 7 icon
  if (weatherData.weatherIcon7day === "partly-cloudy-day") {
    weatherIcon7Day.src = partlyCloudyDay;
  } else if (weatherData.weatherIcon7day === "partly-cloudy-night") {
    weatherIcon7Day.src = partlyCloudyNight;
  } else if (weatherData.weatherIcon7day === "clear-day") {
    weatherIcon7Day.src = clearDay;
  } else if (weatherData.weatherIcon7day === "clear-night") {
    weatherIcon7Day.src = clearNight;
  } else if (weatherData.weatherIcon7day === "rain") {
    weatherIcon7Day.src = rain;
  } else {
    weatherIcon7Day.src = cloudy;
  }
}

searchButton.addEventListener("click", () => {
  getSearch(searchInput.value);
  getCityName();
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getSearch(searchInput.value);
    getCityName();
  }
});
