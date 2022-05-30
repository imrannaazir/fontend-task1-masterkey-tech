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
      {openAd == 1 && (
        <div className="w-full flex px-[10%] gap-[10%] h-full py-16">
          <img src="https://api.lorem.space/image/movie?w=260&h=400" alt="" />
          <div className="flex flex-col justify-around">
            <div>
              {" "}
              <h1 className="text-lg text-primary">POP-UNDER</h1>
              <p className="text-lg">
                This is one of the most popular ads. After user’s click, this ad
                opens landing page in behind. So, the user experience is not
                hampered much.
              </p>
            </div>
            <button className="flex text-secondary">
              Learn More{" "}
              <svg
                className="w-4 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z" />
              </svg>
            </button>
          </div>
        </div>
      )}
      {openAd == 2 && (
        <div className="w-full flex px-[10%] gap-[10%] h-full py-16">
          <img src="https://api.lorem.space/image/movie?w=260&h=400" alt="" />
          <div className="flex flex-col justify-around">
            <div>
              {" "}
              <h1 className="text-lg text-primary">BANNER AD</h1>
              <p className="text-lg">
                Choose between the available banner formats. Highly effective ad
                for visibility.
              </p>
            </div>
            <button className="flex text-secondary">
              Learn More{" "}
              <svg
                className="w-4 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {openAd == 3 && (
        <div className="w-full flex px-[10%] gap-[10%] h-full py-16">
          <img src="https://api.lorem.space/image/movie?w=260&h=400" alt="" />
          <div className="flex flex-col justify-around">
            <div>
              {" "}
              <h1 className="text-lg text-primary">NATIVE</h1>
              <p className="text-lg">
                Ad format with the image and the title, that perfectly fits into
                the content of the site. Native ads are placed in the most
                visible areas of the page and, thus, this format shows good
                results and the level of interaction.
              </p>
            </div>
            <button className="flex text-secondary">
              Learn More{" "}
              <svg
                className="w-4 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {openAd == 4 && (
        <div className="w-full flex px-[10%] gap-[10%] h-full py-16">
          <img src="https://api.lorem.space/image/movie?w=260&h=400" alt="" />
          <div className="flex flex-col justify-around">
            <div>
              {" "}
              <h1 className="text-lg text-primary">SKIM</h1>
              <p className="text-lg">
                SKIM" is a link that a publisher inserts on a specific site
                element, and after clicking on it, an advertisement appears to
                the user. SKIM gives 100% control of your sold traffic amount,
                higher CR to advertisers and CPM rates to publishers.
              </p>
            </div>
            <button className="flex text-secondary">
              Learn More{" "}
              <svg
                className="w-4 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddFormat;
