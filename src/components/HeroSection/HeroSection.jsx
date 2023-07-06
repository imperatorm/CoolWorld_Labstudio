import React from 'react'
import SubscribeBtn from '../SubscribeBtn/SubscribeBtn';
import { TitleAnimation } from '../TitleAnimation/TitleAnimation';
import styles from "./HeroSection.module.scss"
const HeroSection = () => {
  
  return (
    <>
      <section className={`${styles.heroWrap} content`}>
        <div
          className={`${styles.heroBanner} canvas-wrap`}
          style={{ backgroundImage: "url(Images/Home01-min.png)" }}
        >
          <SubscribeBtn />
        </div>
        
        <TitleAnimation>
          <span className={styles.firstTitle}>Keep</span>
          <span className={styles.secondTitle}>Cool.</span>
          <span className={styles.descTitle}>Enjoy the Summer.</span>
        </TitleAnimation>
      </section>
    </>
  );
}

export default HeroSection