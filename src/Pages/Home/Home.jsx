import React from "react";
import AddFormat from "./AddFormat";
import Analytics from "./Analytics";
import Banner from "./Banner";
import Feature from "./Feature";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sliders from "./Sliders";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Feature />
      <AddFormat />
      <Analytics />
      <Sliders />
      <Footer />
    </div>
  );
};

export default Home;
