import Image from 'next/image';
import React from 'react'
// import bannerImg from "../../../public/images/home4.png"
import styles from './ParallaxImg.module.scss'
const ParallaxImg = () => {
  return (
    <div className={styles.parallaxImg}>
      {/* <Image src={bannerImg} /> */}
    </div>
  );
}

export default ParallaxImg;