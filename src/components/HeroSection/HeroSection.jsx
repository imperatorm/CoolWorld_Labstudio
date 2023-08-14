"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { usePrevious } from "@uidotdev/usehooks";

import SubscribeBtn from "../SubscribeBtn/SubscribeBtn";
import { TitleAnimation } from "../TitleAnimation/TitleAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Content } from "../../../public/js/content";
import { preloadImages } from "../../../public/js/utils";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import homeImg from "@/assets/images/home5.png";
import homeImgLaptop from "@/assets/images/home-laptop.png";



import styles from "./HeroSection.module.scss";
import useWindowSize from "@/hooks/useViewport";




const HeroSection = () => {
  const [activeSection, setActiveSection] = useState(null);
  const previousColor = usePrevious(activeSection);
  const initialRef = useRef(null);
  const size = useWindowSize();
  const [heroPhoto,setHeroPhoto] = useState(null)
  // let heroPhoto = null
  // const homePhoto = () => {
  //   if(size !== 0) {
  //     if(size <= 1024) {
       
  //       heroPhoto =  homeImgLaptop;
  //     }
  //     if(size > 1024) {
  //       heroPhoto = homeImg;
  //     }
  //   }
  // };
  
  useEffect(() => {
    // let timeSection = null;
    if (initialRef.current && activeSection !== null) {
      // timeSection = setTimeout(() => {
        if (previousColor !== null) {
          const contentCanvas = [...document.querySelectorAll(".heroCanvas")];
          contentCanvas.forEach((el) => {

            if (el.querySelector("canvas")) {
              el.querySelector("canvas").remove();
            }
          });
          const contentElems = [...document.querySelectorAll(".heroContent")];
          contentElems.forEach((el) => new Content(el));
          preloadImages(".canvas-wrap").then(() => 
            document.body.classList.remove("loading")
          );
         
        }
      // }, 0);
    }
  }, [activeSection]);
  // useEffect(() => {
  //   if (size !== 0) {
  //     let photo = null
  //     if (size <= 1040) {
  //       photo = homeImgLaptop;
  //     }
  //     if (size > 1040) {
  //       photo = homeImg;
  //     }
  //     setHeroPhoto(photo);
  //   }
  // }, [size]);
  return (
    <>
      <div className={styles.wrapper} ref={initialRef}>
        <section
          className={`${styles.heroWrap} ${
            activeSection === 0 || activeSection === null
              ? "content heroContent"
              : ""
          }`}
        >
          <div
            className={`heroCanvas ${styles.heroBanner} ${
              activeSection === 0 || activeSection === null ? "canvas-wrap" : ""
            }`}
            style={{ backgroundImage: `url(${homeImg?.src})` }}
          >
            <div className={styles.linkWrap}>
              <SubscribeBtn />
            </div>
          </div>
          <div className={styles.animationWrap}>
            <TitleAnimation>
              <span className={styles.firstTitle}>Keep</span>
              <span className={styles.secondTitle}>Cool.</span>
              <span className={styles.descTitle}>Enjoy the Summer.</span>
            </TitleAnimation>
          </div>
        </section>
        {/* <Swiper
        spaceBetween={30}
        effect={"fade"}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        modules={[EffectFade]}
        // modules={[Autoplay, EffectFade]}
        className="mySwiper"
        onSlideChange={(e) => {
          setActiveSection(e.activeIndex);
        }}
        onSwiper={(e) => {
          setActiveSection(e.activeIndex);
        }}
      >
        <SwiperSlide>
          <section
            className={`${styles.heroWrap} ${
              activeSection === 0 || activeSection === null
                ? "content heroContent"
                : ""
            }`}
          >
            <div
              className={`heroCanvas ${styles.heroBanner} ${
                activeSection === 0 || activeSection === null
                  ? "canvas-wrap"
                  : ""
              }`}
              style={{ backgroundImage: `url(${homeImg.src})` }}
            >
              <div className={styles.linkWrap}>
                <SubscribeBtn />
              </div>
            </div>

            <TitleAnimation>
              <span className={styles.firstTitle}>Keep</span>
              <span className={styles.secondTitle}>Cool.</span>
              <span className={styles.descTitle}>Enjoy the Summer.</span>
            </TitleAnimation>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section
            className={`${styles.heroWrap} ${
              activeSection === 1 ? "content heroContent" : ""
            }`}
          >
            <div
              className={`heroCanvas ${styles.heroBanner} ${
                activeSection === 1 ? "canvas-wrap" : ""
              }`}
              style={{ backgroundImage: `url(${girlImg.src})` }}
            >
              <div className={styles.linkWrap}>
                <SubscribeBtn />
              </div>
            </div>

            <TitleAnimation>
              <span className={styles.firstTitle}>Keep</span>
              <span className={styles.secondTitle}>Cool.</span>
              <span className={styles.descTitle}>Enjoy the Summer.</span>
            </TitleAnimation>
          </section>
        </SwiperSlide>
      </Swiper> */}
      </div>
    </>
  );
};

export default HeroSection;
