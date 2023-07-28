import { SolarBottom, SolarCenter, SolarTop } from '@/components/Icons/Icons';
import React from 'react'
import styles from "./Keep.module.scss"
import ParallaxImg from '@/components/ParallaxImg/ParallaxImg';
import ProducteSection from '@/components/ProducteSection/ProducteSection';
import TheFooter from '@/components/TheFooter/TheFooter';
import homeParallax from "@/assets/images/home4.png";
import Image from 'next/image';
import Link from 'next/link';
const Keep = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className="main-container">
        <div className={`${styles.solarTop}`}>
          <div className={`${styles.solarTopInfo}`}>
            <h2>Keep</h2>
            <h2>Cool.</h2>
            <h2>Bar</h2>
            <p>Just get a drink</p>
          </div>
          <div className={`${styles.solarTopSvg}`}>
            <SolarTop />
          </div>
          <div className={`${styles.solarTopButton}`}>
            <button>Gleich anfrage</button>
          </div>
        </div>
        <div className={`${styles.solarTopSecond}`}>
          <div>
            <div className={`${styles.circleCount}`}>
              <p>01</p>
              <h6>KeepCollBar.</h6>
            </div>
            <div className={`${styles.solarInfo}`}>
              <p>
                Die KeepCool.Bar, unser neuestes Highlight: der „Stehtisch“ für
                alle Anlässe!
              </p>{" "}
              <p>
                Genießen Sie ein Gläschen im kühlen, angenehmen Wohlfühlklima!
                Es gibt die erfrischende KeepCool.Bar sowohl als
                Plug-in/Erweiterung sowie als Einzel-Lösung mit integriertem
                Aggregat und Wassertank. Die Energie dafür beziehen wir über das
                angebrachte PV-Panel!
              </p>
            </div>
          </div>
          <div className={`${styles.solarTopSvg}`}>
            <SolarTop />
          </div>
          <div></div>
        </div>
        <div className={styles.solarMiddle}>
          <div>
            <SolarCenter />
          </div>
          <div className={styles.solarMiddleInfo}>
            <div className={`${styles.circleCount}`}>
              <p>02</p>
              <h6>SolarPanel.</h6>
            </div>
            <div className={`${styles.solarInfo}`}>
              <p>
                Die KeepCool.Bar, unser neuestes Highlight: der „Stehtisch“ für
                alle Anlässe!
              </p>
              <p>
                Genießen Sie ein Gläschen im kühlen, angenehmen Wohlfühlklima!
                Es gibt die erfrischende KeepCool.Bar sowohl als
                Plug-in/Erweiterung sowie als Einzel-Lösung mit integriertem
                Aggregat und Wassertank. Die Energie dafür beziehen wir über das
                angebrachte PV-Panel!
              </p>
            </div>
          </div>
        </div>

        <div className={styles.solarBottom}>
          <div className={styles.solarBottomFirst}>
            <div className={`${styles.circleCount}`}>
              <p>03</p>
              <h6>TischAblage.</h6>
            </div>
            <div className={`${styles.solarInfo}`}>
              <p>
                Die KeepCool.Bar, unser neuestes Highlight: der „Stehtisch“ für
                alle Anlässe!
              </p>
              <p>
                Genießen Sie ein Gläschen im kühlen, angenehmen Wohlfühlklima!
                Es gibt die erfrischende KeepCool.Bar sowohl als
                Plug-in/Erweiterung sowie als Einzel-Lösung mit integriertem
                Aggregat und Wassertank. Die Energie dafür beziehen wir über das
                angebrachte PV-Panel!
              </p>
            </div>
          </div>
          <div className={styles.solarBottomSvg}>
            <SolarBottom />
          </div>
          <div className={styles.solarBottomLast}>
            <div className={`${styles.circleCount}`}>
              <p>04</p>
              <h6>StandAlone.</h6>
            </div>
            <div className={`${styles.solarInfo}`}>
              <p>
                Die KeepCool.Bar, unser neuestes Highlight: der „Stehtisch“ für
                alle Anlässe!
              </p>
              <p>
                Genießen Sie ein Gläschen im kühlen, angenehmen Wohlfühlklima!
                Es gibt die erfrischende KeepCool.Bar sowohl als
                Plug-in/Erweiterung sowie als Einzel-Lösung mit integriertem
                Aggregat und Wassertank. Die Energie dafür beziehen wir über das
                angebrachte PV-Panel!
              </p>
            </div>
          </div>
        </div>
        <div className={styles.btnWrap}>
          <Link href="/kontack">Nehmen Sie Kontakt mit uns.</Link>
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
      <h2 class={styles.weitere}>Weitere</h2>
      <div>
        <ProducteSection />
      </div>
      <TheFooter />
    </div>
  );
}

export default Keep