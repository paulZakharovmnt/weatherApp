import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import "./Main.css";
import getDayType from "../core/getDayType";
import fetchCurrentUserCityLocationData from "../core/fetchCurrentUserCityLocationData";
import fetchCityWeather from "../core/fetchCityWeather";
import getNewCityWeatherObject from "../core/getNewCityWeatherObject";
import InfoScreen from "./WeatherInfo/InfoScreen";
import fetchCityTimeAndDateAPI from "../core/fetchCityTimeAndDateAPI";
import getNewCityTimeAndDateObject from "../core/getNewCityTimeAndDateObject";

// const getNewCityTimeAndDateObject = (
//   cityInfo,
//   timeAndDateResult,
//   cityTimeAndDateInfo
// ) => {
//   const newCitiesTimeInfo = { ...cityTimeAndDateInfo };
//   newCitiesTimeInfo[cityInfo.city] = timeAndDateResult;
//   return newCitiesTimeInfo;
// };

// const cityWeatherDateAndCoords = { ...weatherInfo };
//     cityWeatherDateAndCoords[cityInfo.city] = {
//       weather: cityWeatherResult,
//       timeAndDate: timeAndDateResult,
//       coords: cityInfo,
//     };

const Main = () => {
  //****** General State */

  const [currentUserGeoLocation, setCurrentUserGeoLocation] = useState(null);
  const [listOfTheCities, setListOfTheCities] = useState([]);
  const [weatherInfo, setWeatherInfo] = useState(null);
  // const [cityTimeAndDateInfo, setCityTimeAndDateInfo] = useState(null);
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
    if (currentUserGeoLocation) {
      fetchCurrentUserCityLocationData(currentUserGeoLocation).then((result) =>
        handleAddCityWeatherAndDateOnClick(result)
      );
    }
  }, [currentUserGeoLocation]);

  useEffect(() => {
    if (autoUpdateWeather) {
      // handleAddCityWeatherAndDateOnClick(weatherInfo[currentCityToShow].coords);

      handleUpdateCityWeatherAndTimeOnClick();
    }
  }, [currentCityToShow]);

  const getFullCityInformation = (
    cityWeatherResult,
    timeAndDateResult,
    cityInfo
  ) => {
    const cityWeatherDateAndCoords = { ...weatherInfo };
    cityWeatherDateAndCoords[cityInfo.city] = {
      weather: cityWeatherResult,
      timeAndDate: timeAndDateResult,
      coords: cityInfo,
    };
    return cityWeatherDateAndCoords;
  };

  const handleAddCityWeatherAndDateOnClick = async (cityInfo) => {
    const cityWeatherResult = await fetchCityWeather(cityInfo);
    const timeAndDateResult = await fetchCityTimeAndDateAPI(cityInfo);

    if (!listOfTheCities.includes(cityInfo.city)) {
      setListOfTheCities([...listOfTheCities, cityInfo.city]);
    }

    const cityWeatherDateAndCoords = getFullCityInformation(
      cityWeatherResult,
      timeAndDateResult,
      cityInfo
    );

    setWeatherInfo(cityWeatherDateAndCoords);
    setCurrentCityToShow(cityInfo.city);
  };

  const handleUpdateCityWeatherAndTimeOnClick = async () => {
    handleAddCityWeatherAndDateOnClick(weatherInfo[currentCityToShow].coords);
  };

  const handleDeleteCityFromListOnClick = () => {
    const newCityList = listOfTheCities.filter(
      (city) => city !== currentCityToShow
    );
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

  // const changeDayTime = (time24) => {
  //   const dayTime = getDayType(time24);
  //   console.log(time24);
  //   setCurrentDayTime(dayTime);
  // };

  let mainStyleClass = ["main", "default"];

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
          // cityTimeAndDateInfo={cityTimeAndDateInfo}
          currentCityToShow={currentCityToShow}
          showFahrenheit={showFahrenheit}
          show24hTime={show24hTime}
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
