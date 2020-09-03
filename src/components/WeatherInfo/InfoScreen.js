import React from "react";
import WeatherInfo from "./WeatherInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRedoAlt,
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./WeatherInfo.css";

const InfoScreen = ({
  currentCityToShow,
  cityTimeAndDateInfo,
  weatherInfo,
  handleShowPreviousCityOnClick,
  handleShowNextCityOnClick,
  handleUpdateCityWeatherAndTimeOnClick,
  handleDeleteCityFromListOnClick,
}) => {
  return (
    <div className="weather-info">
      <div className="general-info-container">
        <FontAwesomeIcon
          className="nav-btn faChevronLeft"
          icon={faChevronLeft}
          size="4x"
          onClick={handleShowPreviousCityOnClick}
        />
        <WeatherInfo
          currentCityToShow={currentCityToShow}
          cityTimeAndDateInfo={cityTimeAndDateInfo}
          weatherInfo={weatherInfo}
        />

        <FontAwesomeIcon
          className=" nav-btn faChevronRight"
          icon={faChevronRight}
          size="4x"
          onClick={handleShowNextCityOnClick}
        />
      </div>

      <div className="deleteUpdate-container">
        <FontAwesomeIcon
          className="delete-btn"
          icon={faTimes}
          size="4x"
          onClick={handleDeleteCityFromListOnClick}
        />
        <FontAwesomeIcon
          className="update-btn"
          icon={faRedoAlt}
          size="3x"
          onClick={handleUpdateCityWeatherAndTimeOnClick}
        />
      </div>
    </div>
  );
};

export default InfoScreen;