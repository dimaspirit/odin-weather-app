import './style.css';
import { getWeatherByCity } from "./weatherAPI.js";
import UI from './weatherUI.js';

let prevCity;

const weatherUI = new UI('#search', '#dashboard');

weatherUI.formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const city = event.target['search-city'].value;
  const btnEl = event.target['search-submit'];

  if(prevCity === city) return;

  btnEl.disabled = true;
  prevCity = city;

  getWeatherByCity(city)
    .then(data => {
      weatherUI.renderWeather(data);
    }).catch(error => {
      console.log('Error', error);
    }).finally(() => {
      btnEl.disabled = false;
    });
});