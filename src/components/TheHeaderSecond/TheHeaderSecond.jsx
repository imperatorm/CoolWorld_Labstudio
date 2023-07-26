import React from "react";
import Image from "next/image";
import styles from "./TheHeaderSecond.module.scss";
import Navigation from "../Navigation/Navigation";
import Link from "next/link";


const TheHeaderSecond = ({children}) => {
  return (
    <div className={` ${styles.headerWrapper} second-header`}>
      <header className={`${styles.header}`}>
        <div className={styles.imgWrap}>
          <Link href={"/"}>
            <Image
              src="/logo-blue.png"
              alt="Logo"
              width={180}
              height={37}
              priority
            />
          </Link>
        </div>
        <Navigation modelStyle={true} />
      </header>
      {children}
    </div>
  );
};

export default TheHeaderSecond;
