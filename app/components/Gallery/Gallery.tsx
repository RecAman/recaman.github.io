"use client";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { FreeMode, Grid } from "swiper";
import { Cards, ImageFallback, TextCard } from "app/components";
import { FunctionComponent, ReactNode } from "react";
import { CardsData } from "@/interfaces/data.type";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/free-mode";
import "swiper/css/pagination";

interface GalleryProps extends SwiperProps {
  data?: CardsData[];
  children?: ReactNode;
  maskImg?: boolean;
  showGrid?: number;
  galleryImg?: boolean;
  galleryText?: boolean;
}

const Gallery: FunctionComponent<GalleryProps> = ({
  className,
  maskImg,
  showGrid,
  data,
  galleryImg,
  galleryText,
  ...props
}) => {
  return (
    <>
      <Swiper
        {...props}
        spaceBetween={20}
        freeMode={true}
        // navigation
        centeredSlides={true}
        modules={[Grid, FreeMode]}
        className={className}
        grid={{
          rows: showGrid,
        }}
      >
        {data?.map((x, i) => {
          return (
            <SwiperSlide key={i}>
              {galleryText && <TextCard data={x} />}
              {galleryImg && (
                <ImageFallback
                  src={x.srcImg || ""}
                  alt={x.alt || ""}
                  width={400}
                  height={400}
                />
              )}
              {showGrid && <Cards data={x} maskImg={maskImg} />}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Gallery;
