import React from "react";
import getCurrentCityDate from "../../core/getCurrentCityDate";

const WeatherInfo = ({
  currentCityToShow,
  weatherInfo,
  showFahrenheit,
  show24hTime,
}) => {
  const cityWeather = weatherInfo[currentCityToShow];
  const country = cityWeather.coords.country.toUpperCase();
  const condition = cityWeather.weather.description.description;
  const weatherImage = cityWeather.weather.description.icon;
  const imageSrc = `http://openweathermap.org/img/wn/${weatherImage}@2x.png`;

  let temp = Math.floor(cityWeather.weather.temp - 273);
  let tempType = "°C";
  let cityTime = cityWeather.timeAndDate.time12;
  let cityDate;

  if (showFahrenheit) {
    temp = Math.floor((temp / 5) * 9 + +32);
    tempType = "°F";
  }

  if (show24hTime) {
    cityTime = cityWeather.timeAndDate.time24;
  }

  if (cityWeather.timeAndDate.date !== undefined) {
    cityDate = getCurrentCityDate(cityWeather.timeAndDate.date);
  }

  return (
    <div className="full-info">
      <div className="location">
        {currentCityToShow}, {country}
      </div>
      <div className="date">{cityDate}</div>
      <p>Last update time: {cityTime} (local)</p>

      <div className="weather-condition">
        <div className="temp">
          {temp}
          {tempType}
        </div>
        <div className="weather-description">{condition}</div>
        <div className="more-info">
          <img alt="" src={imageSrc} />
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
