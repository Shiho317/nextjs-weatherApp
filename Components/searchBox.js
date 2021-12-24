import React, {useState} from 'react';
import Link from 'next/link';
import cities from '../lib/city.list.json';

export default function SearchBox() {

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
            slug: `${city.name.toLowerCase().replace(/ /g, "-")}-${city.id}`,
          };

          matchingCities.push(cityData);
        };
      }
    }

    return setResults(matchingCities);
  }

  return (
    <React.Fragment>
      <div className='bg-white/50 block text-center font-main'>
        <div>
          <input className='text-center bg-white text-xs py-1 px-3 outline-gray-200 md:text-base lg:px-9' type="text" placeholder='Search your city' value={textValue} onChange={TextValue}/>
        </div>
  
  
      <ul className='text-sm md:text-base'>
      {results.length > 0 ? (
      results.map((city) => {
        return(
          <li className='hover:bg-black/50 hover:text-white' key={city.slug}>
            <Link href={`/location/${city.slug}`}>
            <a>
              {city.name}
              {city.state ? `, ${city.state} ` : ""}{" "}
              <span>({city.country})</span>
            </a>
            </Link>
          </li>
        )
      })
      ) : (
      <li className='text-xs text-center md:text-md lg:text-base'>
        No results found
      </li>
      )}
        </ul>
      </div>
    </React.Fragment>
  )
}
