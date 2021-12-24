import moment from 'moment-timezone';
import React from 'react';
import 'weather-icons/css/weather-icons.css';

export default function WeeklyWeather({weeklyWeather, timezone}) {

  return (
    <React.Fragment>
      <div className='lg:bg-black/30 lg:rounded-md'>
        <div>
          {weeklyWeather.length > 0 && weeklyWeather.map((weather, index) => {
            if(index === 0){
              return;
            }else{
              return (
                <div className='grid grid-cols-3 m-2 items-center text-center lg:text-xl lg:my-10 lg:text-white' key={weather.dt}>
                  <div>
                    {moment.unix(weather.dt).tz(timezone).format("dddd")}
                  </div>
                  <div>
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
                  <div className='flex justify-center gap-5 lg:gap-10'>
                    <div>
                      {weather.temp.max.toFixed(0)}&deg;
                    </div>
                    <div>
                      {weather.temp.min.toFixed(0)}&deg;
                    </div>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    </React.Fragment>
  )
}
