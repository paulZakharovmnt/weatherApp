const setupDateAndTimeObject = (cityTime) => {
  const obj = cityTime.date_time_txt
    .split(" ")
    .reduce(function (obj, value, index) {
      obj[index] = value;
      return obj;
    }, {});
  const info = {
    name: obj[0],
    month: obj[1],
    day: obj[2],
    year: obj[3],
    time: obj[4],
  };
  return info;
};

export default setupDateAndTimeObject;
