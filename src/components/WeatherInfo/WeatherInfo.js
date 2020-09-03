import React from "react";
import NextPrevBTN from "./Buttons/NextPrevBTN";
import DeleteUpdateBTN from "./Buttons/DeleteUpdateBTN";

const WeatherInfo = ({
  currentCityToShow,
  cityTimeAndDateInfo,
  weatherInfo,
  handleShowPreviousCityOnClick,
  handleShowNextCityOnClick,
  handleUpdateCityWeatherAndTimeOnClick,
  handleDeleteCityFromListOnClick,
}) => {
  const cityWeather = weatherInfo[currentCityToShow];
  const cityTime = cityTimeAndDateInfo[currentCityToShow];
  const temp = Math.floor(cityWeather.main.temp - 273);
  return (
    <div>
      <h1>{currentCityToShow}</h1>
      <h2>{temp}°C</h2>
      <NextPrevBTN
        nextBtn={handleShowNextCityOnClick}
        prevBtn={handleShowPreviousCityOnClick}
      />
      <DeleteUpdateBTN
        updateBtn={handleUpdateCityWeatherAndTimeOnClick}
        deleteBtn={handleDeleteCityFromListOnClick}
      />
    </div>
  );
};

export default WeatherInfo;
