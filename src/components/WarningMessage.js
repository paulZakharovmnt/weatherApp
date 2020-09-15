import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const WarningMessage = () => {
  return (
    <div className="no-cities-message">
      <FontAwesomeIcon
        className="warning-btn"
        icon={faExclamationTriangle}
        size="4x"
      />
      <p>
        If your app is not loading you current city weather, and can't load ANY
        other city by using search - please, turn off your ad-block. There is no
        Ads in this small application. Thank you :)
      </p>
    </div>
  );
};

export default WarningMessage;
