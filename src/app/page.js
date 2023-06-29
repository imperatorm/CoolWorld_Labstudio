import HeroSection from "@/components/HeroSection/HeroSection";
import styles from "./Home.module.scss"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <h2 className={styles.infoText}>
        Genieße eine angenehme Abkühlung im Freien mit unserer innovativen
        Sprühnebelkühlung. Schaffe eine erfrischende Umgebung, um die Natur und
        deinen Lifestyle auch an den heißesten Tagen zu genießen.
      </h2>
    </div>
  );
}
