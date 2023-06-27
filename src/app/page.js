import TitleAnimation from '@/components/TitleAnimation/TitleAnimation';
import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <section className="content">
        <div
          className="canvas-wrap"
          style={{ backgroundImage: "url(Images/Home01-min.png)" }}
        />
      <TitleAnimation />
      </section>
    </div>
  );
}
