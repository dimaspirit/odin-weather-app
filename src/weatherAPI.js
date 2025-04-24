const API_KEY = 'U9Z3YZHD2NKPCDLNMS3BFQHNL';

function getURL(city) {
  return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&elements=name%2Caddress%2Ctemp%2Cfeelslike%2Ccloudcover%2Cconditions%2Cdescription%2Cicon&include=current&key=${API_KEY}&contentType=json`;
}

export function getWeatherByCity(city) {
  return fetch(getURL(city))
    .then(response => response.json())
    .catch(error => error);
}