import React from "react";
import setupDateAndTimeObject from "../../core/setupDateAndTimeObject";

const WeatherInfo = ({
  currentCityToShow,
  cityTimeAndDateInfo,
  weatherInfo,
}) => {
  const cityWeather = weatherInfo[currentCityToShow];
  const temp = Math.floor(cityWeather.main.temp - 273);
  const country = cityWeather.sys.country;
  const condition = cityWeather.weather[0];
  const weatherImage = cityWeather.weather[0].icon;
  const imageSrc = `http://openweathermap.org/img/wn/${weatherImage}@2x.png`;
  let cityTimeDate;
  if (cityTimeAndDateInfo[currentCityToShow] !== undefined) {
    cityTimeDate = setupDateAndTimeObject(
      cityTimeAndDateInfo[currentCityToShow]
    );
  }
  console.log(cityTimeDate);

  return (
    <div>
      <div className="location">
        {currentCityToShow}, {country}
      </div>
      <div className="date">
        {cityTimeDate.name} {cityTimeDate.day} {cityTimeDate.month}{" "}
        {cityTimeDate.year}
      </div>

      <div className="weather-condition">
        <div className="temp">{temp}°C</div>
        <div className="weather-description">{condition.description}</div>
        <div className="more-info">
          <img src={imageSrc} />
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
