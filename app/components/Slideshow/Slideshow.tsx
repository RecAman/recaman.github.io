"use client";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  EffectFade,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { Cards } from "app/components";
import { FunctionComponent, ReactNode } from "react";
import { CardsData } from "@/interfaces/data.type";

interface SlideshowProps {
  data?: CardsData[];
  children?: ReactNode;
}

const Slideshow: FunctionComponent<SlideshowProps> = ({ data }) => {
  return (
    <Swiper
      className="slideshow"
      modules={[Autoplay, Navigation, Pagination, Scrollbar, EffectFade, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      effect={"fade"}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {data?.map((x, i) => {
        return (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <div className={isActive ? "active" : "notActive"}>
                <Cards data={x} />
              </div>
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slideshow;
