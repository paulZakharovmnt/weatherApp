import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import getUserCurrentLocationAPI from "../core/getUserCurrentLocationAPI";
// import getUsersCityAndCOuntry from "../core/getUsersCityAndCOuntry";
import fetchCurrentUsersGeoLocWeather from "../core/fetchCurrentUsersGeoLocWeather";
import fetchCityWeather from "../core/fetchCityWeather";
import getNewCityWeatherObject from "../core/getNewCityWeatherObject";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import fetchCityTimeAndDateAPI from "../core/fetchCityTimeAndDateAPI";
import getNewCityTimeAndDateObject from "../core/getNewCityTimeAndDateObject";

const Main = () => {
  const [currentUseGeoLocation, setCurrentUserGeoLocation] = useState(null);
  const [listOfTheCities, setListOfTheCities] = useState([]);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [cityTimeAndDateInfo, setCityTimeAndDateInfo] = useState(null);
  const [currentCityToShow, setCurrentCityToShow] = useState(null);

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
    // loadUsersWeather();
  }, []);

  const loadUsersWeather = async (currentUseGeoLocation) => {
    const data = await fetchCurrentUsersGeoLocWeather(currentUseGeoLocation);
  };

  // useEffect(() => {
  //   if (currentUseGeoLocation !== null) {
  //     fetchCurrentUsersGeoLocWeather(currentUseGeoLocation);
  //     // getUsersCityAndCOuntry();
  //   }
  // }, [currentUseGeoLocation]);

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

  return (
    <div>
      <Header
        handleAddCityWeatherAndDateOnClick={handleAddCityWeatherAndDateOnClick}
      />

      {currentCityToShow !== null ? (
        <WeatherInfo
          weatherInfo={weatherInfo}
          cityTimeAndDateInfo={cityTimeAndDateInfo}
          currentCityToShow={currentCityToShow}
          handleShowNextCityOnClick={handleShowNextCityOnClick}
          handleShowPreviousCityOnClick={handleShowPreviousCityOnClick}
          handleUpdateCityWeatherAndTimeOnClick={
            handleUpdateCityWeatherAndTimeOnClick
          }
          handleDeleteCityFromListOnClick={handleDeleteCityFromListOnClick}
        />
      ) : (
        <h2>There is no cities to show. Try to find some</h2>
      )}
    </div>
  );
};

export default Main;
