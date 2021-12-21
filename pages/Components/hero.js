import React, { useState } from 'react';
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import Search from './search';

function Hero() {

  const [isOpen, setIsOpen] = useState(false);

  const IsOpen = () => {
    setIsOpen(true);
  };


  return (
    <React.Fragment>
    {isOpen ? (
      <Search/>
    ) : (
      <div>
      <div>
        Search your city weather
      </div>
      <div onClick={IsOpen}>
        <FiSearch/>
      </div>
      </div>
    )}
      
    </React.Fragment>
  )
}

export default Hero
