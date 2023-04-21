"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Grid } from "swiper";
import { Cards, TextCard } from "app/components";
import { FunctionComponent, ReactNode } from "react";
import { CardsData } from "@/interfaces/data.type";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/free-mode";
import "swiper/css/pagination";

interface GalleryProps {
  data?: CardsData[];
  children?: ReactNode;
  grid?: boolean;
  maskImg?: boolean;
}

const Gallery: FunctionComponent<GalleryProps> = ({ maskImg, grid, data }) => {
  return (
    <>
      {!grid && (
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          freeMode={true}
          // navigation
          centeredSlides={true}
          modules={[FreeMode]}
          className="gallery"
        >
          {data?.map((x, i) => {
            return (
              <SwiperSlide key={i}>
                <TextCard description={x.description} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}

      {grid && (
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
          }}
          centeredSlides={true}
          spaceBetween={30}
          freeMode={true}
          modules={[Grid, FreeMode]}
          className="galleryGrid"
        >
          {data?.map((x, i) => {
            return (
              <SwiperSlide key={i}>
                <Cards data={x} maskImg={maskImg} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
};

export default Gallery;
