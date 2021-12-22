import React from 'react';
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import { IconContext } from 'react-icons'

function Hero({setIsOpen}) {

  const IsOpen =() =>{
    setIsOpen(true)
  };

  return (
      <React.Fragment>
        <div className='bg-orange-500 flex justify-center gap-5 text-center relative top-2/4 left-2/4 translate-x-55'>
          <h1>Search your city weather</h1>
        <IconContext.Provider value={{color: '#000000'}}>
          <div className='bg-yellow-200 grid content-center' onClick={IsOpen}>
            <FiSearch/>
          </div>
        </IconContext.Provider>
        </div>
      </React.Fragment>
  )
}

export default Hero
