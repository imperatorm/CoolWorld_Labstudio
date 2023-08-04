"use client";
import TheFooter from "@/components/TheFooter/TheFooter";
import styles from "./Kontakt.module.scss";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { LongArrow } from "@/components/Icons/Icons";
import Link from "next/link";
import SubscribeBtn from "@/components/SubscribeBtn/SubscribeBtn";
import TheHeader from "@/components/TheHeader/TheHeader";
import useHover from "@/hooks/useHover";



const Kontakt = () => {
   const [scrollX, setScrollX] = useState(0);
   const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
   const [arrowMove,setArrowMove] = useState()
   const arrowRef = useRef(false)

   useEffect(() => {
     const handleScroll = () => {
       const scrollPosition = window.scrollY;
       setScrollX(-scrollPosition); // Adjust the factor as needed
     };

     window.addEventListener("scroll", handleScroll);

     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);

   useEffect(()=> {
    setArrowMove(isHovered);
   },[isHovered])
  //  const handleHover = (isHovered) => {
  //   if (isHovered) {
      
  //      arrowRef?.current?.style="transform: translateX(-30%)";
  //   } else {
  //    arrowRef?.current?.style="transform: translateX(-40%)";
  //   }
  //  };



  return (
    <div>
      <TheHeader />
      <div className={`${styles.wrapper}`}>
        <div id="kontaktTitle" className={`${styles.headTitle}`}>
          <h2
            style={{
              position: "relative",
              top: "0%",
              left: "30%",
              transform: `translateX(${scrollX}px)`,
            }}
          >
            Genial und erfrischend.
          </h2>
        </div>
        <div className={`${styles.schrebin}`}>
          <div className={styles.arrowWrap}>
            <LongArrow
              style={
                arrowMove
                  ? { transform: "translateX(-30%)" }
                  : { transform: "translateX(-40%)" }
              }
            />
          </div>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <SubscribeBtn />
          </div>
          {/* <button>Schreiben Sie uns eine E-Mail.</button> */}
        </div>
        <div className={`main-container`}>
          <div className={`${styles.keep}`}>
            <h3>KeepCool this summer.</h3>
            <p>
              Bereit, die Hitze zu besiegen und eine angenehme Kühle im Freien
              zu erleben? Kontaktiere uns jetzt und erfahre mehr über unsere
              Sprühnebelkühlungslösungen. Lass uns gemeinsam eine erfrischende
              Umgebung schaffen, damit du den Sommer in vollen Zügen genießen
              kannst. Kontaktiere uns noch heute und lass uns über Ihre
              Bedürfnisse sprechen!
            </p>
          </div>
          <div className={`${styles.info}`}>
            <ul>
              <li>TheCoolWorld GmbH</li>
              <li>Dorf 23e</li>
              <li>6210 Wiesing</li>
              <li>Austria</li>
              <li>
                <Link href={"tel:+43 676 560 62 22"}>+43 676 560 62 22</Link>
              </li>
              <li>
                <Link href={"mailto:info@thecoolworld.at"}>
                  info@thecoolworld.at
                </Link>
              </li>
            </ul>
            <Link className={styles.telLink} href={"tel:+43 676 560 62 22"}>
              Rufen Sie uns an
            </Link>
            <button>Finden Sie uns bei Goolge Maps</button>
          </div>
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default Kontakt;
