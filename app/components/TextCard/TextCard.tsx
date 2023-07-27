import { FunctionComponent } from "react";
import styles from "./TextCard.module.scss";
import { CardsData } from "@/interfaces/data.type";
import { ImageFallback } from "app/components";

interface TextCardProps {
  className?: string;
  data: CardsData;
}

export const TextCard: FunctionComponent<TextCardProps> = ({
  className,
  data,
}) => {
  return (
    <div className={`${styles.textCard} ${className ?? ""}`}>
      {data.srcImg && (
        <ImageFallback
          src={data.srcImg || ""}
          alt="avatar"
          width={45}
          height={45}
          className={styles.iconImg}
        />
      )}
      {data.title && <h5 className={styles.title}>{data.title}</h5>}
      {data.description && (
        <p className={`${styles.description} ${data.title ? styles.desc : ""}`}>
          {data.description}
        </p>
      )}
      {data.location && (
        <span className={styles.location}>{data.location}</span>
      )}
    </div>
  );
};
