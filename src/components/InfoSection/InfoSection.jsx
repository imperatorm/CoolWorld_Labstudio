import React from 'react'
import styles from "./InfoSection.module.scss"
const InfoSection = ({info}) => {
  const { litInfo, bigInfo, btnText } = info;
  return (
    <div className="main-container">
      <div className={styles.infoWrap}>
        <div className={styles.litInfo}>{litInfo}</div>
        <div className={styles.bigInfo}>
          {bigInfo}
         
        </div>
      </div>
      <button className={styles.infoBtn}>{btnText}</button>
    </div>
  );
};

export default InfoSection;