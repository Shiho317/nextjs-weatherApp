import React from 'react';
import moment from 'moment-timezone';
import 'weather-icons/css/weather-icons.css';

export default function Current({weeklyWeather, timezone}) {

  const now = new Date();
  const Hour = now.getHours();
  const tzHour = Number(moment(Hour, 'HH').tz(timezone).format("HH"));

  const weatherIcon = weeklyWeather.weather[0].id;

  return (
    <React.Fragment>
      <div className='grid grid-rows-8 grid-cols-1 lg:bg-white/30 lg:rounded-md lg:mr-3 lg:mb-3 lg:p-20'>
        <div className='text-center text-5xl p-2 lg:text-7xl lg:text-black'>
          {weatherIcon >= 200 && weatherIcon <= 232 ? (
            <i className='wi wi-thunderstorm'/>
          ) : weatherIcon >= 300 && weatherIcon <= 321 ? (
            <i className='wi wi-sleet'/>
          ) : weatherIcon >= 500 && weatherIcon <= 531 ? (
            <i className='wi wi-rain'/>
          ) : weatherIcon >= 600 && weatherIcon <= 622 ? (
            <i className='wi wi-snow'/>
          ) : weatherIcon >= 701 && weatherIcon <= 781 ? (
            <i className='wi wi-fog'/>
          ) : weatherIcon === 800 ? (
            <i className='wi wi-day-sunny'/>
          ) : weatherIcon >= 801 && weatherIcon <= 804 ? (
            <i className='wi wi-cloudy'/>
          ) : (
            <i className='wi wi-cloudy'/>
          )}
        </div>
        <div className='text-center font-main text-sm lg:text-lg lg:text-black'>
          {weeklyWeather.weather[0].description}
        </div>
        <div className='text-center text-30 text-2xl lg:text-4xl lg:text-black'>
          {tzHour >= 5 && tzHour < 12 ? (weeklyWeather.temp.morn.toFixed(0))
          : tzHour >= 12 && tzHour < 17 ? (weeklyWeather.temp.day.toFixed(0))
          : tzHour >= 17 && tzHour < 21 ? (weeklyWeather.temp.eve.toFixed(0))
          : (weeklyWeather.temp.night.toFixed(0))}&deg;
        </div>
        <div className='font-main py-1 flex justify-center gap-10 lg:text-black lg:text-lg'>
          <div>
            H:{weeklyWeather.temp.max.toFixed(0)}&deg;
          </div>
          <div>
            L:{weeklyWeather.temp.min.toFixed(0)}&deg;
          </div>
        </div>
        <div className='flex justify-around p-1'>
          <div className='font-main text-sm lg:text-lg lg:text-black'>
            <span className='text-xs mr-1 lg:text-base lg:text-black'><i className='wi wi-horizon-alt'/></span>
            {moment.unix(weeklyWeather.sunrise).tz(timezone).format("LT")}
          </div>
          <div className='font-main text-sm lg:text-lg lg:text-black'>
            <span className='text-xs mr-1 lg:text-base lg:text-black'><i className='wi wi-horizon'/></span>
            {moment.unix(weeklyWeather.sunset).tz(timezone).format("LT")}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
