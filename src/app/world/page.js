"use client"
import React, { useRef } from 'react'
import styles from "./World.module.scss";
import Image from "next/image";
import TheFooter from "@/components/TheFooter/TheFooter";
import homeParallax from "@/assets/images/home4.png";
import TheHeaderSecond from "@/components/TheHeaderSecond/TheHeaderSecond";
import girlMin from "@/assets/images/girl-min.png";
import { TitleAnimation } from "@/components/TitleAnimation/TitleAnimation";
import Truck from '@/components/Truck/Truck';
import InfoSection from '@/components/InfoSection/InfoSection';
import { infoWorld } from '@/date/date';
import Link from 'next/link';
const World = () => {
  const truckRef = useRef(null)
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.scrollInfo}`}>
        <Link href="/world" className="active">
          KeepColl.World
        </Link>
        <Link href="/world-truck">Keep Cool.Truck</Link>
      </div>
      <div
        className="main-container"
        // style={{ backgroundImage: `url(${girlImg.src})` }}
      >
        <TheHeaderSecond>
          <section>
            <div
              className={`${styles.content}`}
              style={{ backgroundImage: `url(${girlMin.src})` }}
            >
              <div className={styles.info}>
                <div className={styles.keepInfo}>
                  <TitleAnimation containerName={"bereicheKeep"}>
                    <span className={styles.firstTitle}>Keep</span>
                    <span className={styles.secondTitle}>Cool.</span>
                    <span className={styles.descTitle}>Enjoy the Summer.</span>
                  </TitleAnimation>
                </div>
              </div>
            </div>
          </section>
        </TheHeaderSecond>
        <div className={`${styles.infoWrap}`}>
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
      </div>

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
      <div className={styles.wordBus}>
        <div className={styles.truck}>
          <div ref={truckRef} className={styles.truckInfo}>
            <h3>Keep</h3>
            <h3>Cool.</h3>
            <h3>Truck</h3>
            <p>Rolling into summer.</p>
          </div>
        </div>
        <div>
          <Truck />
        </div>
        <InfoSection info={infoWorld} />
      </div>

      <TheFooter />
    </div>
  );
}

export default World