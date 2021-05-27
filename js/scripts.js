'use strict';

const weather = document.getElementById("weather");
const weatherButton = document.getElementById("getWeather");


weatherButton.addEventListener('click', function (){
    fetch (
        "http://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=0ddb08428f83f084f1ec0d836c4ba332"
    )
        .then(function (response){
            console.log(response)
            return response.json();
        })
        .then(function (data) {
            weather.innerText = "The current temperature is " + data.main.temp + "°";
        })
})