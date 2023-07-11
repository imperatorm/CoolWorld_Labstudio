"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import SplitText from "gsap-trial/SplitText";
import maskImg from "./world.svg";
gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.config({ trialWarn: false });
import styles from "./VideoScroll.module.scss";
const VideoScroll = () => {
  const maskRef = useRef(null);
  const elementRef = useRef(null);
  const textRef = useRef(null)
  useEffect(() => {
      const maskEl = maskRef.current;
      const textEl = textRef.current;
      if (maskEl) {
       
        let mySplitText;
        
     
        mySplitText = new SplitText(textEl, {
          type: "chars,words,lines",
          charsClass: "split-chars",
          wordsClass: "split-words",
          linesClass: "split-lines",
        });
      console.log("mySplitText :", mySplitText);

       gsap.set(maskEl, { maskImage: `url(${maskImg.src})` });  
       gsap.set(elementRef.current, { y: 0,x:0 }); 
       gsap
         .timeline({
           scrollTrigger: {
             trigger: elementRef.current,
             // start: "center center",
             pin: true,
             // pinSpacing:false,
             scrub: 1,
             start: "top top",
             end: "bottom",
             toggleActions: "restart reverse none none",
             // play pause resume reverse restart reset complete none
             // onEnter onLeave onEnterBack onLeaveBack
             markers: true,
           },
         })
         .to(maskEl, { maskSize: "100%", duration: 1 })
         .to(maskEl, {
           maskImage: "none",
           // duration: 1,
         })
         .from(mySplitText.chars, {
           duration: 0.8,
           rotationX: 75,
           stagger: 0.1,
           transformOrigin: "top center",
           z: -150,
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
    </div>
  );
};

export default VideoScroll;
