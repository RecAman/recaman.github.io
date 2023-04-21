import { FunctionComponent } from "react";
import styles from "./TextSlider.module.scss";

interface TextSliderProps {
  className?: string;
  startText?: string;
  endTextSlider?: string;
  centerText?: string;
  endText?: string;
}

export const TextSlider: FunctionComponent<TextSliderProps> = ({
  centerText,
  startText,
  endText,
  className,
}) => {
  return (
    <h2 className={`${styles.textSlider} ${className ?? ""}`}>
      {startText && <span className={styles.startText}>{startText}</span>}
      {centerText && (
        <span className={styles.centerText}>{` ${centerText} `}</span>
      )}
      {endText && <span className={styles.endText}>{` ${endText}`}</span>}
    </h2>
  );
};
