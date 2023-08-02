import HeroSection from "@/components/HeroSection/HeroSection";
import styles from "./Home.module.scss";
import VideoScroll from "@/components/VideoScroll/VideoScroll";
import CowsSection from "@/components/CowsSection/CowsSection";
import InfoSection from "@/components/InfoSection/InfoSection";
import ProducteSection from "@/components/ProducteSection/ProducteSection";
import { infoFirst, infoSecond } from "@/date/date";
import ParallaxImg from "@/components/ParallaxImg/ParallaxImg";
import KeepCool from "@/components/KeepCool/KeepCool";
import TheFooter from "@/components/TheFooter/TheFooter";
import TheHeader from "@/components/TheHeader/TheHeader";

export default function Home() {
  return (
    <>
      <TheHeader />
      <div>
        <HeroSection />
        <div className={styles.infoText}>
          <p>
            Genieße eine angenehme Abkühlung im Freien mit unserer innovativen
            Sprühnebelkühlung. Schaffe eine erfrischende Umgebung, um die Natur
            und deinen Lifestyle auch an den heißesten Tagen zu genießen.
          </p>
        </div>
        <VideoScroll />

        <div style={{ height: "300px" }}></div>
        <CowsSection />
        <div style={{ height: "217px" }}></div>
        <InfoSection info={infoFirst} />
        <ParallaxImg />

        <ProducteSection  />
        <div style={{ height: "220px" }}></div>
        <InfoSection info={infoSecond} />
        <div style={{ height: "250px" }}></div>
        <KeepCool />
      </div>
      <TheFooter />
    </>
  );
}
