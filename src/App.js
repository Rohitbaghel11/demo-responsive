import React, { useState, useEffect } from "react";
import ConnectWallet from "./ConnectWallet";
import PlaceOrder from "./PlaceOrder";
import ChartTop from "./ChartTop";
import OrderBook from "./OrderBook";
import Graph from "./Graph";
import Tabs from "./Tabs";
import { useMediaQuery } from "@chakra-ui/react";
import LessThan1024 from "./LessThan1024";
import Trade from "./Trade";

function App() {
  // const [isSmallScreen] = useMediaQuery('(max-width: 1024px)');
  // const [showModal, setShowModal] = useState(false);
  // // const [isSmallScreen] = useMediaQuery('(max-width: 1200px)');
  // // const [isSmallScreen] = useMediaQuery('(max-width: 1200px)');
  // // const [showModal, setShowModal] = useState<boolean>();

  // useEffect(() => {
  //   if (isSmallScreen) {
  //     setShowModal(true);
  //   } else {
  //     setShowModal(false);
  //   }
  // }, [isSmallScreen]);

  // useEffect(() => {
  //   function handleResize() {
  //     setShowModal(window.innerWidth <= 1024);
  //   }

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia("(max-width: 1024px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    const handleMediaQueryChange = (e) => {
      setIsSmallScreen(e.matches);
    };

    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <LessThan1024 />
      ) : (
        <div className="flex flex-col h-[100vh] border-2 border-black">
          <ConnectWallet />
       <Trade/>
        
        </div>
      )}
    </>
  );
}

export default App;
