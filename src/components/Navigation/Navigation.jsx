"use client"
import React, { useState } from 'react'
import styles from "./Navigation.module.scss";
import { links } from "./dataLinks";
import InfiniteNav from '../InfiniteNav/InfiniteNav';
import LanguageChoose from '../LanguageChoose/LanguageChoose';
import { AnimatePresence, motion } from "framer-motion";


const Navigation = () => {
  const [menuActive, setActive] = useState(false);

  return (
    <div className={styles.navWrap}>
      {!menuActive && (
        <div className={styles.navUse}>
          <LanguageChoose />
          <p
            className={styles.menuM}
            onClick={() => setActive((prev) => !prev)}
          >
            M
          </p>
        </div>
      )}

      <AnimatePresence>
        {menuActive && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
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
}

export default Navigation