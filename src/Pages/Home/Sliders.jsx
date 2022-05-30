import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../Home/Styles/styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Slide from "./Slide";

const Sliders = () => {
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    fetch("slide.json")
      .then((res) => res.json())
      .then((data) => setSliders(data));
  }, []);
  return (
    <div className="bg-neutral">
      <h1 className="text-secondary text-4xl text-center py-16">Title 1</h1>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={1.8}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {sliders.map((slider) => (
          <SwiperSlide>
            <Slide key={slider.id} slider={slider} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sliders;
