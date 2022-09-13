import { Banner } from './Banner';
import { Banner2 } from './Banner2';
import { Banner3 } from './Banner3';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Carrousel2.css";

// import required modules
import { Navigation } from "swiper";

export function Carousel2 () {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><Banner/></SwiperSlide>
        <SwiperSlide><Banner2/></SwiperSlide>
        <SwiperSlide><Banner3/></SwiperSlide>
      </Swiper>
    </>
  );
}
