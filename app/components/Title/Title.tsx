import { FunctionComponent } from "react";
import styles from "./Title.module.scss";

interface TitleProps {
  className?: string;
  headingOne?: string;
  headingTwo?: string;
  headingThree?: string;
  headingFour?: string;
  headingFive?: string;
  headingSix?: string;
  endTitle?: string;
  label?: string;
  description?: string;
}

export const Title: FunctionComponent<TitleProps> = ({
  label,
  headingOne,
  headingTwo,
  headingThree,
  headingFour,
  headingFive,
  headingSix,
  description,
  className,
  endTitle,
}) => {
  return (
    <div className={`${styles.title} ${className ?? ""}`}>
      {label && <span className={styles.label}>{label}</span>}
      {headingOne && <h1>{headingOne}</h1>}
      {headingTwo && (
        <h2>
          {headingTwo}
          {endTitle && (
            <span className={styles.endTitle}>{` ${endTitle}`}</span>
          )}
        </h2>
      )}
      {headingThree && <h3>{headingThree}</h3>}
      {headingFour && <h4>{headingFour}</h4>}
      {headingFive && <h5>{headingFive}</h5>}
      {headingSix && <h6>{headingSix}</h6>}
      {description && <p>{description}</p>}
    </div>
  );
};
