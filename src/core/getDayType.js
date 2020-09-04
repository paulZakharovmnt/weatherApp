const getDayType = (currentCityTime) => {
  let dayType;
  if (currentCityTime > "06" && currentCityTime < "11") {
    dayType = "morning";
  } else if (currentCityTime > "11" && currentCityTime < "19") {
    dayType = "day";
  } else if (currentCityTime > "19" && currentCityTime < "23") {
    dayType = "evening";
  } else {
    dayType = "night";
  }
  return dayType;
};

export default getDayType;
