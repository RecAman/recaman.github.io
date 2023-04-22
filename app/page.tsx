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
const Gallery = dynamic(() => import("@/components/Gallery/Gallery"));

// const Slideshow = dynamic(() => import("./Slideshow/Slideshow"), {
//   ssr: false,
// });

export default function Home() {
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
                headingOne="Subject Matter Avatars"
                description="Turn expert knowledge into precise searchable answers"
              />
            </div>
          </div>
        </div>
        <div className={styles.secBgVideo}>
          <video className={styles.video} autoPlay loop muted>
            <source src="/video/homeSec-1.webm" />
          </video>
        </div>
      </section>

      <section className={styles.secTwo}>
        <div className={`container ${styles.containerFluid}`}>
          <div className={styles.content}>
            <Title headingTwo="What is Nesh?" />
            <div className={styles.videoWrapper}>
              <ImageFallback
                src="/images/defaultImg.png"
                alt="Picture of the author"
                width={785}
                height={440}
              />
            </div>
          </div>
        </div>
        <div className={styles.secBgImg}>
          <ImageFallback src={whatIsBg} alt="what-is" priority />
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
              headingTwo="Experiences"
              description="These industries are using Nesh to access their technical knowledge"
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
              headingTwo="Answers to all your"
              endTitle="Questions"
              description="Nesh is constantly learning, getting smarter, and answering more questions. Here’s the latest count"
            />
            <div className={styles.imageWrap}>
              <ImageFallback
                src="/images/avatar.gif"
                alt="Picture of the author"
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
              startText="New, Top, and Trending"
              centerText="New, Top, and Trending"
              endText="New, Top, and Trending"
            />
            <p className={styles.textWrapper}>
              Understand the pulse of the Industry and see how Nesh is being
              used
            </p>
          </div>
        </div>
        <div className={styles.galleryWrap}>
          <Gallery data={...secSevenSlideData} />
        </div>
      </section>

      <section className={`secEight ${styles.secEight}`}>
        <div className={`container ${styles.containerSe}`}>
          <div className={styles.content}>
            <Title
              className={styles.title}
              headingTwo="Latest"
              description="Blogs, News, Papers, and Videos from and about us"
            />
          </div>
        </div>
        <div className={styles.galleryWrap}>
          <Gallery data={...secEightSlideData} grid maskImg />
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
              headingTwo="Let’s do this"
              description="See a live demo of Nesh or sign up for our upcoming Webinar."
            />
            <div className={styles.btnWrapper}>
              <BtnLink label="Request Demo" path="/request-demo" secondary />
              <BtnLink label="Sign Up" path="/signup" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
