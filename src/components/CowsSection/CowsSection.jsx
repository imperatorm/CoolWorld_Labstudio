"use client"
import React, { useEffect,useLayoutEffect, useRef } from "react";
import styles from "./CowsSection.module.scss";
import cowsImg from "@/assets/images/cows.png"
import shapeImg from "@/assets/images/shape3.png"
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Power0 } from "gsap-trial";
import Link from "next/link";
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
      gsap.set(".textWaves",{backgroundImage: `url(${shapeImg.src})`,    backgroundPositionY: "-200%"});
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          scrub: true,
          pin: true,
          // pinSpacer:false,
          start: "top 25%",
          end: "bottom",
          toggleActions: "restart reverse none none",
          // markers: true,
        },
      });
      tl.add("anim_start", "+=0")
        .to(
          contents[0],
          {
            keyframes: { x: [500, 185, -357] },
            duration: 5,
            autoAlpha: 1,
            ease: Power0.easeNone,
          },
          "anim_start"
        )
        .to(
          ".textWaves",
          {
            backgroundPositionY: "-50%",
            // backgroundPositionX: "500px",
            duration: 5,
            ease: Power0.easeNone,
            // timeScale: 0.1,
            // autoAlpha: 1,
          },
          "anim_start"
        );
        tl.add("anim_start2", "+=0")
          .to(
            ".textWaves",
            {
              backgroundPositionY: "-5%",
              // backgroundPositionX: "800px",
              duration: 5,
              ease: Power0.easeNone,
              // timeScale: 0.1,
              // autoAlpha: 1,
            },
            "anim_start2"
          )
          .to(
            contents[1],
            {
              keyframes: { x: [500, 185, 43] },
              duration: 5,
              ease: Power0.easeNone,
              autoAlpha: 1,
            },
            "anim_start2"
          );
tl.add("anim_start3", "+=0")
  .to(
    contents[2],
    {
      keyframes: { x: [500, 185, 10] },
      duration: 5,
      ease: Power0.easeNone,
      autoAlpha: 1,
    },
    "anim_start3"
  )
  .to(
    ".textWaves",
    {
      backgroundPositionY: "100%",
      // backgroundPositionX: "1000px",
      duration: 5,
      ease: Power0.easeNone,

      // autoAlpha: 1,
    },
    "anim_start3"
  );
    }
  }, [component]);
  return (
    <div style={{ height: "100vh" }} ref={component}>
      <div className={styles.textFill} style={{ height: "100vh" }}>
        <h3 className="textWaves">Bereiche</h3>
        <div className={styles.cownsWrap} ref={cowsRef}>
          <Link
            href="/bereiche/keep"
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
          </Link>
          <Link
            href="/bereiche/keep"
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
          </Link>
          <Link
            href="/bereiche/keep"
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
          </Link>
        </div>
        <Link href={"/bereiche/keep"} className={styles.btnCows}>
          Tierwelt
        </Link>
      </div>
    </div>
  );
};

export default CowsSection;
