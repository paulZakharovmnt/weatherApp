import React, { useState } from "react";
import Settings from "./Settings/Settings";
import Search from "./Search/Search";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCog } from "@fortawesome/free-solid-svg-icons";

const Header = ({
  handleAddCityWeatherAndDateOnClick,
  toggleChangeTimeFormatOnClick,
  toggleChangeDegreesFormatOnClick,
  toggleAutoUpdateWeatherWhenChangingCityOnClick,
  autoUpdateWeather,
  show24hTime,
  showFahrenheit,
}) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const toggleShowSettingsOnClick = () => {
    setShowSettings(!showSettings);
  };

  const toggleShowSearchBarOnClick = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <div className="header">
      <div className="header-container">
        <FontAwesomeIcon
          className="add-btn"
          icon={faPlus}
          size="3x"
          onClick={toggleShowSearchBarOnClick}
        />
        {showSearchBar && (
          <Search
            handleAddCityWeatherAndDateOnClick={
              handleAddCityWeatherAndDateOnClick
            }
          />
        )}
        <FontAwesomeIcon
          className="settings-btn"
          icon={faCog}
          size="3x"
          onClick={toggleShowSettingsOnClick}
        />
      </div>

      {showSettings && (
        <Settings
          toggleAutoUpdateWeatherWhenChangingCityOnClick={
            toggleAutoUpdateWeatherWhenChangingCityOnClick
          }
          toggleChangeTimeFormatOnClick={toggleChangeTimeFormatOnClick}
          toggleChangeDegreesFormatOnClick={toggleChangeDegreesFormatOnClick}
          autoUpdateWeather={autoUpdateWeather}
          show24hTime={show24hTime}
          showFahrenheit={showFahrenheit}
          toggleShowSettingsOnClick={toggleShowSettingsOnClick}
        />
      )}
    </div>
  );
};

export default Header;
