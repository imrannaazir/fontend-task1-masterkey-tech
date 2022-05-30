import React from "react";
import Analytics from "./Analytics";
import Banner from "./Banner";
import Feature from "./Feature";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Feature />
      <Analytics />
    </div>
  );
};

export default Home;
