import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./WeatherInfo.css";
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
    <div className="weather-info">
      <div className="general-info-container">
        <FontAwesomeIcon
          className="faChevronLeft"
          icon={faChevronLeft}
          size="4x"
          onClick={handleShowPreviousCityOnClick}
        />
        <div>
          <h1>{currentCityToShow}</h1>
          <h2>{temp}°C</h2>
        </div>

        <FontAwesomeIcon
          className="faChevronRight"
          icon={faChevronRight}
          size="4x"
          onClick={handleShowNextCityOnClick}
        />
      </div>
      {/* <FontAwesomeIcon
        className="faChevronLeft"
        icon={faChevronLeft}
        size="3x"
        onClick={handleShowPreviousCityOnClick}
      />
      <h1>{currentCityToShow}</h1>
      <h2>{temp}°C</h2>
      <FontAwesomeIcon
        className="faChevronRight"
        icon={faChevronRight}
        size="3x"
        onClick={handleShowNextCityOnClick}
      /> */}

      {/* <button onClick={handleShowPreviousCityOnClick}>Prev</button>
      <button onClick={handleShowNextCityOnClick}>Next</button> */}
      {/* <NextPrevBTN
        nextBtn={handleShowNextCityOnClick}
        prevBtn={handleShowPreviousCityOnClick}
      /> */}
      <DeleteUpdateBTN
        updateBtn={handleUpdateCityWeatherAndTimeOnClick}
        deleteBtn={handleDeleteCityFromListOnClick}
      />
    </div>
  );
};

export default WeatherInfo;
