"use client"
import "./TextScroll.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function TextScroll() {
  const component = useRef();
  const pinSlider = useRef();
  const content1 = useRef();
  const content2 = useRef();
  const content3 = useRef();

  const tl = useRef();

  useLayoutEffect(() => {
    if(component.current) {
      // let ctx = gsap.context(() => {
      let contents = gsap.utils.toArray(".miban");
      gsap.set(contents, { autoAlpha: 0, x: 500 });
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinSlider.current,
          scrub: true,
          pin: true,
          start: "top top",
          end: "+=3000 bottom",
          markers: true,
        },
      });
  
      contents.forEach((content) => {
        tl.to(content, {
          keyframes: { x: [500, 185, -325] },
          duration: 5,
          autoAlpha: 1,
        });
      });

    }

    // return () => ctx.revert();
  }, [component]);
  return (
    <div className="App" ref={component}>
      <div className="pinBox" ref={pinSlider}>
        <div
          className={"pinSlider"}
          style={{ height: "50vh", background: "blue" }}
        >
          <div className="miban" ref={content1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac
            quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.
          </div>
          <div className="miban" ref={content2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac
            quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.
          </div>
          <div className="miban" ref={content3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac
            quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.
          </div>
        </div>
      </div>
    </div>
  );
}
