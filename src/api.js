import axios from "../node_modules/axios/index";
const loading = document.getElementById("loading");
const mainPage = document.getElementById("mainPage");
const notFound = document.getElementById("notFound");

let location = "semarang";

function displayLoading() {
  loading.style.setProperty("visibility", "visible");
  mainPage.style.setProperty("visibility", "hidden");
  notFound.style.setProperty("visibility", "hidden");
  setTimeout(() => {
    loading.style.setProperty("visibility", "hidden");
  }, 6000);
}

function hideLoading() {
  loading.style.setProperty("visibility", "hidden");
  mainPage.style.setProperty("visibility", "visible");
  notFound.style.setProperty("visibility", "hidden");
}

export async function getWeather() {
  displayLoading();
  const apiKey = "P8RKF8G3M362X3ZYFCMZ62HPR";
  let response = await axios({
    method: "get",
    url:
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      location +
      "?unitGroup=metric&key=" +
      apiKey +
      "&contentType=json",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      hideLoading();
      console.log(response);
      return {
        resolvedAddress: response.data.resolvedAddress,
        tempNow: response.data.currentConditions.temp,
        weatherIconNow: response.data.currentConditions.icon,
        dateNow: response.data.days[0].datetime,
        timeNow: response.data.currentConditions.datetime,
        conditionNow: response.data.currentConditions.conditions,
        feelsLike: response.data.currentConditions.feelslike,
        windSpeed: response.data.currentConditions.windspeed,
        humidity: response.data.currentConditions.humidity,
        precipitation: response.data.currentConditions.precipprob,
        uvIndex: response.data.currentConditions.uvindex,
        day2: response.data.days[1].datetime,
        day3: response.data.days[2].datetime,
        day4: response.data.days[3].datetime,
        day5: response.data.days[4].datetime,
        day6: response.data.days[5].datetime,
        day7: response.data.days[6].datetime,
        weatherIcon1day: response.data.days[0].icon,
        temp1day: response.data.days[0].temp,
        humidity1day: response.data.days[0].humidity,
        weatherIcon2day: response.data.days[1].icon,
        temp2day: response.data.days[1].temp,
        humidity2day: response.data.days[1].humidity,
        weatherIcon3day: response.data.days[2].icon,
        temp3day: response.data.days[2].temp,
        humidity3day: response.data.days[2].humidity,
        weatherIcon4day: response.data.days[3].icon,
        temp4day: response.data.days[3].temp,
        humidity4day: response.data.days[3].humidity,
        weatherIcon5day: response.data.days[4].icon,
        temp5day: response.data.days[4].temp,
        humidity5day: response.data.days[4].humidity,
        weatherIcon6day: response.data.days[5].icon,
        temp6day: response.data.days[5].temp,
        humidity6day: response.data.days[5].humidity,
        weatherIcon7day: response.data.days[6].icon,
        temp7day: response.data.days[6].temp,
        humidity7day: response.data.days[6].humidity,
      };
    })
    .catch((error) => {
      console.log(error);
      loading.style.setProperty("visibility", "hidden");
      notFound.style.setProperty("visibility", "visible");
    });
  return response;
}

export function getSearch(searchValue) {
  location = searchValue;
}
