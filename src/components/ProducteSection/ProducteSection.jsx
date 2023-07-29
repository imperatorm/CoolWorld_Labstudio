"use client"
import React, { useEffect,useLayoutEffect, useRef } from "react";
import styles from "./ProducteSection.module.scss";
import barImg from "@/assets/images/bar_blue.png"
import shapeImg from "@/assets/images/shape1.png";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { Power0 } from "gsap-trial";
gsap.registerPlugin(ScrollTrigger);


const ProducteSection = () => {
  const proRef = useRef(null);
  const proImgOneRef = useRef(null);
    const component = useRef();
  useLayoutEffect(() => {
    if (component.current) {
      // let ctx = gsap.context(() => {
      let contents = gsap.utils.toArray(".circle-prod");

      gsap.set(contents, { autoAlpha: 0, x: 500 });
      gsap.set(".textWavesProd", {
        backgroundImage: `url(${shapeImg.src})`,
        backgroundPositionY: "-200%",
      });
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          scrub: true,
          pin: true,
          // pinSpacer:false,
          start: "top 10%",
          end: "bottom",
          toggleActions: "restart reverse none none",
          // markers: true,
        },
      });
      tl.add("anim_1", "+=0")
        .to(
          contents[0],
          {
            keyframes: { x: [500, 185, -260] },
            duration: 5,
            autoAlpha: 1,
            ease: Power0.easeNone,
          },
          "anim_1"
        )
        .to(
          ".textWavesProd",
          {
            backgroundPositionY: "-50%",
            // backgroundPositionX: "500px",
            duration: 5,
            ease: Power0.easeNone,
            // timeScale: 0.1,
            // autoAlpha: 1,
          },
          "anim_1"
        );
      tl.add("anim_2", "+=0")
        .to(
          ".textWavesProd",
          {
            backgroundPositionY: "-5%",
            // backgroundPositionX: "800px",
            duration: 5,
            ease: Power0.easeNone,
            // timeScale: 0.1,
            // autoAlpha: 1,
          },
          "anim_2"
        )
        .to(
          contents[1],
          {
            keyframes: { x: [500, 185, 5] },
            duration: 5,
            ease: Power0.easeNone,
            autoAlpha: 1,
          },
          "anim_2"
        );
      tl.add("anim_3", "+=0")
        .to(
          contents[2],
          {
            keyframes: { x: [500, 185, -143] },
            duration: 5,
            ease: Power0.easeNone,
            autoAlpha: 1,
          },
          "anim_3"
        )
        .to(
          ".textWavesProd",
          {
            backgroundPositionY: "120%",
            // backgroundPositionX: "1000px",
            duration: 5,
            ease: Power0.easeNone,

            // autoAlpha: 1,
          },
          "anim_3"
        );
    }
  }, [component]);

  return (
    <div style={{ height: "100vh", margintop:"100px" }} ref={component}>
      <div className={styles.textFill} style={{ height: "100vh" }} ref={proRef}>
        <h3 className="textWavesProd">Produkte</h3>
        <div className={styles.cownsWrap} ref={proRef}>
          <Link
            href={"/produkte/keep"}
            className={`${styles.imgWrap1} ${styles.imgWrap} circle-prod`}
            ref={proImgOneRef}
          >
            <Image src={barImg} alt={"bar"} />
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
            href={"/produkte/keep"}
            className={`${styles.imgWrap2} ${styles.imgWrap} circle-prod`}
            ref={proImgOneRef}
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
          </Link>
          <Link
            href={"/produkte/keep"}
            className={`${styles.imgWrap3} ${styles.imgWrap} circle-prod`}
            ref={proImgOneRef}
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
          </Link>
        </div>
        <Link href="/produkte/keep" className={styles.btnCows}>
          KeepColl.Bar
        </Link>
      </div>
    </div>
  );
};

export default ProducteSection;
