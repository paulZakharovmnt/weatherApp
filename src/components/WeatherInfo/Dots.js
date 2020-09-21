import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Dots = ({ listOfTheCities, currentCityToShow }) => {
  let dotClass = ["circle-dot", "fas fa-circle"];
  let dotClassGlowing = ["circle-dot", "fas fa-circle", "activated"];

  return (
    <div className="dots-container">
      <ul>
        {listOfTheCities.map((cityName) => {
          return (
            <li key={cityName} id={cityName}>
              <FontAwesomeIcon
                className={
                  cityName == currentCityToShow
                    ? dotClassGlowing.join(" ")
                    : dotClass.join(" ")
                }
                icon={faCircle}
                size="1x"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dots;
