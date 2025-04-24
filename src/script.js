import { getWeatherByCity } from "./weatherAPI.js";

let prevCity;

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
    }).catch(error => {
      console.log('Error', error);
    }).finally(() => {
      btnEl.disabled = false;
    });
})