import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-neutral">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/rfnLqS4/Banaer.png"
          alt=""
          className=" w-[500px]"
        />
        <div>
          <h1 className="text-5xl font-bold">Best Solution for Ads</h1>
          <p className="py-6">
            Helping Our Clients Drive Over $5.3B in Annual Revenue
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
