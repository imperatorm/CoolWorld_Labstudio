"use client";
import TheFooter from "@/components/TheFooter/TheFooter";
import styles from "./Kontakt.module.scss";
import React, { useEffect, useState } from "react";
import { LongArrow } from "@/components/Icons/Icons";
import Link from "next/link";
import SubscribeBtn from "@/components/SubscribeBtn/SubscribeBtn";


const Kontakt = () => {
   const [scrollX, setScrollX] = useState(0);

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
  return (
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
        <LongArrow
          style={{ transform: `translateX(${Math.abs(scrollX / 10)}px)` }}
        />
        <SubscribeBtn />
        {/* <button>Schreiben Sie uns eine E-Mail.</button> */}
      </div>
      <div className={`main-container`}>
        <div className={`${styles.keep}`}>
          <h3>KeepCool this summer.</h3>
          <p>
            Bereit, die Hitze zu besiegen und eine angenehme Kühle im Freien zu
            erleben? Kontaktiere uns jetzt und erfahre mehr über unsere
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
          <button>Rufen Sie uns an</button>
          <button>Finden Sie uns bei Goolge Maps</button>
        </div>
      </div>
      <TheFooter />
    </div>
  );
};

export default Kontakt;
