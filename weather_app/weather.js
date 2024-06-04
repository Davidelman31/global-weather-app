document.getElementById('get-weather-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    const apiKey = 'your_api_key_here'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weather = data.weather[0].description;
            const temp = data.main.temp;
            document.getElementById('weather-result').innerHTML = `Weather: ${weather}, Temperature: ${temp}°C`;
        })
        .catch(error => {
            document.getElementById('weather-result').innerHTML = 'Error retrieving weather data';
        });
});
