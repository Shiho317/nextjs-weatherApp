import React from 'react';
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";

function Hero({setIsOpen}) {

  const IsOpen =() =>{
    setIsOpen(true)
  };

  return (
    <React.Fragment>
      
      <div>
        Search your city weather
      </div>
      <div onClick={IsOpen}>
        <FiSearch/>
      </div>
      
    </React.Fragment>
  )
}

export default Hero
