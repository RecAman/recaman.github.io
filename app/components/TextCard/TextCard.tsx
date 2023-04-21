import { FunctionComponent } from "react";
import styles from "./TextCard.module.scss";

interface TextCardProps {
  className?: string;
  description?: string;
}

export const TextCard: FunctionComponent<TextCardProps> = ({
  description,
  className,
}) => {
  return (
    <div className={`${styles.textCard} ${className ?? ""}`}>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
