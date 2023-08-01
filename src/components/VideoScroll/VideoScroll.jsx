"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitText from "gsap-trial/SplitText";
import maskImg from "./world.svg";
import cursorPlay from "@/assets/images/cursorPlay.png";
gsap.registerPlugin(ScrollTrigger);
gsap.config({ trialWarn: false });
import styles from "./VideoScroll.module.scss";
import { Power2 } from "gsap-trial";
const VideoScroll = () => {
  const maskRef = useRef(null);
  const elementRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const maskEl = maskRef.current;
    if (maskEl) {
      const charts = [...document.querySelectorAll(".split-chars")];
      gsap.set(maskEl, { maskImage: `url(${maskImg.src})`});
      gsap.set(elementRef.current, { y: 0, x: 0 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top top",
            pin: true,
            // pinSpacing:false,
            scrub: 1,
            end: "bottom",
            toggleActions: "restart reverse none none",
            // play pause resume reverse restart reset complete none
            // onEnter onLeave onEnterBack onLeaveBack
            //  markers: true,
          },
        })
        .to(maskEl, { maskSize: "60%",scrub: 1, duration: 5, ease: Power2.in })
        .to(maskEl, { maskSize: "100%",scrub: 1, duration: 5, ease: Power2.in })
        .to(maskEl, {
          maskImage: "none",
          duration: 5,
          ease: Power2.in,
        })
        .fromTo(
          charts,
          {
            duration: 5,
            rotationX: 95,
            stagger: 1,
            transformOrigin: "top center",
            z: 0,
            ease: Power2.in,
            opacity: 0,
          },
          {
            duration: 5,
            rotationX: 0,
            stagger: 2,
            transformOrigin: "top center",
            z: -150,
            ease: Power2.in,
            opacity: 1,
          }
        )
        .to(charts, {
          duration: 5,
          rotationX: 95,
          stagger: 1,
          transformOrigin: "top center",
          z: 0,
          ease: Power2.in,
          opacity: 0,
        })
        .to(".para-content", {
          opacity: 1,
          bottom: "0",
          duration: 20,
          stagger: 1,
        });
      //  .to("#videoBannerText", {
      //    opacity: "1",
      //    transform: "translate(50%, 50%)",
      //    duration: 1,
      //    // onComplete: function() {
      //    //   maskEl.classList.add('videoParallax')
      //    // }
      //  });
    }
  }, [maskRef]);
  return (
    <div>
      <div id="videoWrap" className={styles.videoWrap} ref={elementRef}>
        <div
          className={styles.mask}
          ref={maskRef}
          style={{ maskImage: `url(${maskImg.src})` }}
        >
          {/* <Image src={worldImg} /> */}
          <video
            className={styles.video}
            autoPlay
            muted
            loop
            style={{ cursor: `url(${cursorPlay.src}), auto` }}
          >
            <source src={"./111.mp4"} type="video/mp4" />
          </video>
          <h3
            className={styles.videoBannerText}
            id="videoBannerText"
            ref={textRef}
          >
            <div className={styles.splitLines}>
              <div className={styles.splitWords}>
                <div className={`split-chars ${styles.split}`}>o</div>
                <div className={`split-chars ${styles.split}`}>h</div>
                <div className={`split-chars ${styles.split}`}>n</div>
                <div className={`split-chars ${styles.split}`}>e</div>
              </div>{" "}
              <div className={styles.splitWords}>
                <div className={`split-chars ${styles.split}`}>n</div>
                <div className={`split-chars ${styles.split}`}>a</div>
                <div className={`split-chars ${styles.split}`}>s</div>
                <div className={`split-chars ${styles.split}`}>s</div>
              </div>{" "}
              <div className={styles.splitWords}>
                <div className={`split-chars ${styles.split}`}>z</div>
                <div className={`split-chars ${styles.split}`}>u</div>
              </div>{" "}
              <div className={styles.splitWords}>
                <div className={`split-chars ${styles.split}`}>w</div>
                <div className={`split-chars ${styles.split}`}>e</div>
                <div className={`split-chars ${styles.split}`}>r</div>
                <div className={`split-chars ${styles.split}`}>d</div>
                <div className={`split-chars ${styles.split}`}>e</div>
                <div className={`split-chars ${styles.split}`}>n</div>
              </div>
            </div>
          </h3>
          <div className={`${styles.paraContent} para-content`}>
            <h2>
              Erfrischende Kühlzonen für heiße Tage: Genieße den Sommer mit
              unseren Cooling Oasis
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoScroll;
