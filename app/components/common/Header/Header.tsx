"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Menu from "@/components/Menu/Menu";
import styles from "./Header.module.scss";
import { BtnLink, ImageFallback } from "app/components";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    if (window.scrollY > 10 && !scrolling) {
      console.log("header");
      setScrolling(true);
    }
    const onScroll = (e: any) => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolling]);

  const dataMenu = useMemo(
    () => [
      { label: "Home", path: "/", targetSegment: null },
      { label: "Pricing", path: "/pricing", targetSegment: "pricing" },
      { label: "About Us", path: "/about", targetSegment: "about" },
      { label: "Contact", path: "/contact", targetSegment: "contact" },
    ],
    []
  );

  return (
    <header
      className={`${styles.header} ${scrolling && styles.sticky} ${
        styles.darkHeader
      }`}
    >
      <div className={`container`}>
        <div className={styles.content}>
          <div className={styles.logoWrapper}>
            <Link href="/">
              <ImageFallback
                className={styles.logo}
                src={"/images/logo-no-background.svg"}
                alt="RecAman logo"
                width={230}
                height={230}
              />
            </Link>
          </div>
          <div className={styles.menuWrapper}>
            <Menu data={...dataMenu} />
          </div>
          <div className={styles.loginWrapper}>
            <BtnLink label="Login" path="/login" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
