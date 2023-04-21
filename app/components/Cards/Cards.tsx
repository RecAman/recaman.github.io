import { FunctionComponent } from "react";
import styles from "./Cards.module.scss";
import { Title, ImageFallback } from "app/components";
import { CardsData } from "@/interfaces/data.type";
import Link from "next/link";

interface CardsProps {
  maskImg?: boolean;
  className?: string;
  data?: CardsData;
}

export const Cards: FunctionComponent<CardsProps> = ({
  className,
  maskImg,
  data,
}) => {
  return (
    <div className={`${styles.cards} ${className ?? ""}`}>
      {/* video */}
      {data?.srcVideo && (
        <div className={styles.videoWrapper}>
          <video className={styles.video} preload="none" autoPlay muted loop>
            <source src={data?.srcVideo} />
          </video>
        </div>
      )}

      {/* image */}
      {data?.srcImg && (
        <div className={maskImg ? styles.maskImgWrapper : ""}>
          <ImageFallback
            src={data?.srcImg}
            alt={data?.alt || "image"}
            width={data?.width}
            height={data?.height}
          />
        </div>
      )}

      {/* text */}
      <div className={`animation ${styles.textWrapper}`}>
        <Title
          label={data?.label}
          headingOne={data?.headingOne}
          headingTwo={data?.headingTwo}
          headingThree={data?.headingThree}
          description={data?.description}
          headingFour={data?.headingFour}
          headingFive={data?.headingFive}
          headingSix={data?.headingSix}
        />
        {data?.href && (
          <Link className={styles.more} href={data?.href || "/"}>
            read more
          </Link>
        )}
      </div>
    </div>
  );
};
