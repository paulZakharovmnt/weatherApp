const getCurrentCityDate = (unixDate) => {
  let cityDateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let cityDate = new Date(unixDate * 1000).toLocaleString(
    "en-US",
    cityDateOptions
  );

  return cityDate;
};

export default getCurrentCityDate;
