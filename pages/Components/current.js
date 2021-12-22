import React, { useState } from 'react';
import moment from 'moment-timezone';
import 'weather-icons/css/weather-icons.css';

export default function Current({city, weeklyWeather, timezone}) {
  console.log(city)
  console.log(weeklyWeather)
  console.log(weeklyWeather.weather[0].id)

  const now = new Date();
  const Hour = now.getHours();
  console.log(Hour)
  const tzHour = moment(Hour).tz(timezone).format("HH");
  console.log(tzHour);

  const weatherIcon = weeklyWeather.weather[0].id;

  return (
    <React.Fragment>
      <div>
        <div>
        <h1>{city.name} ({city.country})</h1>
        </div>
        <div>
          {weatherIcon >= 200 && weatherIcon <= 232 ? (
            <i className='wi wi-thunderstorm'/>
          ) : weatherIcon >= 300 && weatherIcon <= 321 ? (
            <i className='wi wi-sleet'/>
          ) : weatherIcon >= 600 && weatherIcon <= 622 ? (
            <i className='wi wi-storm-showers'/>
          ) : weatherIcon >= 701 && weatherIcon <= 781 ? (
            <i className='wi wi-snow'/>
          ) : weatherIcon === 800 ? (
            <i className='wi wi-fog'/>
          ) : weatherIcon >= 801 && weatherIcon <= 804 ? (
            <i className='wi wi-day-sunny'/>
          ) : (
            <i className='wi wi-day-fog'/>
          )}
        </div>
        <div>
          {tzHour >= 5 && tzHour < 12 ? (weeklyWeather.temp.morn.toFixed(0))
          : tzHour >= 12 && tzHour < 17 ? (weeklyWeather.temp.day.toFixed(0))
          : tzHour >= 17 && tzHour < 21 ? (weeklyWeather.temp.eve.toFixed(0))
          : (weeklyWeather.temp.night.toFixed(0))}
        </div>
        <div>
          {weeklyWeather.temp.max.toFixed(0)}&deg;
        </div>
        <div>
          {weeklyWeather.temp.min.toFixed(0)}&deg;
        </div>
        <div>
          {moment.unix(weeklyWeather.sunrise).tz(timezone).format("LT")}
        </div>
        <div>
          {moment.unix(weeklyWeather.sunset).tz(timezone).format("LT")}
        </div>
      </div>
      <div>
        <div>
          {weeklyWeather.weather[0].description}
        </div>
          
      </div>
    </React.Fragment>
  )
}
