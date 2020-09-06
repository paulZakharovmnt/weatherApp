import getDayType from "../core/getDayType";

const timeApi = {
  key: "cbbe33181e2b4c389ee8303db47d81b0",
  base: "https://api.ipgeolocation.io/timezone?apiKey=",
};

const fetchCityTimeAndDateAPI = async ({ lat, long }) =>
  await fetch(`${timeApi.base}${timeApi.key}&lat=${lat}&long=${long}`)
    .then((resp) => resp.json())
    .then((result) => {
      const dayTime = getDayType(result.time_24);
      return {
        time24: result.time_24,
        time12: result.time_12,
        date: result.date_time_unix,
        dayTime: dayTime,
      };
    });

export default fetchCityTimeAndDateAPI;
