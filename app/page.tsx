"use client";
import dynamic from "next/dynamic";
import styles from "./styles/page.module.scss";
import whatIsBg from "public/images/what-is-bg.webp";
import {
  BtnLink,
  Cards,
  ImageFallback,
  TextSlider,
  Title,
} from "app/components";
// import Slideshow from "@/components/Slideshow/Slideshow";
// import Gallery from "@/components/Gallery/Gallery";

import {
  secThreeSlideData,
  secFourSlideData,
  secFiveSlideData,
  secSevenSlideData,
  secEightSlideData,
} from "mockData";

const Slideshow = dynamic(() => import("@/components/Slideshow/Slideshow"));
const Gallery = dynamic(() => import("@/components/Gallery/Gallery"), {
  ssr: false,
});
import data from "./locales/en/home-page.json";
import commonData from "./locales/en/common.json";
import { useEffect, useState } from "react";

// const Slideshow = dynamic(() => import("./Slideshow/Slideshow"), {
//   ssr: false,
// });

export default function Home() {
  const [imgSrc, setImgSrc] = useState(false);

  useEffect(() => {
    setImgSrc(true);
  }, [imgSrc]);
  return (
    <main className={styles.homePage}>
      <section className={styles.secOne}>
        <div className={`container`}>
          <div className={styles.content}>
            <div className={styles.imageWrap}>
              <ImageFallback
                src="/images/avatar.gif"
                alt="Picture of the author"
                width={400}
                height={400}
              />
            </div>
            <div className={styles.textWrapper}>
              <Title
                headingOne={data.secOne.title}
                description={data.secOne.description}
              />
            </div>
          </div>
        </div>
        <div className={styles.secBgVideo}>
          {/* <video
            className={`${styles.video} lazy`}
            autoPlay
            muted
            loop
            playsInline
          >
            <source data-src="/video/homeSec-1.webm" />
          </video> */}
          <video className={`${styles.video}`} autoPlay muted loop playsInline>
            <source src="/video/homeSec-1.webm" />
          </video>
        </div>
      </section>

      <section className={styles.secTwo}>
        <div className={`container ${styles.containerFluid}`}>
          <div className={styles.content}>
            <Title className={styles.title} headingTwo={data.secTwo.title} />
            <div className={styles.videoWrapper}>
              <ImageFallback
                src="/images/defaultImg.png"
                alt={data.secTwo.title}
                width={785}
                height={440}
              />
            </div>
          </div>
        </div>
        <div className={styles.secBgImg}>
          <ImageFallback src={whatIsBg} alt={data.secTwo.title} />
        </div>
      </section>

      <section className={`secThree ${styles.secThree}`}>
        <div className={`container ${styles.containerFluid}`}>
          <div className={styles.content}>
            <div className={styles.videoWrapper}>
              <Slideshow data={...secThreeSlideData} />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.secFour}`}>
        <div className={`container ${styles.containerFluid}`}>
          <div className={styles.content}>
            <div className={styles.videoWrapper}>
              <Slideshow data={...secFourSlideData} />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.secFive}`}>
        <div className={`container ${styles.containerFluid}`}>
          <div className={styles.content}>
            <Title
              className={styles.title}
              headingTwo={data.secFive.title}
              description={data.secFive.description}
            />
            <div className={styles.cardWrapper}>
              {secFiveSlideData?.map((item, i) => (
                <Cards key={i} className={styles.cards} data={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.secSix}`}>
        <div className={`container ${styles.containerSe}`}>
          <div className={styles.content}>
            <Title
              className={styles.title}
              headingTwo={data.secSix.title}
              endTitle={data.secSix.endTitle}
              description={data.secSix.description}
            />
            <div className={styles.imageWrap}>
              <ImageFallback
                src="/images/avatar.gif"
                alt="avatar"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.secSeven}`}>
        <div className={`container ${styles.containerSe}`}>
          <div className={styles.content}>
            <TextSlider
              startText={data.secSeven.title}
              centerText={data.secSeven.title}
              endText={data.secSeven.title}
            />
            <p className={styles.textWrapper}>{data.secSeven.description}</p>
          </div>
        </div>
        <div className={styles.galleryWrap}>
          <Gallery data={...secSevenSlideData} slidesPerView={4} galleryText />
        </div>
      </section>

      <section className={`secEight ${styles.secEight}`}>
        <div className={`container ${styles.containerSe}`}>
          <div className={styles.content}>
            <Title
              className={styles.title}
              headingTwo={data.secEight.title}
              description={data.secEight.description}
            />
          </div>
        </div>
        <div className={styles.galleryWrap}>
          <Gallery
            data={...secEightSlideData}
            slidesPerView={3}
            showGrid={2}
            maskImg
          />
        </div>
      </section>

      <section className={`${styles.secNine}`}>
        <div className={`container ${styles.containerSe}`}>
          <div className={styles.content}>
            <div className={styles.imageWrap}>
              <ImageFallback
                src="/images/avatar.gif"
                alt="Picture of the author"
                width={400}
                height={400}
              />
            </div>
            <Title
              className={styles.title}
              headingTwo={data.secNine.title}
              description={data.secNine.description}
            />
            <div className={styles.btnWrapper}>
              <BtnLink
                label={commonData.requestDemo}
                path="/request-demo"
                secondary
              />
              <BtnLink label={commonData.signupBtn} path="/signup" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
