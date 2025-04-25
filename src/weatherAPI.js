function getURL(city) {
  return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&elements=name%2Caddress%2Ctemp%2Cfeelslike%2Ccloudcover%2Cconditions%2Cdescription%2Cicon&include=current&key=${process.env.API_KEY}&contentType=json`;
}

export function getWeatherByCity(city) {
  return fetch(getURL(city))
    .then(response => response.json())
    .then(data => {
      const {currentConditions} = data;

      return {
        address: data.resolvedAddress,
        conditions: currentConditions.conditions,
        feelslike: currentConditions.feelslike,
        icon: currentConditions.icon,
      };
    })
    .catch(error => {
      return error;
      // TODO: Handle 'Bad API Request:Invalid location parameter value.' error
    });
}