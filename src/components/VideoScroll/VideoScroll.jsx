"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger)

import styles from "./VideoScroll.module.scss";
import { WorldIcon } from "../Icons/Icons";
const VideoScroll = () => {
  const maskRef = useRef(null);
  const videoRef = useRef(null);
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
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: maskEl,
            start: "-50% 30%",
            pin: true,
            // pinSpacing:false,
            scrub: 1,
            toggleActions: "restart reverse none none",
            // play pause resume reverse restart reset complete none
            // onEnter onLeave onEnterBack onLeaveBack
            markers: true,
          },
        });
        tl.to(maskEl, { maskSize: "100%", duration: 3 })
          .to(maskEl, { opacity: "0", duration: 2 })
          // .to(videoRef, { zIndex:1, duration: 2 });
        // gsap.fromTo(
        //   maskEl,
        //   { maskSize: "20%" },
        //   {
        //     maskSize: "100%",
        //     duration: 3,

        //     scrollTrigger: {
        //       trigger: maskEl,
        //       start: "-50% 30%",
        //       pin: true,
        //       // pinSpacing:false,
        //       scrub: 4,
        //       toggleActions: "restart reverse none none",
        //       // play pause resume reverse restart reset complete none
        //       // onEnter onLeave onEnterBack onLeaveBack
        //       markers: true,
        //     },
        //   }
        // );
        // gsap.to("#xoski", {
        //   scrollTrigger: {
        //     trigger: "#xoski",
        //     scrub: true,
        //     pin: true,
        //     start: "top center",
        //     end: "bottom -100%",
        //   },
        // });
      }
    }, [maskRef]);
  return (
    <div id="xoski" ref={elementRef}>
      <div className={styles.mask} ref={maskRef}>
        <video className={styles.video} autoPlay muted loop>
          <source src={"./111.mp4"} type="video/mp4" />
        </video>
      </div>
      <video ref={videoRef} className={styles.video2} autoPlay muted loop>
        <source src={"./111.mp4"} type="video/mp4" />
      </video>

      {/* <WorldIcon /> */}
    </div>
  );
};

export default VideoScroll;
