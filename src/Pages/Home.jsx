import React from "react"; 
import Hero from "../Components/Hero";
import Main from "../Components/Main";

function Home({ children }) {
  return (
    <> 
      <Hero/>
      <Main />
      {children}
    </>
  );
}

export default Home;
