import ProducteSection from '@/components/ProducteSection/ProducteSection'
import TheFooter from '@/components/TheFooter/TheFooter';
import styles from "./Produkte.module.scss"
import React from 'react'

const Produkte = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <ProducteSection />
      <div className={`main-container ${styles.info}`}>
        <h2>KeepCool: </h2>
        <h2>Erfrischende Kühlungsbereiche </h2>
        <h2>für Gastro, Privat und Tierwelt</h2>
        <p>
          Kühlungsbereiche für Gastro, Privat und Tierwelt: Genieße den Sommer
          in angenehmer Kühle. Unsere hochwertigen Sprühkühlsysteme schaffen
          eine angenehme Umgebung für Restaurants, Cafés und Bars, während
          unsere Wasser-Sprühkühlungssysteme Ihren privaten Außenbereich zum
          Rückzugsort vor der Sommerhitze machen. Unsere speziell entwickelten
          Kühlungslösungen schützen auch Tiere in Zoos, Tierparks und Haushalten
          vor Überhitzung. Mit maßgeschneiderten Lösungen und modernster
          Technologie ermöglichen unsere Kühlungsbereiche ein komfortables
          Erlebnis bei energieeffizientem Betrieb. Genieße den Sommer in vollen
          Zügen!
        </p>
      </div>
      <TheFooter />
    </div>
  );
}

export default Produkte