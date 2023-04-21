import React, { useEffect, useState } from 'react'
import ChartTop from './ChartTop';
import OrderBook from './OrderBook';
import Graph from './Graph';
import Tabs from './Tabs';

const MainComponent = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  console.log(screenWidth)

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='flex flex-col gap-2 w-full'>
        <ChartTop/>
{screenWidth < 1920 ? (<><div className="grow flex gap-2 min-h-0 overflow-hidden">
        <OrderBook />
        <Graph />
      </div><Tabs /></>
) :(<>
<div className="grow flex gap-2 min-h-0 overflow-hidden">
        <OrderBook />
        <div className="space-y-2 w-full flex flex-col min-h-0">
        
              <Graph />

          <Tabs />
        

        </div>
</div>
</>)}
    </div>
  )
}

export default MainComponent