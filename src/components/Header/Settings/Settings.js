import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Settings = ({ toggleShowSettingsOnClick }) => {
  return (
    <div className="settings-cont">
      <div className="top-block">
        <h2>Settings</h2>
        <FontAwesomeIcon
          icon={faTimes}
          onClick={toggleShowSettingsOnClick}
          className="close-btn"
          size="3x"
        />
      </div>

      <div className="check-box-container">
        <h4>Temperature:</h4>
        <div className="temp">
          <h5>°F</h5>
          <input
            // checked={showCelsium}
            className="checkbox"
            type="checkbox"
            // onChange={changeCelsium}
          />
          <h5>°C</h5>
        </div>
      </div>

      <div className="check-box-container">
        <h4>Auto Update Weather, when switching the cities:</h4>
        <div className="auto-update">
          <h5>Off</h5>
          <input
            // checked={autoUpdateCityInfo}
            className="checkbox"
            type="checkbox"
            // onChange={autoUpdateWeatherHandler}
          />
          <h5>On</h5>
        </div>
      </div>

      <div className="check-box-container">
        <h4>Time format: </h4>
        <div className="time-format">
          <h5>12h</h5>
          <input
            // checked={show24hTime}
            className="checkbox"
            type="checkbox"
            // onChange={changeTimeFromat}
          />
          <h5>24h</h5>
        </div>
      </div>
    </div>
  );
};

export default Settings;
