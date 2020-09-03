const getUserCurrentLocationAPI = (options = {}) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
  // let location;
  // window.navigator.geolocation.getCurrentPosition(
  //   (position) => {
  //     let location = {
  //       lat: position.coords.latitude,
  //       long: position.coords.longitude,
  //     };
  //     console.log(location);
  //   },
  //   (err) => console.log(err)
  // );
  // return location;
};

export default getUserCurrentLocationAPI;
