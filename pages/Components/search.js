import React, {useState} from 'react';
import cities from '../../lib/city.list.json';
import Link from 'next/link';
import Weather from './weather';
import { FaChevronCircleRight } from "@react-icons/all-files/fa/FaChevronCircleRight";


function Search(props) {
  const [textValue, setTextValue] = useState('');
  const [results, setResults] = useState([]);

  const TextValue = (e) => {
    const {value} = e.target;
    setTextValue(value);

    let matchingCities = [];

    if(value.length > 3){

      for(let city of cities){
        if(matchingCities.length >= 5){
          break;
        }

        const match = city.name.toLowerCase().startsWith(value.toLowerCase());

        if(match){
          const cityData = {
            ...city,
          };

          matchingCities.push(cityData);
        };
      }
    }

    return setResults(matchingCities);
  }

  return (
    <div>
      <input type="text" placeholder='city name' value={textValue} onChange={TextValue}/>
      
          
      <ul>
      {results.length > 0 ? (
        results.map((city, index) => {
          return(
            <li key={index} onClick={props.getWeather}>
                {city.name}
                {city.state ? `, ${city.state}, ` : ','}
                <span>{city.country}</span>
            </li>
          )
          
        })
      ) : (
          <li>
            No results found
          </li>
      )}
      </ul>
    </div>
  )
}

export default Search
