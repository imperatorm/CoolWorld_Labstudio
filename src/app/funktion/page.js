import React from 'react'
import { FunktionIcon } from '@/components/Icons/Icons';
import styles from "./Funktion.module.scss"
import Image from 'next/image';
// Images
import footerImg from "@/assets/images/footer-bg.png";
import icon01 from "@/assets/images/Icon01.png";
import icon02 from "@/assets/images/Icon02.png";
import icon03 from "@/assets/images/Icon03.png";
import icon04 from "@/assets/images/Icon04.png";
import ParallaxImg from '@/components/ParallaxImg/ParallaxImg';
import homeParallax from "@/assets/images/home4.png";
import Link from 'next/link';
import TheHeader from '@/components/TheHeader/TheHeader';


const Funktion = () => {
  return (
    <div>
      <TheHeader />
      <div className={styles.funktionWrap}>
        <h2 className="main-container">
          Erfrischende Kühlzonen für heiße Tage: Genieße den Sommer mit unseren
          Cooling Oasis
        </h2>
        <div className={styles.funktionSvg}>
          <FunktionIcon width={"100%"} height={"100%"} />
        </div>
        <div className={styles.imgWrap}>
          <Image src={footerImg} alt={"footer-bg"} />
        </div>
        <div className={styles.milkWrap}>
          <div className={`main-container ${styles.infoWrap}`}>
            <h3>KeepCool: </h3>
            <h3>Erfrischende Kühlungsbereiche</h3>
            <h3>für Gastro, Privat und Tierwelt</h3>
            <p>
              Kühlungsbereiche für Gastro, Privat und Tierwelt: Genieße den
              Sommer in angenehmer Kühle. Unsere hochwertigen Sprühkühlsysteme
              schaffen eine angenehme Umgebung für Restaurants, Cafés und Bars,
              während unsere Wasser-Sprühkühlungssysteme Ihren privaten
              Außenbereich zum Rückzugsort vor der Sommerhitze machen. Unsere
              speziell entwickelten Kühlungslösungen schützen auch Tiere in
              Zoos, Tierparks und Haushalten vor Überhitzung. Mit
              maßgeschneiderten Lösungen und modernster Technologie ermöglichen
              unsere Kühlungsbereiche ein komfortables Erlebnis bei
              energieeffizientem Betrieb. Genieße den Sommer in vollen Zügen!
            </p>
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
            <div className={styles.btnWrap}>
              <Link href={"/bereiche"}>Unsere Bereiche</Link>
              <Link href={"/produkte"}>Unsere Produkte</Link>
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
        </div>
        <div className={styles.footerContent}>
          <div className={styles.footerContent}>
            <nav className={styles.navFooter}>
              <ul>
                <li>
                  <Link href={"/funktion"}>Funktion</Link>
                </li>
                <li>
                  <Link href={"/bereiche"}>Bereiche</Link>
                </li>
                <li>
                  <Link href={"/produkte"}>Produkte</Link>
                </li>
                <li>
                  <Link href={"/cool-world"}>CoolWorld</Link>
                </li>
                <li>
                  <Link href={"/kontakt"}>Kontakt</Link>
                </li>
              </ul>
            </nav>
            <div className={styles.circleNav}>
              <div className={styles.circleNavItem}>Mail</div>
              <div className={styles.circleNavItem}>Maps</div>
            </div>
            <div className={styles.socialWrap}>
              <nav className={styles.socialNav}>
                <ul>
                  <li>
                    <Link href={"/impressum"}>Impressum</Link>
                  </li>
                  <li>
                    <Link href={"/datenschutz"}>Datenschutz</Link>
                  </li>
                  <li>
                    <Link href={"facebook.com"}>Facebook</Link>
                  </li>
                  <li>
                    <Link href={"instagram.com"}>Instagram</Link>
                  </li>
                </ul>
              </nav>
              <div className={styles.otherInfo}>
                <p>
                  Instagram TheCoolWorld GmbH, Dorf 23e, 6210 Wiesing, Austria
                </p>
                <div className={styles.socialContact}>
                  <p>
                    <span>
                      <Link href={"tel:+43 676 560 62 22"}>
                        +43 676 560 62 22
                      </Link>
                    </span>
                    <span>|</span>
                    <span>
                      <Link href={"mailto:info@thecoolworld.at"}>
                        info@thecoolworld.at
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Funktion;