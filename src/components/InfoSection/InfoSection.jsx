import React from 'react'
import styles from "./InfoSection.module.scss"
import Link from 'next/link';
const InfoSection = ({info}) => {
  const { litInfo="", bigInfo="", btnText="", url="" } = info;
  return (
    <div className="main-container">
      <div className={styles.infoWrap}>
        <div className={styles.litInfo}>{litInfo}</div>
        <div className={styles.bigInfo}>{bigInfo}</div>
      </div>
      <Link href={url} className={styles.infoBtn}>
        {btnText}
      </Link>
    </div>
  );
};

export default InfoSection;