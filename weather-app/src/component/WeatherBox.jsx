import React from 'react';

function WeatherBox({ weather }) {
  return (
    <div className='weather-box'>
      <div>{weather?.name}</div>
      <h2>
        온도: {weather?.main.temp}C/ 체감온도: {weather?.main.feels_like}C
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
}

export default WeatherBox;
