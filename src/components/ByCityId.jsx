import React, { useState, useEffect, Fragment } from 'react';
import './ByCityId.css';

function ByCityId() {
  // Setup useState
  const [weather, setWeather] = useState({});
  // Link apiKey to .env file
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  // Create url to endpoint
  const url = `https://api.openweathermap.org/data/2.5/weather?id=4049979&units=imperial&appid=${apiKey}`;
  // Setup fetch call
  const fetchAPI = async () => {
    let res = await fetch(url);
    let data = await res.json();
    setWeather(data);
  };

  useEffect(() => {
    fetchAPI(); // Returns promise
    return () => {}; // Cleanup function
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Dependency array

  return (
    <div className='by-city-id'>
      <h1 className='name'>{weather.name}</h1>
      {weather.weather && (
        <Fragment>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt='icon'
            className='icon'
          />
          <div className='description mb-2'>
            {weather.weather[0].description.toUpperCase()[0]}
            {weather.weather[0].description.slice(1)}
          </div>
        </Fragment>
      )}
      {weather.main && (
        <Fragment className='temp'>
          <div>Currently {weather.main.temp} F</div>
          <div className='text-muted small mb-3'>
            Feels like {weather.main.feels_like} F
          </div>
          <div className='text-muted small'>
            High: {weather.main.temp_max} F | Low: {weather.main.temp_min} F
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default ByCityId;
