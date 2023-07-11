"use client"
import React, { useEffect,useLayoutEffect, useRef } from "react";
import styles from "./CowsSection.module.scss";
import cowsImg from "./cows.png"
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const CowsSection = () => {
  const cowsRef = useRef(null)
  const cowsImgOneRef = useRef(null)
  const cowsImgSecondRef = useRef(null)
  const cowsImgThreeRef = useRef(null)
const component = useRef();

  useLayoutEffect(() => {
    if (component.current) {
      // let ctx = gsap.context(() => {
      let contents = gsap.utils.toArray(".circle");
      gsap.set(contents, { autoAlpha: 0, x: 500 });

      let ml = new gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          scrub: true,
          pin: true,
          // pinSpacer:false,
          start: "top 30%",
          end: "+=3000 center",
          markers: true,
        },
      });

      ml.to(contents[0], {
        keyframes: { x: [500, 185, -357] },
        duration: 5,
        autoAlpha: 1,
      });
      ml.to(contents[1], {
        keyframes: { x: [500, 185, 43] },
        duration: 5,
        autoAlpha: 1,
      });
      ml.to(contents[2], {
        keyframes: { x: [500, 185, 10] },
        duration: 5,
        autoAlpha: 1,
      });
      // contents.forEach((content,idx) => {

      //   tl.to(content, {
      //     keyframes: { x: [500, 185, -325+(idx*(-325))] },
      //     duration: 5,
      //     autoAlpha: 1,
      //   });
      // });
    }
  }, [component]);
  return (
    <div style={{ height: "100vh" }} ref={component}>
      <div className={styles.textFill} style={{height:"100vh"}}>
        <h3>Bereiche</h3>
        <div className={styles.cownsWrap} ref={cowsRef}>
          <div
            className={`${styles.imgWrap1} ${styles.imgWrap} circle`}
            ref={cowsImgOneRef}
          >
            <Image src={cowsImg} alt={"cows"} />
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
            className={`${styles.imgWrap2} ${styles.imgWrap} circle`}
            ref={cowsImgOneRef}
          >
            <Image src={cowsImg} alt={"cows"} />
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
            className={`${styles.imgWrap3} ${styles.imgWrap} circle`}
            ref={cowsImgOneRef}
          >
            <Image src={cowsImg} />
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
      </div>
      {/* <button className={styles.btnCows}>Tierwelt</button> */}
    </div>
  );
};

export default CowsSection;