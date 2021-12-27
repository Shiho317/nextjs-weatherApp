import React, { useState } from 'react';
import cities from '../../lib/city.list.json';
import Head from 'next/head';
import Current from '../../Components/current';
import Hourlyweather from '../../Components/hourlyweather';
import WeeklyWeather from '../../Components/weeklyWeather';
import moment from 'moment-timezone';
import SearchBox from '../../Components/searchBox';
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import CityName from '../../Components/cityName';

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
  const endOfDay = moment().tz(timezone).endOf('day').valueOf();
  const eodTimeStamp = Math.floor(endOfDay / 1000);

  const todaysData = hourlyData.filter((data) => data.dt < eodTimeStamp);

  return todaysData;
};

export default function City({city, weeklyWeather, hourlyWeather, timezone}) {

  const [isToggle, setIsToggle] = useState(false);

  const IsToggle = () => {
    setIsToggle(prev => !prev)
  };

  const now = new Date();
  const Hour = now.getHours();
  const tzHour = Number(moment(Hour, 'HH').tz(timezone).format("HH"));

  const sunrise = Number(moment.unix(weeklyWeather[0].sunrise, 'H').tz(timezone).format("H"));

  const sunset = Number(moment.unix(weeklyWeather[0].sunset, 'HH').tz(timezone).format("HH"));

  return (
    <React.Fragment>
      <Head>
        <title>Weather App - {city.name}</title>
      </Head>

      <div className={weeklyWeather[0].weather[0].id > 200 && weeklyWeather[0].weather[0].id <= 232 ? 
        tzHour > sunrise && tzHour < sunset ? `w-screen h-screen bg-rain-day bg-cover bg-center px-3 lg:px-20`
        : `w-screen h-screen bg-rain-night bg-cover bg-center px-3 lg:px-20` 
        : weeklyWeather[0].weather[0].id >= 300 && weeklyWeather[0].weather[0].id <= 321 ? 
        tzHour > sunrise && tzHour < sunset ? `w-screen h-screen bg-rain-day bg-cover bg-center px-3 lg:px-20`
        : `w-screen h-screen bg-rain-night bg-cover bg-center px-3 lg:px-20`
        : weeklyWeather[0].weather[0].id >= 500 && weeklyWeather[0].weather[0].id <= 531 ?
        tzHour > sunrise && tzHour < sunset ? `w-screen h-screen bg-rain-day bg-cover bg-center px-3 lg:px-20`
        : `w-screen h-screen bg-rain-night bg-cover bg-center px-3 lg:px-20`
        : weeklyWeather[0].weather[0].id >= 600 && weeklyWeather[0].weather[0].id <= 622 ? 
        tzHour > sunrise && tzHour < sunset ? `w-screen h-screen bg-snow-day bg-cover bg-center px-3 lg:px-20`
        : `w-screen h-screen bg-snow-night bg-cover bg-center px-3 lg:px-20`
        : weeklyWeather[0].weather[0].id >= 701 && weeklyWeather[0].weather[0].id <= 781 ? 
        tzHour > sunrise && tzHour < sunset ? `w-screen h-screen bg-fog-day bg-cover bg-center px-3 lg:px-20`
        :`w-screen h-screen bg-fog-night bg-cover bg-center px-3 lg:px-20`
        : weeklyWeather[0].weather[0].id === 800 ? 
        tzHour > sunrise && tzHour < sunset ? `w-screen h-screen bg-clear-day bg-cover bg-center px-3 lg:px-20`
        : `w-screen h-screen bg-clear-night bg-cover bg-center px-3 lg:px-20`
        : weeklyWeather[0].weather[0].id >= 801 && weeklyWeather[0].weather[0].id <= 804 ? 
        tzHour > sunrise && tzHour < sunset ? `w-screen h-screen bg-cloud-day bg-cover bg-center px-3 lg:px-20`
        :`w-screen h-screen bg-cloud-night bg-cover bg-center px-3 lg:px-20`
        : `w-screen h-screen bg-cloud-day bg-cover bg-center px-3 lg:px-20`
        }>

        <div className='absolute top-10px z-50'>
          {isToggle ? (
            <div className='flex justify-center gap-1 text-center transition-all duration-1000 ease'>
              <SearchBox/>
              <div className='grid items-center text-black cursor-pointer md:text-md lg:text-xl lg:text-white' onClick={IsToggle}>
                <FiSearch/>
              </div>
            </div>
          ) : (
            <div className='absolute top-10px text-black cursor-pointer transition-transform duration-1000 ease md:text-md lg:text-xl lg:text-white' onClick={IsToggle}>
              <FiSearch/>
            </div>
          )}
        </div>

        <div className='backdrop-blur-sm bg-white/30 relative top-2/4 translate-y-55 py-5 px-3 rounded-2xl
                        lg:bg-transparent'>
          <CityName city={city}/>
          <div className='lg:grid lg:grid-cols-2'>
          <div className='lg:block'>
            <Current city={city} weeklyWeather={weeklyWeather[0]} timezone={timezone} />
            <Hourlyweather hourlyWeather={hourlyWeather} timezone={timezone}/>
          </div>
          <WeeklyWeather weeklyWeather={weeklyWeather} timezone={timezone}/>
        </div>
        </div>
      </div>
    </React.Fragment>
  )
}
