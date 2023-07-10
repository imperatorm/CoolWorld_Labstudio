"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import maskImg from "./world.svg";
gsap.registerPlugin(ScrollTrigger)

import styles from "./VideoScroll.module.scss";
const VideoScroll = () => {
  const maskRef = useRef(null);
  const elementRef = useRef(null)
  useEffect(() => {
      const maskEl = maskRef.current;
      
      if (maskEl) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: elementRef.current,
            // start: "center center",
            pin: true,
            // pinSpacing:false,
            scrub: 1,
            start: "top top",
            end: "+=3000 bottom",
            toggleActions: "restart reverse none none",
            // play pause resume reverse restart reset complete none
            // onEnter onLeave onEnterBack onLeaveBack
            markers: true,
          },
        });
        tl.fromTo(
          maskEl,
          { maskImage: `url(${maskImg.src})` },
          { maskSize: "100%", duration: 1 }
        )
          // tl.add(maskInitial)
          // tl.fromTo(
          //   maskEl,
          //   { maskImage: `url(${maskImg.src})` },
          //   { maskSize: "100%", duration: 2 }
          // )
          // .to(maskEl, { maskSize: "100%", duration: 1 })
          .to(maskEl, {
            maskImage: "none",
            // duration: 1,
          })
          // .set(maskEl, { maskImage: "none !important" })

          .to("#videoBannerText", {
            opacity: "1",
            transform: "translate(50%, 50%)",
            duration: 1,
            // onComplete: function() {
            //   maskEl.classList.add('videoParallax')
            // }
          });
          
      }
    }, [maskRef]);
  return (
      <div id="videoWrap" className={styles.videoWrap} ref={elementRef}>
        <div className={styles.mask} ref={maskRef}  style={{maskImage: `url(${maskImg.src})`}}>
          {/* <Image src={worldImg} /> */}
          <video className={styles.video} autoPlay muted loop>
            <source src={"./111.mp4"} type="video/mp4" />
          </video>
          <h3 className={styles.videoBannerText} id="videoBannerText">
            ohne nass zu werden
          </h3>
        </div>
        {/* <div className={`${styles.paraContent} `}>
          <h2>
            Erfrischende Kühlzonen für heiße Tage: Genieße den Sommer mit
            unseren Cooling Oasis
          </h2>
        </div> */}
      </div>
  );
};

export default VideoScroll;
