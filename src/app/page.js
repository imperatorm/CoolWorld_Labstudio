import HeroSection from "@/components/HeroSection/HeroSection";
import styles from "./Home.module.scss"
import VideoScroll from "@/components/VideoScroll/VideoScroll";
import CowsSection from "@/components/CowsSection/CowsSection";
import InfoSection from "@/components/InfoSection/InfoSection";
import ProducteSection from "@/components/ProducteSection/ProducteSection";
import { infoFirst, infoSecond } from "@/date/date";
import ParallaxImg from "@/components/ParallaxImg/ParallaxImg";
import KeepCool from "@/components/KeepCool/KeepCool";



export default function Home() {
  return (
    <div>
      <HeroSection />
      <h2 className={styles.infoText}>
        Genieße eine angenehme Abkühlung im Freien mit unserer innovativen
        Sprühnebelkühlung. Schaffe eine erfrischende Umgebung, um die Natur und
        deinen Lifestyle auch an den heißesten Tagen zu genießen.
      </h2>
      {/* <VideoScroll /> */}
      <CowsSection />
      <InfoSection info={infoFirst} />
      <ParallaxImg />
      <ProducteSection />
      <InfoSection info={infoSecond} />
      <KeepCool />
    </div>
  );
}
