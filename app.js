const apiKey = '2fea6fb8051ddcae2f795889fb6dacaf';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const searchInput = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-box button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
    console.log(data, "data")

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&#8451';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = 'img/clouds.svg';
    } else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = 'img/sun.svg';
    } else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = 'img/rain.svg';
    } else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = 'img/drizzle.svg';
    } else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = 'img/mist.svg';
    } 

}

searchButton.addEventListener('click', () => {
    const city = searchInput.value; 
    checkWeather(city); 
    searchInput.value = "";
});

