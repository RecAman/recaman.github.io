import styles from "./page.module.scss";
import { Cards, ImageFallback, Title } from "app/components";
import aboutData from "app/locales/en/about-page.json";
import bgImg from "public/images/aout-bg.webp";
import bgImgSecSeven from "public/images/join-section-bg.webp";

import {
  secFiveAboutData,
  secFourAboutData,
  secSixAboutData,
  secTwoAboutData,
} from "mockData";
import Gallery from "app/components/Gallery/Gallery";

export default function About() {
  return (
    <main className={styles.aboutPage}>
      <section className={styles.secOne}>
        <div className={`container`}>
          <div className={styles.titleWrapper}>
            <Title headingOne={aboutData.secOne.title} />
          </div>
        </div>
        <div className={styles.imageWrap}>
          <ImageFallback alt="" src={bgImg} fill sizes="100vw" />
        </div>
      </section>

      <section className={`${styles.secTwo}`}>
        <div className={`container ${styles.containerFluid}`}>
          <div className={styles.cardWrapper}>
            {secTwoAboutData?.map((item, i) => (
              <Cards key={i} className={styles.cards} data={item} />
            ))}
          </div>
        </div>
      </section>

      {/* <section className={`secThree ${styles.secThree}`}>
        <div className={`container ${styles.containerFluid}`}>
          <div className={styles.content}>
            <div className={styles.videoWrapper}>secThree</div>
          </div>
        </div>
      </section> */}

      <section className={`${styles.secFour}`}>
        <div className={`container ${styles.containerFluid}`}>
          <div className={`row`}>
            <div className={`col-lg-4`}>
              <div className={styles.titleWrapper}>
                <Title
                  headingTwo={aboutData.secFour.title}
                  description={aboutData.secFour.description}
                />
              </div>
            </div>
            <div className={`col-lg-8`}>
              <div className={styles.teamWrapper}>
                {secFourAboutData?.map((item, i) => (
                  <Cards
                    key={i}
                    className={styles.cards}
                    data={item}
                    vertical
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.secFive}`}>
        <div className={`container ${styles.containerSe}`}>
          <Title headingTwo={aboutData.secFive.title} />
        </div>
        <div className={styles.galleryWrap}>
          <Gallery
            data={...secFiveAboutData}
            className="swiperCenteredAuto"
            slidesPerView={"auto"}
            galleryImg
          />
        </div>
      </section>

      <section className={`${styles.secSix}`}>
        <div className={`container ${styles.containerSe}`}>
          <Title headingTwo={aboutData.secFive.title} />
        </div>
        <div className={styles.galleryWrap}>
          <Gallery data={...secSixAboutData} galleryText slidesPerView={4} />
        </div>
      </section>

      <section className={styles.secSeven}>
        <div className={`container ${styles.containerSe}`}>
          <div className={styles.content}>
            <div className={styles.titleWrapper}>
              <Title
                headingTwo={aboutData.secSeven.title}
                description={aboutData.secSeven.description}
              />
            </div>
          </div>
        </div>
        <div className={styles.imageWrap}>
          <ImageFallback alt="" src={bgImgSecSeven} fill sizes="100vw" />
        </div>
      </section>
    </main>
  );
}
