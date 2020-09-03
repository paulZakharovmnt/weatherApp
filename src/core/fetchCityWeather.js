const weatherApi = {
  key: "21de0ba639198264b5c2844b14971f13",
  base: "https://api.openweathermap.org/data/2.5/",
};
const fetchCityWeather = async (cityCoord) => {
  let cityWeather;
  await fetch(
    `${weatherApi.base}weather?q=${cityCoord.city},${cityCoord.country}&appid=${weatherApi.key}`
  )
    .then((resp) => resp.json())
    .then((result) => {
      cityWeather = result;
    })
    .catch((err) => console.log(err));

  return cityWeather;
};

export default fetchCityWeather;
