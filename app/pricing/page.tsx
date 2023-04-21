import { paricingData } from "mockData";
import styles from "./page.module.scss";
import { PricingCard, Title } from "app/components";

export default function Pricing() {
  return (
    <main className={styles.pricingPage}>
      <div className={`container`}>
        <div className={styles.titleWrapper}>
          <Title
            headingOne="Pricing and Value"
            description="With 3 enterprise applications, Nesh pricing is built to suit teams of all sizes. Get in touch to learn more!"
          />
        </div>
        <div className={styles.paricingWrapper}>
          {paricingData?.map((item, i) => (
            <PricingCard key={i} data={item} maskImg />
          ))}
        </div>
      </div>
    </main>
  );
}
