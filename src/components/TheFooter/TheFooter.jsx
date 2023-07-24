import React from "react";
import styles from "./TheFooter.module.scss";
import Image from "next/image";
import footerImg from "@/assets/images/footer-bg.png"
import Link from "next/link";
const TheFooter = () => {
  return (
    <footer className={styles.footerWrap}>
      <div className={styles.imgWrap}>
        <Image src={footerImg} alt={"footer-bg"} />
      </div>
      <div className={styles.footerContent}>
        <div className={styles.footerContent}>
          <nav className={styles.navFooter}>
            <ul>
              <li>
                <Link href={"/funktion"}>Funktion</Link>
              </li>
              <li>
                <Link href={"/bereiche"}>Bereiche</Link>
              </li>
              <li>
                <Link href={"/produkte"}>Produkte</Link>
              </li>
              <li>
                <Link href={"/world"}>CoolWorld</Link>
                
              </li>
              <li>
                <Link href={"/kontakt"}>Kontakt</Link>
                
              </li>
            </ul>
          </nav>
          <div className={styles.circleNav}>
            <div className={styles.circleNavItem}>Mail</div>
            <div className={styles.circleNavItem}>Maps</div>
          </div>
          <div className={styles.socialWrap}>
            <nav className={styles.socialNav}>
              <ul>
                <li>
                  <Link href={"/impressum"}>Impressum</Link>
                </li>
                <li>
                  <Link href={"/datenschutz"}>Datenschutz</Link>
                </li>
                <li>
                  <Link href={"facebook.com"}>Facebook</Link>
                </li>
                <li>
                  <Link href={"instagram.com"}>Instagram</Link>
                </li>
              </ul>
            </nav>
            <div className={styles.otherInfo}>
              <p>
                Instagram TheCoolWorld GmbH, Dorf 23e, 6210 Wiesing, Austria
              </p>
              <div className={styles.socialContact}>
                <p>
                  <span>
                    <Link href={"tel:+43 676 560 62 22"}>
                      +43 676 560 62 22
                    </Link>
                  </span>
                  <span>|</span>
                  <span>
                    <Link href={"mailto:info@thecoolworld.at"}>
                      info@thecoolworld.at
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
