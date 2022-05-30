import React from "react";

const Slide = ({ slider: { img, title } }) => {
  return (
    <div className="card bg-white m-8 p-5 shadow-xl">
      <div className="flex justify-center items-center gap-12 border-2 border-dotted border-primary rounded-2xl">
        <img className="w-48 rounded-xl" src={img} alt="" />
        <div className="text-left">
          <h1 className="text-secondary mb-8 font-bold">{title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            velit. Natus ipsum modi doloribus repudiandae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
