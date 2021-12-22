import React, {useState} from 'react';
import cities from '../lib/city.list.json';
import Hero from './Hero';
import Link from 'next/link';


function SearchBox() {
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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
    <div className='bg-top-image bg-cover bg-center h-screen' >
    {isOpen ? (
      <div className='bg-white/50 block text-center absolute top-2/4 left-2/4 translate-x-55'>
        <div>
          <input className='text-center bg-white' type="text" placeholder='Search your city' value={textValue} onChange={TextValue}/>
        </div>
      
      
      <ul className='text-sm'>
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
          <li className='text-xs text-center'>
            No results found
          </li>
      )}
      </ul>
      </div>
    ) : (
        <Hero setIsOpen={setIsOpen}/>
    )}

    </div>
    </React.Fragment>
  )
}

export default SearchBox
