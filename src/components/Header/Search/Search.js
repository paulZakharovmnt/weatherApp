import React, { useState, useEffect } from "react";
import ListOfTheCities from "./ListOfTheCities";
import searchCitiesByNameAPI from "../../../core/searchCitiesByNameAPI";

const Search = ({ handleAddCityWeatherAndDateOnClick }) => {
  const [userInput, setUserInput] = useState("");
  const [listOfTheSuggestionCities, setListOfTheSuggestionCities] = useState(
    null
  );

  const handleSubmitCityFromSearchOnClick = (item, event) => {
    event.preventDefault();
    const cityInfo = {
      city: item.city,
      country: item.countryCode,
      lat: item.latitude,
      long: item.longitude,
    };
    handleAddCityWeatherAndDateOnClick(cityInfo);
    setUserInput("");
    setListOfTheSuggestionCities(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (userInput.length > 3) {
        searchCitiesByNameAPI(userInput).then((resp) =>
          resp.json().then((result) => {
            setListOfTheSuggestionCities(result.data);
          })
        );
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [userInput]);
  return (
    <div>
      <input
        value={userInput}
        placeholder="e.g. Moscow"
        onChange={(event) => {
          setUserInput(event.target.value);
        }}
      />
      {listOfTheSuggestionCities !== null && (
        <ListOfTheCities
          list={listOfTheSuggestionCities}
          submit={handleSubmitCityFromSearchOnClick}
        />
      )}
    </div>
  );
};

export default Search;
