import Link from "next/link";
import styles from "./BtnLink.module.scss";
import { FunctionComponent } from "react";

interface BtnLinkProps {
  label?: string;
  path: string;
  className?: string;
  secondary?: boolean;
}

export const BtnLink: FunctionComponent<BtnLinkProps> = ({
  label,
  path = "/",
  className,
  secondary,
}) => {
  return (
    <Link
      className={`${styles.btnLink} ${secondary && styles.secondary} ${
        className ?? ""
      }`}
      href={path}
    >
      <span>{label}</span>
    </Link>
  );
};
