import React, { useEffect, useRef } from 'react'
import truckImg from "@/assets/images/Truck.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import { Power0 } from "gsap-trial";
import styles from "./Truck.module.scss"
gsap.registerPlugin(ScrollTrigger);
const Truck = () => {
    const maskRef = useRef(null);
    const elementRef = useRef(null);
  
  useEffect(() => {
      const maskEl = maskRef.current;
      const elementEl = maskRef.current;
      if (maskEl) {
       gsap
         .timeline({
           scrollTrigger: {
             trigger: elementEl,
             start: "top center",
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
         .fromTo(
           maskEl,
           {
             duration: 1,
             x: 0,
             stagger: 1,
             ease: Power0.easeNone,
           },
           {
             duration: 1,
             x: -3000,
             stagger: 1,
             ease: Power0.easeNone,
           }
         );

          
      }
    }, [maskRef]);

  return (
    <div className={styles.imgWrap} ref={elementRef}>
      <Image src={truckImg.src} alt="truck" ref={maskRef} width={truckImg.width} height={truckImg.height}/>
    </div>
  );
}

export default Truck