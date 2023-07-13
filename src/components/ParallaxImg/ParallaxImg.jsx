import Image from 'next/image';
import React from 'react'
// import bannerImg from "../../../public/images/home4.png"
import styles from './ParallaxImg.module.scss'
import homeParallax from "@/assets/images/home4.png";
const ParallaxImg = () => {
  return (
    <div
      className={styles.parallaxImg}
      style={{ backgroundImage: `url(${homeParallax.src})` }}
    >
      {/* <Image src={bannerImg} /> */}
    </div>
  );
}

export default ParallaxImg;