"use client"
import React, { useState } from 'react'
import styles from "./Navigation.module.scss";
import { links } from "./dataLinks";
import InfiniteNav from '../InfiniteNav/InfiniteNav';
import LanguageChoose from '../LanguageChoose/LanguageChoose';
import { AnimatePresence, motion } from "framer-motion";


const Navigation = ({ modelStyle }) => {
  const [menuActive, setActive] = useState(false);

  return (
    <div className={styles.navWrap}>
      <div
        className={
          !menuActive
            ? `${styles.navUse} ${styles.navUseActive}`
            : styles.navUse
        }
      >
        <LanguageChoose modelStyle={modelStyle} />
        <p
          className={`${modelStyle ? styles.modeBlue: styles.modeMilk} ${styles.menuM} hbtn hb-fill-left`}
          onClick={() => setActive((prev) => !prev)}
        >
          M
        </p>
      </div>

      <AnimatePresence>
        {menuActive && (
          <motion.aside
            initial={{ x: "200%" }}
            animate={{
              x: "0",
            }}
            exit={{
              x: "200%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.8 }}
            className={styles.sidebar_aside}
          >
            <nav className={styles.nav}>
              <InfiniteNav
                links={links}
                handleActive={() => setActive((prev) => !prev)}
              />
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation