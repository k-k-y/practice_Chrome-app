const API_KEY = "bf5041e5822b9e878324d88365b48472";
// 고유식별키

function onGeoOk(position) 
{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = `Location: ${data.name}`;
        weather.innerText = `Weather: ${data.weather[0].main} | ${data.main.temp}°C`;
    });
}

function onGeoError()
{
    alert("Can't find where you are!!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);