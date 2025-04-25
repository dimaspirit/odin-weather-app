import './style.css';
import { getWeatherByCity } from "./weatherAPI.js";
import UI from './weatherUI.js';

let prevCity;

const weatherUI = new UI('#search', '#dashboard');

const formEl = document.querySelector('#search');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const city = event.target['search-city'].value;
  const btnEl = event.target['search-submit'];

  if(prevCity === city) return;

  btnEl.disabled = true;
  // TODO: Handle enter the same city warning
  prevCity = city;

  getWeatherByCity(city)
    .then(data => {
      console.log('DATA', data);
      const {currentConditions} = data;

      weatherUI.renderWeather({
        address: data.resolvedAddress,
        conditions: currentConditions.conditions,
        feelslike: currentConditions.feelslike,
        icon: currentConditions.icon,
      });
    }).catch(error => {
      console.log('Error', error);
    }).finally(() => {
      btnEl.disabled = false;
    });
})