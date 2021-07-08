let thermostat =  new Thermostat()

thermostat.getTemp();
thermostat.upTemp();
thermostat.energyUsage();
thermostat.resetTemp();

let temperature = document.getElementById("temperature")
temperature.innerHTML = thermostat.getTemp();

let up = document.getElementById('up')
up.addEventListener('click', () => {
  thermostat.upTemp();
  temperature.innerHTML = thermostat.getTemp();
  powerUsage.innerHTML = thermostat.energyUsage();
});

let down = document.getElementById('down')
down.addEventListener('click', () => {
  thermostat.downTemp();
  temperature.innerHTML = thermostat.getTemp();
  powerUsage.innerHTML = thermostat.energyUsage();
});

let off = document.getElementById('off')
off.addEventListener('click', () => {
  thermostat.switchPowerSavingModeOff();
  off.classList.add('selected');
  on.classList.remove('selected');
});

let on = document.getElementById('on')
on.addEventListener('click', () => {
  thermostat.switchPowerSavingModeOn();
  on.classList.add('selected');
  off.classList.remove('selected');
});

let reset = document.getElementById('reset')
reset.addEventListener('click', () =>{
  thermostat.resetTemp();
  temperature.innerHTML = thermostat.getTemp();
  powerUsage.innerHTML = thermostat.energyUsage();
});

let powerUsage = document.getElementById("energy-usage")
powerUsage.innerHTML = thermostat.energyUsage();

const displayWeather = (city) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.apiKey}&units=metric`

  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      document.querySelector('#current-temperature').innerText = data.main.temp;
    })
}
displayWeather('London');

document.querySelector('#select-city').addEventListener('submit', (event) => {
  event.preventDefault();
  const city = document.querySelector('#current-city').value;

  displayWeather(city);
})