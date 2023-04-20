import React from 'react'
import PlaceOrder from './PlaceOrder';
import MainComponent from './MainComponent';

const Trade = () => {
  return (
    <div className='flex gap-2 pt-2 grow'>
        <PlaceOrder/>
        <MainComponent/>
    </div>
  )
}

export default Trade