"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePrevious } from "@uidotdev/usehooks";

import SubscribeBtn from "../SubscribeBtn/SubscribeBtn";
import { TitleAnimation } from "../TitleAnimation/TitleAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Content } from "../../../public/js/content";
import { preloadImages } from "../../../public/js/utils";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

import styles from "./HeroSection.module.scss";
const HeroSection = () => {
  const [activeSection, setActiveSection] = useState(null);
  const previousColor = usePrevious(activeSection);
  const initialRef = useRef(null);
  // useEffect(() => {
  //   // let timeSection = null;
  //   if (initialRef.current && activeSection !== null) {
  //     // timeSection = setTimeout(() => {
  //       if (previousColor !== null) {
  //         const contentCanvas = [...document.querySelectorAll(".heroCanvas")];
  //         contentCanvas.forEach((el) => {
  //           console.log(el.querySelector("canvas"));
  //           if (el.querySelector("canvas")) {
  //             el.querySelector("canvas").remove();
  //           }
  //         });
  //         const contentElems = [...document.querySelectorAll(".heroContent")];
  //         contentElems.forEach((el) => new Content(el));
  //         preloadImages(".canvas-wrap").then(() =>
  //           document.body.classList.remove("loading")
  //         );
  //       }
  //     // }, 0);
  //   }
  // }, [activeSection]);
  return (
    <div ref={initialRef}>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
        onSlideChange={(e) => {
          setActiveSection(e.activeIndex);
        }}
        onSwiper={(e) => {
          setActiveSection(e.activeIndex);
        }}
      >
        <SwiperSlide>
          <section className={`${styles.heroWrap} content heroContent `}>
            <div
              className={`heroCanvas ${styles.heroBanner} canvas-wrap`}
              style={{ backgroundImage: "url(images/Home01-min.png)" }}
            >
              <SubscribeBtn />
            </div>

            <TitleAnimation>
              <span className={styles.firstTitle}>Keep</span>
              <span className={styles.secondTitle}>Cool.</span>
              <span className={styles.descTitle}>Enjoy the Summer.</span>
            </TitleAnimation>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className={`${styles.heroWrap} content heroContent`}>
            <div
              className={`heroCanvas ${styles.heroBanner} canvas-wrap`}
              style={{ backgroundImage: "url(images/girl-min.png)" }}
            >
              <SubscribeBtn />
            </div>

            <TitleAnimation>
              <span className={styles.firstTitle}>Keep</span>
              <span className={styles.secondTitle}>Cool.</span>
              <span className={styles.descTitle}>Enjoy the Summer.</span>
            </TitleAnimation>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
