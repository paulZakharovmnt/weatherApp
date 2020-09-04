import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import "./Main.css";
import fetchCurrentUserCityLocationData from "../core/fetchCurrentUserCityLocationData";
import fetchCityWeather from "../core/fetchCityWeather";
import getNewCityWeatherObject from "../core/getNewCityWeatherObject";
import InfoScreen from "./WeatherInfo/InfoScreen";
import fetchCityTimeAndDateAPI from "../core/fetchCityTimeAndDateAPI";
import getNewCityTimeAndDateObject from "../core/getNewCityTimeAndDateObject";

const Main = () => {
  //****** General State */

  const [currentUseGeoLocation, setCurrentUserGeoLocation] = useState(null);
  const [listOfTheCities, setListOfTheCities] = useState([]);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [cityTimeAndDateInfo, setCityTimeAndDateInfo] = useState(null);
  const [currentCityToShow, setCurrentCityToShow] = useState(null);
  const [currentDayTime, setCurrentDayTime] = useState("default");

  //********* State for settings menu */

  const [showFahrenheit, setShowFahrenheit] = useState(false);
  const [autoUpdateWeather, setAutoUpdateWeather] = useState(false);
  const [show24hTime, setShow24hTime] = useState(false);

  let cityIdToShow = listOfTheCities.indexOf(currentCityToShow);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        setCurrentUserGeoLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }),
      (err) => console.log(err)
    );
  }, []);

  useEffect(() => {
    if (currentUseGeoLocation) {
      fetchCurrentUserCityLocationData(currentUseGeoLocation).then((result) =>
        handleAddCityWeatherAndDateOnClick(result)
      );
    }
  }, [currentUseGeoLocation]);

  useEffect(() => {
    if (autoUpdateWeather) {
      handleUpdateCityWeatherAndTimeOnClick();
    }
  }, [currentCityToShow]);

  const handleAddCityWeatherAndDateOnClick = async (cityInfo) => {
    const cityWeatherResult = await fetchCityWeather(cityInfo);
    const timeAndDateResult = await fetchCityTimeAndDateAPI(cityInfo);

    const newCityWeatherObject = getNewCityWeatherObject(
      cityWeatherResult,
      weatherInfo
    );
    const newCityTimeAndDateObject = getNewCityTimeAndDateObject(
      cityInfo,
      timeAndDateResult,
      cityTimeAndDateInfo
    );
    if (!listOfTheCities.includes(cityWeatherResult.name)) {
      setListOfTheCities([...listOfTheCities, cityWeatherResult.name]);
    }

    setWeatherInfo(newCityWeatherObject);
    setCityTimeAndDateInfo(newCityTimeAndDateObject);
    setCurrentCityToShow(cityWeatherResult.name);
  };

  const handleUpdateCityWeatherAndTimeOnClick = async () => {
    const currentCityToUpdate = {
      city: weatherInfo[currentCityToShow].name,
      country: weatherInfo[currentCityToShow].sys.country,
      lat: weatherInfo[currentCityToShow].coord.lat,
      long: weatherInfo[currentCityToShow].coord.lon,
    };

    handleAddCityWeatherAndDateOnClick(currentCityToUpdate);
  };

  const handleDeleteCityFromListOnClick = () => {
    const newCityList = listOfTheCities.filter((item) => {
      return item !== currentCityToShow;
    });
    setListOfTheCities(newCityList);

    if (listOfTheCities.length > 1) {
      handleShowNextCityOnClick();
    } else {
      setCurrentCityToShow(null);
    }
  };

  const handleShowNextCityOnClick = () => {
    if (cityIdToShow === listOfTheCities.length - 1) {
      setCurrentCityToShow(listOfTheCities[0]);
    } else {
      setCurrentCityToShow(listOfTheCities[cityIdToShow + +1]);
    }
  };

  const handleShowPreviousCityOnClick = () => {
    if (currentCityToShow === listOfTheCities[0]) {
      setCurrentCityToShow(listOfTheCities[listOfTheCities.length - 1]);
    } else {
      setCurrentCityToShow(listOfTheCities[cityIdToShow - 1]);
    }
  };

  const toggleChangeTimeFormatOnClick = () => {
    setShow24hTime(!show24hTime);
  };
  const toggleChangeDegreesFormatOnClick = () => {
    setShowFahrenheit(!showFahrenheit);
  };
  const toggleAutoUpdateWeatherWhenChangingCityOnClick = () => {
    setAutoUpdateWeather(!autoUpdateWeather);
  };

  // const changeDayTime = (dayTime) => {
  //   currentDayTime = dayTime;
  // };

  let mainStyleClass = ["main", currentDayTime];

  return (
    <div className={mainStyleClass.join(" ")}>
      <Header
        handleAddCityWeatherAndDateOnClick={handleAddCityWeatherAndDateOnClick}
        toggleChangeTimeFormatOnClick={toggleChangeTimeFormatOnClick}
        toggleChangeDegreesFormatOnClick={toggleChangeDegreesFormatOnClick}
        toggleAutoUpdateWeatherWhenChangingCityOnClick={
          toggleAutoUpdateWeatherWhenChangingCityOnClick
        }
        showFahrenheit={showFahrenheit}
        show24hTime={show24hTime}
        autoUpdateWeather={autoUpdateWeather}
      />

      {currentCityToShow !== null ? (
        <InfoScreen
          weatherInfo={weatherInfo}
          cityTimeAndDateInfo={cityTimeAndDateInfo}
          currentCityToShow={currentCityToShow}
          showFahrenheit={showFahrenheit}
          show24hTime={show24hTime}
          // changeDayTime={changeDayTime}
          handleShowNextCityOnClick={handleShowNextCityOnClick}
          handleShowPreviousCityOnClick={handleShowPreviousCityOnClick}
          handleUpdateCityWeatherAndTimeOnClick={
            handleUpdateCityWeatherAndTimeOnClick
          }
          handleDeleteCityFromListOnClick={handleDeleteCityFromListOnClick}
        />
      ) : (
        <div className="no-cities-message">
          <h2>There is no cities to show. Try to find some</h2>
        </div>
      )}
    </div>
  );
};

export default Main;
