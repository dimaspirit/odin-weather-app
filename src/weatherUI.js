export default class UI {
  constructor(queryForm, queryDashboard) {
    this.formEl = document.querySelector(queryForm);
    this.dashboardEl = document.querySelector(queryDashboard);
  }

  clear(section) {
    while(section.firstChild) {
      section.removeChild(section.lastChild);
    }
  }

  renderWeather({address, conditions, feelslike, icon}) {
    this.clear(this.dashboardEl);

    const locationEl = document.createElement('p');
    locationEl.textContent = address;
    locationEl.classList.add('location');
    const conditionsEl = document.createElement('p');
    conditionsEl.textContent = conditions;
    conditionsEl.classList.add('dashboard-conditions');
    const feelslikeEl = document.createElement('p');
    feelslikeEl.textContent = feelslike;
    feelslikeEl.classList.add('dashboard-feelslike');

    this.dashboardEl.appendChild(feelslikeEl);
    this.dashboardEl.appendChild(conditionsEl);
    this.dashboardEl.appendChild(locationEl);
  }
}