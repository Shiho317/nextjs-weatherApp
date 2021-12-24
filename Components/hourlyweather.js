import moment from 'moment';
import React from 'react';
import 'weather-icons/css/weather-icons.css';

export default function Hourlyweather({hourlyWeather, timezone}) {

  return (
    <React.Fragment>
      <div className='overflow-x-scroll flex lg:row-span-2 lg:col-span-1 lg:bg-white/30 lg:mr-3 lg:rounded-md'>
        {hourlyWeather.length > 0 && hourlyWeather.map((weather, index) => (
          <div className='grid grid-rows-3 items-center text-center bg-black/50 m-2 rounded-md
                          lg:bg-white/50' key={weather.dt}>
            <div className='w-20'>
            {index === 0 ? (
              <div className='font-main text-base text-white lg:text-black'>Now</div>
            ) : (
              <div className='font-main text-sm text-white lg:text-black'>
              {moment.unix(weather.dt).tz(timezone).format("LT")}
              </div>
            )}
            </div>
            <div className='text-xl text-white lg:text-black'>
              {weather.weather[0].id >= 200 && weather.weather[0].id <= 232 ? (
                <i className='wi wi-thunderstorm'/>
              ) : weather.weather[0].id >= 300 && weather.weather[0].id <= 321 ? (
                <i className='wi wi-sleet'/>
              ) : weather.weather[0].id >= 500 && weather.weather[0].id <= 531 ? (
                <i className='wi wi-rain'/>
              ) : weather.weather[0].id >= 600 && weather.weather[0].id <= 622 ? (
                <i className='wi wi-snow'/>
              ) : weather.weather[0].id >= 701 && weather.weather[0].id <= 781 ? (
                <i className='wi wi-fog'/>
              ) : weather.weather[0].id === 800 ? (
                <i className='wi wi-day-sunny'/>
              ) : weather.weather[0].id >= 801 && weather.weather[0].id <= 804 ? (
                <i className='wi wi-cloudy'/>
              ) : (
                <i className='wi wi-cloudy'/>
              )}
            </div>
            <div className='font-main text-sm text-white lg:text-black'>{weather.temp.toFixed(0)}&deg;</div>
          </div>
          
        ))}
      </div>
    </React.Fragment>
  )
}
