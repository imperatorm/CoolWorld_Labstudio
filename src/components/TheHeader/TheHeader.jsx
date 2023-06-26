import React from "react";
import Image from "next/image";
import styles from "./TheHeader.module.scss";
import Navigation from "../Navigation/Navigation";

const TheHeader = () => {
  return (
    <header className={`main-container ${styles.header}`}>
      <div className={styles.imgWrap}>
        <Image src="/logo.png" alt="Logo" width={180} height={37} priority />
      </div>
      <Navigation />
      
    </header>
  );
};

export default TheHeader;
