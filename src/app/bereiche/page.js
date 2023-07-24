import CowsSection from "@/components/CowsSection/CowsSection";
import styles from "./Bereiche.module.scss"
import React from "react";
import TheFooter from "@/components/TheFooter/TheFooter";
import TheHeader from "@/components/TheHeader/TheHeader";

const Bereiche = () => {
  return (
    <div>
      <TheHeader />
      <CowsSection />
      <div className={styles.milkWrap}>
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
      </div>
      <TheFooter />
    </div>
  );
};

export default Bereiche;
