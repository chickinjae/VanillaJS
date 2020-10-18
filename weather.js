const weather = document.querySelector(".js-weather");

const API_KEY = "dd491efc33e56b9c13492161f71d9149";
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
).then(function(response) {
    return response.json()
}).then(function(json){
    const temperature = json.main.temp;
    const place = json.place;
    weather.innerText =`${temperature} @ ${place}`
});
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, //latitude : latitude,
        longitude //longitude : longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("can't");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords(); // not have input data
    } else {
        const parsedCoords = JSON.parse(loadedCoords); // getWeather'
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();