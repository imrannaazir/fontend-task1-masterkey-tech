import React from "react";

const Feature = () => {
  return (
    <div className="bg-neutral pb-4">
      {/* title */}
      <div class="relative flex py-5 items-center">
        <div class="flex-grow border-t border-black border-dashed"></div>
        <span class="flex-shrink mx-4 text-4xl text-secondary ">
          AVAILABLE FOR EVERYONE
        </span>
        <div class="flex-grow border-t border-black  border-dashed"></div>
      </div>
      <h3 className="text-center text-2xl text-accent mb-28">
        Here will be the text
      </h3>

      {/* features */}
      <div className="flex justify-evenly">
        <div>
          <div className="text-center">
            <div className="p-14 bg-white rounded-full">
              <img
                className="w-[100px]"
                src="https://i.ibb.co/Fwmm2Rt/sppeker.png"
                alt=""
              />
            </div>
            <p className="text-lg my-5">Text 1</p>
            <p className="bg-secondary text-white w-full rounded-full py-2 text-lg">
              hello 1
            </p>
          </div>
        </div>

        <div>
          <div className="text-center">
            <div className="p-14 bg-white rounded-full">
              <img
                className="w-[100px]"
                src="https://i.ibb.co/Kz1THLW/plane.png"
                alt=""
              />
            </div>
            <p className="text-lg my-5">Text 1</p>
            <p className="bg-secondary text-white w-full rounded-full py-2 text-lg">
              hello 1
            </p>
          </div>
        </div>

        <div>
          <div className="text-center">
            <div className="p-14 bg-white rounded-full">
              <img
                className="w-[100px]"
                src="https://i.ibb.co/mvwm7jL/wirless.png"
                alt=""
              />
            </div>
            <p className="text-lg my-5">Text 1</p>
            <p className="bg-secondary text-white w-full rounded-full py-2 text-lg">
              hello 1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
