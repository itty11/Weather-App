document.getElementById('searchBtn').addEventListener('click', function() {
    var city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a city name');
    }
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('cityInput').value = '';
    document.getElementById('weatherInfo').innerHTML = '';
});

function fetchWeather(city) {
    var apiKey = '3c18dbde21944f652fbffa95a3cb5488'; // Replace with your OpenWeatherMap API key
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    var weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Description: ${data.weather[0].description}</p>
    `;
}
