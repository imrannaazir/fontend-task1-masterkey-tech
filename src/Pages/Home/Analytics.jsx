import React from "react";

const Analytics = () => {
  return (
    <div className="bg-secondary pt-14">
      <p className="text-center text-white text-4xl">Analytics</p>
      <div className=" flex justify-evenly text-white py-24">
        <div className="avatar placeholder w-[25%] bg-transparent border-2 border-dashed rounded-full">
          <div className=" rounded-full w-full">
            <div className="text-center">
              <p className="text-6xl ">1 BN+</p>
              <p className="text-3xl mt-10">Daily Impression</p>
            </div>
          </div>
        </div>
        <div className="avatar placeholder w-[25%] bg-white text-secondary  rounded-full">
          <div className=" rounded-full w-full">
            <div className="text-center">
              <p className="text-6xl ">$500K+</p>
              <p className="text-3xl mt-10">Paid</p>
            </div>
          </div>
        </div>
        <div className="avatar placeholder w-[25%] bg-primary shadow-lg  rounded-full">
          <div className=" rounded-full w-full">
            <div className="text-center">
              <p className="text-6xl ">8K+</p>
              <p className="text-3xl mt-10">Global Publishers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
