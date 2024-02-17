import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const MainScroll = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.to(".box", {
      ease: "none",
      scrollTrigger: {
        trigger: ".box",
        pin: true,
        horizontal: true,
        scrub: 1,
      },
    });
  });

  return (
    <main ref={container} id="container box">
      {/* ---------- section 01 ---------- */}
      <section className="horizontal-section">
        <h1 className="heading">Horizontal Scroll</h1>
      </section>

      {/* ---------- section 02 ---------- */}
      <section className="horizontal-section">
        <h1 className="heading">01</h1>
      </section>

      {/* ---------- section 02 ---------- */}
      <section className="horizontal-section">
        <h1 className="heading">02</h1>
      </section>

      {/* ---------- section 03 ---------- */}
      <section className="horizontal-section">
        <h1 className="heading">03</h1>
      </section>
    </main>
  );
};

export default MainScroll;
