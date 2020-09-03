import React, { useState } from "react";
import Settings from "./Settings/Settings";
import Search from "./Search/Search";

const Header = ({ handleAddCityWeatherAndDateOnClick }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div>
      <button onClick={() => setShowSearchBar(!showSearchBar)}>Add city</button>
      <button onClick={() => setShowSettings(!showSettings)}>Settings</button>
      {showSearchBar && (
        <Search
          handleAddCityWeatherAndDateOnClick={
            handleAddCityWeatherAndDateOnClick
          }
        />
      )}
      {showSettings && <Settings />}
    </div>
  );
};

export default Header;
