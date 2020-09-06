import React from "react";
import setupDateAndTimeObject from "../../core/setupDateAndTimeObject";

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
  let cityTime = cityWeather.timeAndDate.time_12;
  let cityDate;

  if (showFahrenheit) {
    temp = Math.floor((temp / 5) * 9 + +32);
    tempType = "°F";
  }
  if (show24hTime) {
    cityTime = cityWeather.timeAndDate.time_24;
  }
  // if (cityWeather.timeAndDate !== undefined) {
  //   cityDate = setupDateAndTimeObject(cityTimeAndDateInfo[currentCityToShow]);
  // }

  return (
    <div className="full-info">
      <div className="location">
        {currentCityToShow}, {country}
      </div>
      {/* <div className="date">
        {cityDate.name} {cityDate.day} {cityDate.month} {cityDate.year}
      </div>
      <p>Last update time: {cityTime} (local)</p> */}

      <div className="weather-condition">
        <div className="temp">
          {temp}
          {tempType}
        </div>
        <div className="weather-description">{condition}</div>
        <div className="more-info">
          <img src={imageSrc} />
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
