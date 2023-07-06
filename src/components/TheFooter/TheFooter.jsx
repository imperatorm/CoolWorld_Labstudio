import React from "react";
import styles from "./TheFooter.module.scss";
const TheFooter = () => {
  return (
    <footer
      className={styles.footerWrap}
      style={{ backgroundImage: "url(Images/footer.svg)" }}
    >
      <div className={styles.footerContent}>
        <nav className={styles.navFooter}>
          <ul>
            <li>Funktion</li>
            <li>Bereiche</li>
            <li>Produkte</li>
            <li>CoolWorld</li>
            <li>Kontakt</li>
          </ul>
        </nav>
        <div className={styles.circleNav}>
          <div className={styles.circleNavItem}>Mail</div>
          <div className={styles.circleNavItem}>Maps</div>
        </div>
        <div className={styles.socialWrap}>
          <nav className={styles.socialNav}>
            <ul>
              <li>Impressum</li>
              <li>Datenschutz</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </nav>
          <div className={styles.otherInfo}>
            <p>Instagram TheCoolWorld GmbH, Dorf 23e, 6210 Wiesing, Austria</p>
            <div className={styles.socialContact}>
              <p>
                <span>+43 676 560 62 22</span>
                <span>|</span>
                <span>info@thecoolworld.at</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;