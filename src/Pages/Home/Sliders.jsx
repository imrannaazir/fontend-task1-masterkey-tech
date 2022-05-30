import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../Home/Styles/styles.css";
import "../Home/Styles/Swiper.css";

// import required modules
import { Navigation, Pagination } from "swiper";
import Slide from "./Slide";

const Sliders = () => {
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    fetch("slide.json")
      .then((res) => res.json())
      .then((data) => setSliders(data));
  }, []);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="bg-neutral shadow-2xl">
      <h1 className="text-secondary text-4xl text-center py-16">
        What our clients say
      </h1>
      <Swiper
        cssMode={true}
        navigation={true}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        pagination={true}
        slidesPerView={1.8}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {sliders.map((slider, i) => (
          <SwiperSlide>
            <Slide key={i} slider={slider} />
          </SwiperSlide>
        ))}
        <div className="flex justify-center gap-12 mb-16">
          <div
            className="cursor-pointer bg-white rounded-full w-14 h-14 text-4xl text-secondary flex justify-center items-center"
            ref={prevRef}
          >
            {"<"}
          </div>
          <br />
          <span
            className="cursor-pointer bg-white rounded-full w-14 h-14 text-4xl text-secondary flex justify-center items-center"
            ref={nextRef}
          >
            {">"}
          </span>
        </div>
      </Swiper>
    </div>
  );
};

export default Sliders;
