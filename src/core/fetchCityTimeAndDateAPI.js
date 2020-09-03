const timeApi = {
  key: "cbbe33181e2b4c389ee8303db47d81b0",
  base: "https://api.ipgeolocation.io/timezone?apiKey=",
};

const fetchCityTimeAndDateAPI = async ({ lat, long }) => {
  // return await fetch(`${timeApi.base}${timeApi.key}&lat=${lat}&long=${long}`);
  let timeAndDateInfo = null;
  await fetch(`${timeApi.base}${timeApi.key}&lat=${lat}&long=${long}`)
    .then((resp) => resp.json())
    .then((result) => (timeAndDateInfo = result));

  return timeAndDateInfo;
};

export default fetchCityTimeAndDateAPI;
