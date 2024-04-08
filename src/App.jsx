import { useState, useRef } from "react";
import { createContext } from "react";
import "./App.css";
import Home from "./components/Home";
import Porfolio from "./components/Portfolio";
import Contact from "./components/Contact";
const MyContext = createContext();

const scrollToSelection = (elementRef) => {
  if (elementRef && elementRef.current) {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  }
};
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const contextValue = {
    scrollToSelection,
    homeRef,
    aboutRef,
    portfolioRef,
    contactRef,
  };
  return (
    <MyContext.Provider value={contextValue}>
      <Home
        homeRef={homeRef}
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
        scrollToSelection={scrollToSelection}
      />
      <Porfolio portfolioRef={portfolioRef} />
      <Contact contactRef={contactRef} />
    </MyContext.Provider>
  );
}

export { App, MyContext, scrollToSelection };
