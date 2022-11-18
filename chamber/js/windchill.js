function setwindchill(obj){
    let tempobj = document.querySelector('#current-temp');
    let windspeedobj = document.querySelector('#speed');
    let windchillobj = document.querySelector('#chill');
    let weathericon = document.querySelector('#weathericon');
    let weatherdesc = document.querySelector('#weatherdesc');
    let iconsrc= `https://openweathermap.org/img/w/${obj.weather[0].icon}.png`;

    let windchillmsg = "N/A";

    let temp = obj.main.temp;
    let windspeed = obj.wind.speed

    if (temp <= 50 && windspeed > 3){
        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
        windchillmsg = `${chill}°F`;
    }

    tempobj.textContent = temp;
    windspeedobj.textContent = windspeed;
    windchillobj.textContent = windchillmsg;
    weathericon.setAttribute('src', iconsrc);
    weathericon.setAttribute('alt', weatherdesc);
    const desc = obj.weather[0].description;
    weatherdesc.textContent = desc

}

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip=05672,us&appid=1a3eac6be9133ba2f1b3961097ba91b2&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    setwindchill(jsObject);
  });