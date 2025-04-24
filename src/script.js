import { getWeatherByCity } from "./weatherAPI.js";

let city = 'Drogheda';

getWeatherByCity(city)
  .then(data => {
    console.log('DATA', data);
  }).catch(error => {
    console.log('Error', error);
  });




