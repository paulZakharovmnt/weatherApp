import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import getUserCurrentLocationAPI from "../core/getUserCurrentLocationAPI";
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

  useEffect(() => {
    const userLocation = getUserCurrentLocationAPI();
  }, []);

  // ************* Версия 1.0 Две функции повторящиюе друг друга!!!!

  const handleAddCityToTheListOnClick = async (cityInfo) => {
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
    setListOfTheCities([...listOfTheCities, cityWeatherResult.name]);
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

    const cityWeatherResult = await fetchCityWeather(currentCityToUpdate);
    const timeAndDateResult = await fetchCityTimeAndDateAPI(
      currentCityToUpdate
    );
    const newCityWeatherObject = getNewCityWeatherObject(
      cityWeatherResult,
      weatherInfo
    );
    const newCityTimeAndDateObject = getNewCityTimeAndDateObject(
      currentCityToUpdate,
      timeAndDateResult,
      cityTimeAndDateInfo
    );
    setWeatherInfo(newCityWeatherObject);
    setCityTimeAndDateInfo(newCityTimeAndDateObject);
  };

  const handleDeleteCityFromListOnClick = () => {};

  let cityIdToShow = listOfTheCities.indexOf(currentCityToShow);

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
      <Header handleAddCityToTheListOnClick={handleAddCityToTheListOnClick} />

      <WeatherInfo />
      <button onClick={handleShowPreviousCityOnClick}>Prev</button>
      <button onClick={handleShowNextCityOnClick}>Next</button>
      <button onClick={handleUpdateCityWeatherAndTimeOnClick}>Update</button>
    </div>
  );
};

export default Main;
