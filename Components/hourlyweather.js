import moment from 'moment';
import React from 'react';
import 'weather-icons/css/weather-icons.css';

export default function Hourlyweather({hourlyWeather, timezone}) {

  console.log(hourlyWeather);
  console.log(hourlyWeather.length)

  return (
    <React.Fragment>
      <div>
        {hourlyWeather.length > 0 && hourlyWeather.map((weather, index) => (
          <div key={weather.dt}>
            <div>
            {index === 0 ? (
              <div>Now</div>
            ) : (
              <div>
              {moment.unix(weather.dt).tz(timezone).format("LT")}
              </div>
            )}
            </div>
            <div>
              {weather.weather[0].id >= 200 && weather.weather[0].id <= 232 ? (
                <i className='wi wi-thunderstorm'/>
              ) : weather.weather[0].id >= 300 && weather.weather[0].id <= 321 ? (
                <i className='wi wi-sleet'/>
              ) : weather.weather[0].id >= 600 && weather.weather[0].id <= 622 ? (
                <i className='wi wi-storm-showers'/>
              ) : weather.weather[0].id >= 701 && weather.weather[0].id <= 781 ? (
                <i className='wi wi-snow'/>
              ) : weather.weather[0].id === 800 ? (
                <i className='wi wi-fog'/>
              ) : weather.weather[0].id >= 801 && weather.weather[0].id <= 804 ? (
                <i className='wi wi-day-sunny'/>
              ) : (
                <i className='wi wi-day-fog'/>
              )}
            </div>
            <div>{weather.temp.toFixed(0)}&deg;</div>
          </div>
          
        ))}
        
      </div>
    </React.Fragment>
  )
}
