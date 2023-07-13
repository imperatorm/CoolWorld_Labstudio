"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
// import SplitText from "gsap-trial/SplitText";
import maskImg from "./world.svg";
gsap.registerPlugin(ScrollTrigger);
gsap.config({ trialWarn: false });
import styles from "./VideoScroll.module.scss";
import { Power0 } from "gsap-trial";
const VideoScroll = () => {
  const maskRef = useRef(null);
  const elementRef = useRef(null);
  const textRef = useRef(null)
  
  useEffect(() => {
      const maskEl = maskRef.current;
      const textEl = textRef.current;
      if (maskEl) {
    
       const charts = [...document.querySelectorAll(".split-chars")];
       gsap.set(maskEl, { maskImage: `url(${maskImg.src})` });  
       gsap.set(elementRef.current, { y: 0,x:0 }); 
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
         .to(maskEl, { maskSize: "100%", duration: 5, ease: Power0.easeNone })
         .to(maskEl, {
           maskImage: "none",
           duration: 5,
           ease: Power0.easeNone,
         })
         .fromTo(
           charts,
           {
             duration: 5,
             rotationX: 95,
             stagger: 1,
             transformOrigin: "top center",
             z: 0,
             ease: Power0.easeNone,
             opacity: 0,
           },
           {
             duration: 5,
             rotationX: 0,
             stagger: 2,
             transformOrigin: "top center",
             z: -150,
             ease: Power0.easeNon,
             opacity: 1,
           }
         )
         .to(charts, {
           duration: 5,
           rotationX: 95,
           stagger: 1,
           transformOrigin: "top center",
           z: 0,
           ease: Power0.easeNon,
           opacity: 0,
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
          <video className={styles.video} autoPlay muted loop>
            <source src={"./111.mp4"} type="video/mp4" />
          </video>
          <h3
            className={styles.videoBannerText}
            id="videoBannerText"
            ref={textRef}
          >
           <div className="split-lines" >
  <div  className="split-words">
    <div  className="split-chars">
      o
    </div>
    <div className="split-chars">
      h
    </div>
    <div className="split-chars">
      n
    </div>
    <div  className="split-chars">
      e
    </div>
  </div>{" "}
  <div  className="split-words">
    <div  className="split-chars">
      n
    </div>
    <div  className="split-chars">
      a
    </div>
    <div  className="split-chars">
      s
    </div>
    <div  className="split-chars">
      s
    </div>
  </div>{" "}
  <div  className="split-words">
    <div  className="split-chars">
      z
    </div>
    <div  className="split-chars">
      u
    </div>
  </div>{" "}
  <div  className="split-words">
    <div  className="split-chars">
      w
    </div>
    <div  className="split-chars">
      e
    </div>
    <div  className="split-chars">
      r
    </div>
    <div  className="split-chars">
      d
    </div>
    <div  className="split-chars">
      e
    </div>
    <div  className="split-chars">
      n
    </div>
  </div>
</div>

          </h3>
        </div>
        {/* <div className={`${styles.paraContent} `}>
          <h2>
            Erfrischende Kühlzonen für heiße Tage: Genieße den Sommer mit
            unseren Cooling Oasis
          </h2>
        </div> */}
      </div>
    </div>
  );
};

export default VideoScroll;
