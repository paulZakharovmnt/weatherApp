const weatherApi = {
  key: "21de0ba639198264b5c2844b14971f13",
  base: "https://api.openweathermap.org/data/2.5/",
};
const fetchCurrentUsersGeoLocWeather = async (cityCoord) => {
  return await fetch(
    `${weatherApi.base}weather?lat=${cityCoord.lat}&lon=${cityCoord.long}&appid=${weatherApi.key}`
  ).then((resp) => resp.json());
};

export default fetchCurrentUsersGeoLocWeather;
