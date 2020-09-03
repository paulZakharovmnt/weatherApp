import React from "react";

const WeatherInfo = ({
  currentCityToShow,
  cityTimeAndDateInfo,
  weatherInfo,
}) => {
  const cityWeather = weatherInfo[currentCityToShow];
  const cityTime = cityTimeAndDateInfo[currentCityToShow];
  const temp = Math.floor(cityWeather.main.temp - 273);
  const country = cityWeather.sys.country;
  return (
    <div>
      <div className="location">
        {currentCityToShow}, {country}
      </div>

      <div className="temp">{temp}°C</div>
    </div>
  );
};

export default WeatherInfo;
