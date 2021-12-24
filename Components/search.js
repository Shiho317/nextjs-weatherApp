import React, {useState} from 'react';
import Hero from './hero';
import SearchIcon from './SearchIcon';
import HeroIntro from './hero-intro';
import SearchBox from './searchBox';

function Search() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
    <div className='bg-top-image bg-cover bg-center h-screen'>
      <div className='block text-center absolute top-28 items-center w-screen'>
        <HeroIntro/>
      </div>
    {isOpen ? (
      <div className='flex justify-center gap-1 text-center absolute top-2/4 left-2/4 translate-x-55 w-screen'>
        <SearchBox/>
      </div>
    ) : (
      <div className='flex justify-center gap-1 text-center absolute top-2/4 left-2/4 translate-x-55 w-screen'>
        <Hero/>
        <SearchIcon setIsOpen={setIsOpen}/>
      </div>
    )}

    </div>
    </React.Fragment>
  )
}

export default Search
