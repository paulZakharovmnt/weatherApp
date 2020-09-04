const fetchCurrentUserCityLocationData = async (coords) => {
  let cityInfo;
  const api = {
    base: "https://api.opencagedata.com/geocode/v1/json?",
    key: "57362432e5a046ec9f4701c1cc13e47d",
  };
  await fetch(
    `${api.base}q=${coords.lat}+${coords.long}&language=en&key=${api.key}`
  )
    .then((resp) => resp.json())
    .then((result) => {
      cityInfo = {
        lat: coords.lat,
        long: coords.long,
        city: result.results[0].components.city,
        country: result.results[0].components.country_code,
      };
    });
  return cityInfo;
};

export default fetchCurrentUserCityLocationData;
