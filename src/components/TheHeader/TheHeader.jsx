import React from "react";
import Image from "next/image";
import styles from "./TheHeader.module.scss";
import Navigation from "../Navigation/Navigation";
import Link from "next/link";

const TheHeader = () => {
  return (
    <header className={`main-container ${styles.header}`}>
      <div className={styles.imgWrap}>
        <Link href={'/'}>
        <Image src="/logo.png" alt="Logo" width={314} height={58} priority />
        </Link>
      </div>
      <Navigation />
      
    </header>
  );
};

export default TheHeader;
