function weather(obj){
    let tempobj = document.querySelector('#current-temp');
    let humidity = document.querySelector('#humid');
    let weathericon = document.querySelector('#weathericon');
    let weatherdesc = document.querySelector('#weatherdesc');
    let iconsrc= `https://openweathermap.org/img/w/${obj.weather[0].icon}.png`;

    let temp = obj.main.temp;
    let windspeed = obj.main.humidity

    tempobj.textContent = temp;
    humidity.textContent = windspeed;
    weathericon.setAttribute('src', iconsrc);
    weathericon.setAttribute('alt', weatherdesc);
    const desc = obj.weather[0].description;
    weatherdesc.textContent = desc

}

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip=20814,us&appid=1a3eac6be9133ba2f1b3961097ba91b2&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    weather(jsObject);
  });
