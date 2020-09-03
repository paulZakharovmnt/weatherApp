let searchCityApi = {
  base: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=",
  key: "f94ea70c7amsh93941eb1918691ep15f1ecjsn783eefb2ee1f",
};

const searchCitiesByNameAPI = async (userInput) => {
  return await fetch(`${searchCityApi.base}${userInput}&sort=-population`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
      "x-rapidapi-key": `${searchCityApi.key}`,
    },
  });
};

export default searchCitiesByNameAPI;
