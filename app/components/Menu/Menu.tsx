"use client";
import { FunctionComponent, memo } from "react";
import NavLink from "app/components/NavLink/NavLink";
import styles from "./Menu.module.scss";

interface MenuProps {
  data: { label: string; path: string; targetSegment?: string | null }[];
}

export const Menu: FunctionComponent<MenuProps> = ({ data }) => {
  return (
    <ul className={styles.menu}>
      {data.map((l, i) => (
        <li key={i}>
          <NavLink {...l} />
        </li>
      ))}
    </ul>
  );
};

export default memo(Menu);
