import React from 'react';
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
      <div className='grid grid-rows-10 grid-cols-1'>
        <div className='bg-yellow-100 row-span-2'>
        <h1 className='text-xl text-center'>{city.name} ({city.country})</h1>
        </div>
        <div className='text-center bg-yellow-200 text-4xl row-span-3'>
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
        <div className='text-center bg-yellow-300 text-sm row-span-1'>
          {weeklyWeather.weather[0].description}
        </div>
        <div className='text-center text-30 bg-yellow-400 text-xl row-span-2'>
          {tzHour >= 5 && tzHour < 12 ? (weeklyWeather.temp.morn.toFixed(0))
          : tzHour >= 12 && tzHour < 17 ? (weeklyWeather.temp.day.toFixed(0))
          : tzHour >= 17 && tzHour < 21 ? (weeklyWeather.temp.eve.toFixed(0))
          : (weeklyWeather.temp.night.toFixed(0))}
        </div>
        <div className='flex justify-center gap-10 bg-yellow-500 row-span-1'>
          <div>
            H:{weeklyWeather.temp.max.toFixed(0)}&deg;
          </div>
          <div>
            L:{weeklyWeather.temp.min.toFixed(0)}&deg;
          </div>
        </div>
        <div className='flex justify-around bg-yellow-600 row-span-1'>
          <div>
            <span className='text-xs'><i className='wi wi-horizon-alt'/></span>
            {moment.unix(weeklyWeather.sunrise).tz(timezone).format("LT")}
          </div>
          <div>
            <span className='text-xs'><i className='wi wi-horizon'/></span>
            {moment.unix(weeklyWeather.sunset).tz(timezone).format("LT")}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
