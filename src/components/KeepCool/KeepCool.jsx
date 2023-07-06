import React from 'react'
import KeepCoolInfo from './KeepCoolInfo';
import { TitleAnimation } from '../TitleAnimation/TitleAnimation';
import styles from "./KeepCool.module.scss"
const KeepCool = () => {
  return (
    <div className={` main-container`}>
      <KeepCoolInfo />
      <div className={styles.keepWrap}>
        <div className="content">
          <div
            className={`${styles.keepBanner} canvas-wrap`}
            style={{ backgroundImage: "url(Images/girl-min.png)" }}
          ></div>
          <div className={styles.keepInfo}>
            <TitleAnimation>
              <span className={styles.firstTitle}>Keep</span>
              <span className={styles.secondTitle}>Cool.</span>
              <span className={styles.descTitle}>Enjoy the Summer.</span>
            </TitleAnimation>
          </div>
        </div>
        <h3 className={styles.keepFooterInfo}>
          Unt, offic to et omnihit, inus vit, consedit, consequo quo tenimus
        </h3>
        <button className={styles.btnWrap}>KeepCool.World</button>
      </div>
    </div>
  );
}

export default KeepCool