import styles from "./page.module.scss";
import { Title, ImageFallback } from "app/components";
import contactData from "app/locales/en/contact-page.json";
import Link from "next/link";

export default function contact() {
  return (
    <main className={styles.contactPage}>
      <section className={styles.secOne}>
        <div className={`container`}>
          <div className={styles.titleWrapper}>
            <Title
              description={contactData.secOne.description}
              headingOne={contactData.secOne.title}
            />
          </div>
          <div className={styles.contact}>
            <div className={styles.addressWrapper}>
              <address>
                <span className={styles.address}>
                  {" "}
                  808 Travis St, Suite 400, Houston, TX 77002{" "}
                </span>
                <a href="imankhanijazani@gmail.com">
                  imankhanijazani@gmail.com
                </a>
              </address>
            </div>
            <div className={styles.social}>
              <Link href="/">linkedin</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
