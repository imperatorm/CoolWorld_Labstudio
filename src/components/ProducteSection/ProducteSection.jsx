"use client"
import React, { useEffect,useLayoutEffect, useRef } from "react";
import styles from "./ProducteSection.module.scss";
import barImg from "../../../public/images/bar_blue.png"
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const ProducteSection = () => {
  const cowsRef = useRef(null);
  const cowsImgOneRef = useRef(null);
  const cowsImgSecondRef = useRef(null);
  const cowsImgThreeRef = useRef(null);

  // useLayoutEffect(() => {
  //     let ctx = gsap.context(() => {
  //       const tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: cowsImgOneRef.current,
  //           start: "-50% 30%",
  //           // pin: true,
  //           // pinSpacing:false,
  //           scrub: 1,
  //           toggleActions: "restart reverse none none",
  //           // play pause resume reverse restart reset complete none
  //           // onEnter onLeave onEnterBack onLeaveBack
  //           // markers: true,
  //         },
  //       });
  //       tl.to(cowsImgOneRef.current, {
  //         x: "150%",
  //         duration: 3,
  //       });
  //     }, cowsImgOneRef);

  //     return () => ctx.revert();
  // }, []);
  return (
    <div >
      <div className={styles.textFill} ref={cowsRef}>
        <h3>Produkte</h3>
        <div
          className={`${styles.imgWrap1} ${styles.imgWrap}`}
          ref={cowsImgOneRef}
        >
          <Image src={barImg} />
          <svg viewBox="0 0 200 200" className={styles.svgCover}>
            <path
              id="textPath"
              d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
              transform="translate(100,100)"
              fill="none"
              strokeWidth={0}
            />
            <g>
              <text textAnchor="start">
                <textPath xlinkHref="#textPath" startOffset="0%">
                  gehe zu gehe zu gehe zu gehe zu gehe zu gehe zu gehe zu gehe
                  zu gehe zu gehe zu
                </textPath>
              </text>
            </g>
          </svg>
        </div>
        <div
          className={`${styles.imgWrap2} ${styles.imgWrap}`}
          ref={cowsImgOneRef}
        >
          <Image src={barImg} />
          <svg viewBox="0 0 200 200" className={styles.svgCover}>
            <path
              id="textPath"
              d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
              transform="translate(100,100)"
              fill="none"
              strokeWidth={0}
            />
            <g>
              <text textAnchor="start">
                <textPath xlinkHref="#textPath" startOffset="0%">
                  gehe zu gehe zu gehe zu gehe zu gehe zu gehe zu gehe zu gehe
                  zu gehe zu gehe zu
                </textPath>
              </text>
            </g>
          </svg>
        </div>
        <div
          className={`${styles.imgWrap3} ${styles.imgWrap}`}
          ref={cowsImgOneRef}
        >
          <Image src={barImg} />
          <svg viewBox="0 0 200 200" className={styles.svgCover}>
            <path
              id="textPath"
              d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
              transform="translate(100,100)"
              fill="none"
              strokeWidth={0}
            />
            <g>
              <text textAnchor="start">
                <textPath xlinkHref="#textPath" startOffset="0%">
                  gehe zu gehe zu gehe zu gehe zu gehe zu gehe zu gehe zu gehe
                  zu gehe zu gehe zu
                </textPath>
              </text>
            </g>
          </svg>
        </div>
      </div>
      <button className={styles.btnCows}>KeepColl.Bar</button>
    </div>
  );
};

export default ProducteSection;
