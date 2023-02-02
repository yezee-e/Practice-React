import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function WeatherButton({ clickCity, cities, getCurrentCity }) {
  return (
    <div className='Btn'>
      <Button
        variant={`${clickCity === '' ? 'outline-warning' : 'warning'}`}
        onClick={() => getCurrentCity('here')}
      >
        Current location
      </Button>
      {cities.map((city) => (
        <Button
          variant={`${clickCity === city ? 'outline-warning' : 'warning'}`}
          key={city}
          onClick={() => getCurrentCity(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  );
}

export default WeatherButton;
