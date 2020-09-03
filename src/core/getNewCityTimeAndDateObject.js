const getNewCityTimeAndDateObject = (
  cityInfo,
  timeAndDateResult,
  cityTimeAndDateInfo
) => {
  const newCitiesTimeInfo = { ...cityTimeAndDateInfo };
  newCitiesTimeInfo[cityInfo.city] = timeAndDateResult;
  return newCitiesTimeInfo;
};

export default getNewCityTimeAndDateObject;
