import React from 'react'
import PlaceOrder from './PlaceOrder';
import MainComponent from './MainComponent';

const Trade = () => {
  return (
    <div className='flex gap-x-2 pt-2 grow min-h-0'>
        <PlaceOrder/>
        <MainComponent/>
    </div>
  )
}

export default Trade