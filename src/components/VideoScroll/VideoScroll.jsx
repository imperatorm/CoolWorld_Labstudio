"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger)

import styles from "./VideoScroll.module.scss";
import { WorldIcon } from "../Icons/Icons";
const VideoScroll = () => {
  const maskRef = useRef(null);
  const elementRef = useRef(null)

  // useEffect(() => {
  //   const maskEl = maskRef.current;
  //   // gsap.fromTo
  //   if (maskEl.current) {
  //     const el = maskEl.current;
  //     gsap.fromTo(
  //       el,
  //       { rotation: 0 },
  //       {
  //         rotation: 180,
  //         duration: 3,
  //         scrollTrigger: {
  //           trigger: el,
  //         },
  //       }
  //     );
  //   }
  // }, [maskRef]);
    useEffect(() => {
      const maskEl = maskRef.current;
      if (maskEl) {
        gsap.fromTo(
          maskEl,
          { maskSize: "20%" },
          {
            maskSize: "100%",
            duration: 3,
           
            scrollTrigger: {
              trigger: elementRef.current,
              start: 800,
              end: "bottom 50%",
              scrub: true,
              toggleActions: "restart none none none",
              // markers: true,
            },
          }
        );
        gsap.to(".xoski", {
          scrollTrigger: {
            trigger: ".xoski",
            scrub: true,
            pin: true,
            start: "center center",
            end: "bottom -100%",
            toggleClass: "active",
            ease: "power2",
          },
        });
      }
    }, [maskRef]);
  return (
    <div id="xoski">
      <div className={styles.mask} ref={maskRef}>
        <video className={styles.video} autoPlay muted loop>
          <source src={"./111.mp4"} type="video/mp4" />
        </video>
      </div>

      <div ref={elementRef}></div>
      {/* <WorldIcon /> */}
    </div>
  );
};

export default VideoScroll;
