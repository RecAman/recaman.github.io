import { FunctionComponent } from "react";
import styles from "./PricingCard.module.scss";
import { Cards } from "app/components";
import { CardsData } from "@/interfaces/data.type";

interface PricingCardProps {
  maskImg?: boolean;
  className?: string;
  data?: CardsData;
}

export const PricingCard: FunctionComponent<PricingCardProps> = ({
  className,
  maskImg,
  data,
}) => {
  return (
    <div className={`${styles.pricingCard} ${className ?? ""}`}>
      <Cards className={styles.cards} data={data} maskImg={maskImg} />
      <ul className={styles.desc}>
        {data?.desc?.map((d, i) => (
          <li key={i}>{d.text}</li>
        ))}
      </ul>
    </div>
  );
};
