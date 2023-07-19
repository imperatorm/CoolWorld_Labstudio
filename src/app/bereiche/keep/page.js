"use client"
import TheHeader from '@/components/TheHeader/TheHeader'
import React, { useEffect, useRef } from 'react'
import styles from "./KeepBereiche.module.scss"

import { TitleAnimation } from '@/components/TitleAnimation/TitleAnimation';
import icon01 from "@/assets/images/Icon01.png";
import icon02 from "@/assets/images/Icon02.png";
import icon03 from "@/assets/images/Icon03.png";
import icon04 from "@/assets/images/Icon04.png";
import Image from 'next/image';
import ParallaxImg from '@/components/ParallaxImg/ParallaxImg';
import TheFooter from '@/components/TheFooter/TheFooter';
import CowsSection from '@/components/CowsSection/CowsSection';
import homeParallax from "@/assets/images/home4.png";
const KeepBereiche = () => {
  
  return (
    <div>
      <div
        className='main-container'
        // style={{ backgroundImage: `url(${girlImg.src})` }}
      >
        {/* <TheHeader /> */}
        {/* <div>
        <div className={styles.keepInfo}>
          <TitleAnimation>
            <span className={styles.firstTitle}>Keep</span>
            <span className={styles.secondTitle}>Cool.</span>
            <span className={styles.descTitle}>Enjoy the Summer.</span>
          </TitleAnimation>
        </div>
      </div> */}
        {/* <div className={`${styles.keepContent} content`}> */}
        {/* <div
          ref={initialRef}
          className={`${styles.keepBanner} canvas-wrap`}
          style={{ backgroundImage: `url(${girlImg.src})` }}
        ></div> */}
        {/* </div> */}
        <div className={`main-container ${styles.infoWrap}`}>
          <h3>KeepCool: </h3>
          <h3>Erfrischende Kühlungsbereiche</h3>
          <h3>für Gastro, Privat und Tierwelt</h3>
          <p>
            Kühlungsbereiche für Gastro, Privat und Tierwelt: Genieße den Sommer
            in angenehmer Kühle. Unsere hochwertigen Sprühkühlsysteme schaffen
            eine angenehme Umgebung für Restaurants, Cafés und Bars, während
            unsere Wasser-Sprühkühlungssysteme Ihren privaten Außenbereich zum
            Rückzugsort vor der Sommerhitze machen. Unsere speziell entwickelten
            Kühlungslösungen schützen auch Tiere in Zoos, Tierparks und
            Haushalten vor Überhitzung. Mit maßgeschneiderten Lösungen und
            modernster Technologie ermöglichen unsere Kühlungsbereiche ein
            komfortables Erlebnis bei energieeffizientem Betrieb. Genieße den
            Sommer in vollen Zügen!
          </p>
        </div>
        <div className={styles.unsereWrap}>
          <h4>Unsere Vorteile im Überblick.</h4>
          <div className={styles.lists}>
            <div className={styles.list}>
              <Image
                src={icon01.src}
                alt={"icon"}
                width={icon01.width}
                height={icon01.height}
              />
              <p>ohne nass zu werden</p>
            </div>
            <div className={styles.list}>
              <Image
                src={icon02.src}
                alt={"icon"}
                width={icon01.width}
                height={icon01.height}
              />
              <p>kühlt um bis zu 12° C </p>
            </div>
            <div className={styles.list}>
              <Image
                src={icon03.src}
                alt={"icon"}
                width={icon01.width}
                height={icon01.height}
              />
              <p>nahezu insektenfrei</p>
            </div>
            <div className={styles.list}>
              <Image
                src={icon04.src}
                alt={"icon"}
                width={icon01.width}
                height={icon01.height}
              />
              <p>weniger Pollen</p>
            </div>
          </div>
        </div>
      </div>
        <ParallaxImg />
        <div className={styles.einWrap}>
          <h4>Ein Einblick in unsere Welt.</h4>
          <div className={`${styles.circleWrap} main-container`}>
            <div className={styles.circleItems}>
              <div className={styles.circleItem}>
                <Image
                  src={homeParallax.src}
                  alt={"img"}
                  width={homeParallax.width}
                  height={homeParallax.height}
                />
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
                        Das ist eine sehr schöne Beschreibung.
                      </textPath>
                    </text>
                  </g>
                </svg>
              </div>
              <div className={styles.circleItem}>
                <Image
                  src={homeParallax.src}
                  alt={"img"}
                  width={homeParallax.width}
                  height={homeParallax.height}
                />
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
                        Das ist eine sehr schöne Beschreibung.
                      </textPath>
                    </text>
                  </g>
                </svg>
              </div>
              <div className={styles.circleItem}>
                <Image
                  src={homeParallax.src}
                  alt={"img"}
                  width={homeParallax.width}
                  height={homeParallax.height}
                />
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
                        Das ist eine sehr schöne Beschreibung.
                      </textPath>
                    </text>
                  </g>
                </svg>
              </div>
            </div>
            <div className={styles.circleItems}>
              <div className={styles.circleItem}>
                <Image
                  src={homeParallax.src}
                  alt={"img"}
                  width={homeParallax.width}
                  height={homeParallax.height}
                />
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
                        Das ist eine sehr schöne Beschreibung.
                      </textPath>
                    </text>
                  </g>
                </svg>
              </div>
              <div className={styles.circleItem}>
                <Image
                  src={homeParallax.src}
                  alt={"img"}
                  width={homeParallax.width}
                  height={homeParallax.height}
                />
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
                        Das ist eine sehr schöne Beschreibung.
                      </textPath>
                    </text>
                  </g>
                </svg>
              </div>
            </div>
            <div className={styles.circleItems}>
              <div className={styles.circleItem}>
                <Image
                  src={homeParallax.src}
                  alt={"img"}
                  width={homeParallax.width}
                  height={homeParallax.height}
                />
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
                        Das ist eine sehr schöne Beschreibung.
                      </textPath>
                    </text>
                  </g>
                </svg>
              </div>
              <div className={styles.circleItem}>
                <Image
                  src={homeParallax.src}
                  alt={"img"}
                  width={homeParallax.width}
                  height={homeParallax.height}
                />
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
                        Das ist eine sehr schöne Beschreibung.
                      </textPath>
                    </text>
                  </g>
                </svg>
              </div>
              <div className={styles.circleItem}>
                <Image
                  src={homeParallax.src}
                  alt={"img"}
                  width={homeParallax.width}
                  height={homeParallax.height}
                />
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
                        Das ist eine sehr schöne Beschreibung.
                      </textPath>
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <CowsSection />
      <TheFooter />
    </div>
  );
}

export default KeepBereiche