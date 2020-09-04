import React from "react";
import setupDateAndTimeObject from "../../core/setupDateAndTimeObject";
import getDayType from "../../core/getDayType";

const WeatherInfo = ({
  currentCityToShow,
  cityTimeAndDateInfo,
  weatherInfo,
  showFahrenheit,
  show24hTime,
  changeDayTime,
}) => {
  const cityWeather = weatherInfo[currentCityToShow];
  let temp = Math.floor(cityWeather.main.temp - 273);
  let tempType = "°C";
  const country = cityWeather.sys.country;
  const condition = cityWeather.weather[0];
  const weatherImage = cityWeather.weather[0].icon;
  const imageSrc = `http://openweathermap.org/img/wn/${weatherImage}@2x.png`;
  // const dayType = getDayType(cityTimeAndDateInfo[currentCityToShow].time_24);
  // changeDayTime(dayType);
  let cityTime = cityTimeAndDateInfo[currentCityToShow].time_12;
  let cityDate;
  if (showFahrenheit) {
    temp = Math.floor((temp / 5) * 9 + +32);
    tempType = "°F";
  }
  if (show24hTime) {
    cityTime = cityTimeAndDateInfo[currentCityToShow].time_24;
  }
  if (cityTimeAndDateInfo[currentCityToShow] !== undefined) {
    cityDate = setupDateAndTimeObject(cityTimeAndDateInfo[currentCityToShow]);
  }

  return (
    <div className="full-info">
      <div className="location">
        {currentCityToShow}, {country}
      </div>
      <div className="date">
        {cityDate.name} {cityDate.day} {cityDate.month} {cityDate.year}
      </div>
      <p>Last update time: {cityTime} (local)</p>

      <div className="weather-condition">
        <div className="temp">
          {temp}
          {tempType}
        </div>
        <div className="weather-description">{condition.description}</div>
        <div className="more-info">
          <img src={imageSrc} />
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
