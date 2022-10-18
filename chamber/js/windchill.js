function setwindchill(temp, windspeed){
    let tempobj = document.querySelector('#temp');
    let windspeedobj = document.querySelector('#speed');
    let windchillobj = document.querySelector('#chill');

    let windchillmsg = "N/A";

    if (temp <= 50 && windspeed > 3){
        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
        windchillmsg = `${chill}°F`;
    }

    tempobj.textContent = temp;
    windspeedobj.textContent = windspeed;
    windchillobj.textContent = windchillmsg;

}

setwindchill(49, 10)