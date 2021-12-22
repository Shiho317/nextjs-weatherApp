import React, {useState} from 'react';
import cities from '../../lib/city.list.json';
import Hero from './Hero';
import Link from 'next/link';


function Search() {
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

    {isOpen ? (
      <div className='bg-sky-700'>
      <input type="text" placeholder='city name' value={textValue} onChange={TextValue}/>
      
      <ul>
      {results.length > 0 ? (
        results.map((city) => {
          return(
            <li key={city.slug}>
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
          <li>
            No results found
          </li>
      )}
      </ul>
      </div>
    ) : (
      <Hero setIsOpen={setIsOpen}/>
    )}
    

    </React.Fragment>
  )
}

export default Search
