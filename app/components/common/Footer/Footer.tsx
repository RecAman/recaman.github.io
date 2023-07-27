"use client";
import Link from "next/link";
import { ImageFallback } from "app/components";
import Menu from "@/components/Menu/Menu";
import styles from "./Footer.module.module.scss";

const Footer = () => {
  const dataMenu = [
    { label: "About Us", path: "/about" },
    { label: "CAREERS", path: "/careers" },
    { label: "PARTNERSHIPS", path: "/partnerships" },
    { label: "WHITE PAPERS", path: "/white-paper" },
    { label: "TERMS OF SERVICE", path: "/terms-of-service" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.containerSe}`}>
        <div className={styles.secLogo}>
          <div className={styles.logoWrapper}>
            <Link href="/">
              <ImageFallback
                className={styles.logo}
                src="/images/logo-no-background.svg"
                alt="RecAman logo"
                width={150}
                height={29}
              />
            </Link>
          </div>
          <div className={styles.colRight}>
            <div className={styles.menuWrapper}>
              <Menu data={...dataMenu} />
            </div>
            <div className={styles.addressWrapper}>
              <address className="footer-address">address</address>
              <div className={styles.emailWrapper}>
                <h4>Want to know what RecAman is up to?</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={`container  ${styles.containerSe}`}>
          <div className={styles.socialWrapper}>
            <p className={styles.copyrightWrapper}>
              Copyright © 2023 Hello RecAman Inc. All Rights Reserved.
            </p>
            <div className={styles.social}>
              <Link href="/">
                <ImageFallback
                  src="/images/linkedin.svg"
                  alt="linkedin"
                  width={32}
                  height={32}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
