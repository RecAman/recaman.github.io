import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import styles from "./NavLink.module.scss";
import { FunctionComponent } from "react";

interface NavLinkProps {
  label: string;
  path: string;
  targetSegment?: string | null;
}

const NavLink: FunctionComponent<NavLinkProps> = ({
  label,
  path,
  targetSegment,
}) => {
  const activeSegment = useSelectedLayoutSegment();
  return (
    <Link
      className={`${styles.navLink} ${
        activeSegment === targetSegment ? styles.active : ""
      }`}
      href={path}
    >
      {label}
    </Link>
  );
};

export default NavLink;
