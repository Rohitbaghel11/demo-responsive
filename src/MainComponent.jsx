import React from 'react'
import ChartTop from './ChartTop';
import OrderBook from './OrderBook';
import Graph from './Graph';
import Tabs from './Tabs';

const MainComponent = () => {
  return (
    <div className='flex flex-col gap-1 w-full'>
        <ChartTop/>
<div className="grow flex gap-1">
    <OrderBook/>
    <Graph/>
</div>
<Tabs/>
    </div>
  )
}

export default MainComponent