import React from 'react';
import cities from '../../lib/city.list.json';
import Head from 'next/head';
import Current from '../../Components/current';
import Hourlyweather from '../../Components/hourlyweather';
import WeeklyWeather from '../../Components/weeklyWeather';
import moment from 'moment-timezone';
import Search from '../../Components/searchBox';

export async function getServerSideProps(context){
  const city = getCityId(context.params.city);

  if(!city){
    return {
      notFound: true,
    }
  }

  const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${process.env.API_key}&units=metric&exclude=minutely`);

  const data = await res.json();

  if(!data){
    return {
      notFound: true,
    }
  }

  const hourlyWeather = getHourlyWeather(data.hourly, data.timezone);
  const weeklyWeather = data.daily;
  
  return{
    props: {
      city: city,
      timezone: data.timezone,
      currentWeather: data.current,
      weeklyWeather: weeklyWeather,
      hourlyWeather: hourlyWeather,
    }
  }
}

const getCityId = (param) => {
  const cityParam = param.trim();
  const splitCity = cityParam.split("-");
  const id = splitCity[splitCity.length - 1];

  if(!id){
    return null;
  }

  const city = cities.find(city => city.id.toString() === id);

  if(city){
    return city;
  }else{
    return null;
  }
};

const getHourlyWeather = (hourlyData, timezone) => {
  const endOfDay = moment().tz(timezone).endOf("day").valueOf();
  const eodTimeStamp = Math.floor(endOfDay / 1000);

  const todaysData = hourlyData.filter((data) => data.dt < eodTimeStamp);

  return todaysData;
};

export default function City({city, currentWeather, weeklyWeather, hourlyWeather, timezone}) {
  return (
    <React.Fragment>
      <Head>
        <title>Weather App - {city.name}</title>
      </Head>

      <div className={weeklyWeather[0].weather[0].id > 200 && weeklyWeather[0].weather[0].id <= 232 ? 
        'w-screen h-screen bg-rain-day bg-cover bg-center px-3'
        : weeklyWeather[0].weather[0].id >= 300 && weeklyWeather[0].weather[0].id <= 321 ? 
        'w-screen h-screen bg-rain-day bg-cover bg-center px-3'
        : weeklyWeather[0].weather[0].id >= 500 && weeklyWeather[0].weather[0].id <= 531 ?
        'w-screen h-screen bg-rain-day bg-cover bg-center px-3'
        : weeklyWeather[0].weather[0].id >= 600 && weeklyWeather[0].weather[0].id <= 622 ? 
        'w-screen h-screen bg-snow-day bg-cover bg-center px-3'
        : weeklyWeather[0].weather[0].id >= 701 && weeklyWeather[0].weather[0].id <= 781 ? 
        'w-screen h-screen bg-fog-day bg-cover bg-center px-3'
        : weeklyWeather[0].weather[0].id === 800 ? 
        'w-screen h-screen bg-clear-day bg-cover bg-center px-3'
        : weeklyWeather[0].weather[0].id >= 801 && weeklyWeather[0].weather[0].id <= 804 ? 
          'w-screen h-screen bg-cloud-day bg-cover bg-center px-3'
        : 'w-screen h-screen bg-cloud-day bg-cover bg-center px-3'
        }>

        <div className='bg-white/30 relative top-2/4 translate-y-55 py-5 px-3 rounded-2xl'>
          <Current city={city} weeklyWeather={weeklyWeather[0]} timezone={timezone} />
          <Hourlyweather hourlyWeather={hourlyWeather} timezone={timezone}/>
          <WeeklyWeather weeklyWeather={weeklyWeather} timezone={timezone}/>
        </div>
      </div>
    </React.Fragment>
  )
}
