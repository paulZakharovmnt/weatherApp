const getNewCityWeatherObject = (result, weatherInfo) => {
  const newWeatherInfoCities = { ...weatherInfo };
  newWeatherInfoCities[result.name] = result;
  return newWeatherInfoCities;
};

export default getNewCityWeatherObject;
