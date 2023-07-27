import { pricingData } from "mockData";
import styles from "./page.module.scss";
import { PricingCard, Title, ImageFallback } from "app/components";
import bgImgSecSeven from "public/images/join-section-bg.webp";
import dataPr from "app/locales/en/pricing-page.json";

export default function Pricing() {
  return (
    <main className={styles.pricingPage}>
      <section className={styles.secOne}>
        <div className={`container`}>
          <div className={styles.titleWrapper}>
            <Title
              headingOne={dataPr.secOne.headingOne}
              description={dataPr.secOne.description}
            />
          </div>
          <div className={styles.pricingWrapper}>
            {pricingData?.map((item, i) => (
              <PricingCard key={i} data={item} maskImg />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.secTwo}>
        <div className={`container ${styles.containerSe}`}>
          <div className={styles.content}>
            <div className={styles.titleWrapper}>
              <Title
                headingTwo={dataPr.secTwo.title}
                description={dataPr.secTwo.description}
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
