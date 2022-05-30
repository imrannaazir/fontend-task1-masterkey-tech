import React from "react";
import Analytics from "./Analytics";
import Banner from "./Banner";
import Feature from "./Feature";
import Navbar from "./Navbar";
import Sliders from "./Sliders";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Feature />
      <Analytics />
      <Sliders />
    </div>
  );
};

export default Home;
