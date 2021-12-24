import React from 'react';

export default function CityName({city}) {

  return (
    <React.Fragment>
      <h1 className='text-xl text-center p-1 lg:text-4xl lg:bg-black/30 lg:p-10 lg:rounded-md lg:mb-3 lg:text-white'>{city.name} ({city.country})</h1>
    </React.Fragment>
  )
};
