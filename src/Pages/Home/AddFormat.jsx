import React, { useState } from "react";

const AddFormat = () => {
  const [openAd, setOpenAd] = useState(1);
  console.log(openAd);
  return (
    <div className="bg-neutral">
      {/*section title */}
      <div class="relative flex py-5 items-center">
        <div class="flex-grow border-t border-black border-dashed"></div>
        <span class="flex-shrink mx-4 text-4xl text-secondary ">
          VERSATILE AD FORMATS
        </span>
        <div class="flex-grow border-t border-black  border-dashed"></div>
      </div>

      {/* button */}
      <div className=" flex justify-center gap-8">
        <button
          onClick={() => setOpenAd(1)}
          className={`btn btn-wide rounded-full ${
            openAd == 1 ? "btn-primary text-white" : "bg-base-300"
          }`}
        >
          POP-UNDER
        </button>
        <button
          onClick={() => setOpenAd(2)}
          className={`btn btn-wide rounded-full ${
            openAd == 2 ? "btn-primary text-white" : "bg-base-300"
          }`}
        >
          BANNER AD
        </button>
        <button
          onClick={() => setOpenAd(3)}
          className={`btn btn-wide rounded-full ${
            openAd == 3 ? "btn-primary text-white" : "bg-base-300"
          }`}
        >
          NATIVE
        </button>
        <button
          onClick={() => setOpenAd(4)}
          className={`btn btn-wide rounded-full ${
            openAd == 4 ? "btn-primary text-white" : "bg-base-300"
          }`}
        >
          SKIM
        </button>
      </div>
      {/* ads */}
      {openAd == 1 && <div className="w-full h-60">1</div>}
      {openAd == 2 && <div className="w-full h-60">2</div>}
      {openAd == 3 && <div className="w-full h-60">3</div>}
      {openAd == 4 && <div className="w-full h-60">4</div>}
    </div>
  );
};

export default AddFormat;
