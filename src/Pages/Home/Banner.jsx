import React from "react";

const Banner = () => {
  return (
    <div class="hero min-h-screen bg-neutral">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/rfnLqS4/Banaer.png"
          alt=""
          class=" w-[500px]"
        />
        <div>
          <h1 class="text-5xl font-bold">Best Solution for Ads</h1>
          <p class="py-6">
            Helping Our Clients Drive Over $5.3B in Annual Revenue
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
