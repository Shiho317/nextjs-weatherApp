import moment from 'moment-timezone';
import React from 'react';
import 'weather-icons/css/weather-icons.css';

export default function WeeklyWeather({weeklyWeather, timezone}) {

  console.log(weeklyWeather)

  return (
    <React.Fragment>
      <div>
        <div>
          {weeklyWeather.length > 0 && weeklyWeather.map((weather, index) => {
            if(index === 0){
              return;
            }else{
              return (
                <div key={weather.dt}>
                  <div>
                    {moment.unix(weather.dt).tz(timezone).format("dddd")}
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
                  <div>
                    {weather.temp.max.toFixed(0)}&deg;
                    {weather.temp.min.toFixed(0)}&deg;
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
