import React from 'react';
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";

export default function SearchIcon({setIsOpen}) {
  
  const IsOpen = () => {
    setIsOpen(true)
  };

  return (
    <React.Fragment>
        <div className='grid items-center text-white cursor-pointer md:text-md lg:text-xl' onClick={IsOpen}>
          <FiSearch/>
        </div>
    </React.Fragment>
  )
}
