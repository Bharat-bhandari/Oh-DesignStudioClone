import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeSliders from "./HomeSliders";
import logo from "../assets/images/logo.jpg";

import { IoMenuOutline } from "react-icons/io5";
import AboutUsOne from "./AboutUsOne";
import AboutUsTwo from "./AboutUsTwo";
import Portfolio from "./PortFolio";
import Clients from "./Clients";
import News from "./News";
import Thoughts from "./Thought";
import Nav from "./Nav";

gsap.registerPlugin(ScrollTrigger);

const MainScroll = () => {
  const container = useRef();

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".panel");

      // console.log(section);

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          // pinSpacing: false,
          scrub: 2,
          // snap: 1 / (sections.length - 1),
          end: () =>
            "+=" + document.querySelector("#mainContainer").offsetWidth,
        },
      });
    },
    { scope: container }
  );

  return (
    <>
      {/* <div className="flex items-center justify-between">
        <img src={logo} alt="" />
        <IoMenuOutline className="mr-10 cursor-pointer size-8" />
      </div> */}
      <section
        ref={container}
        id="mainContainer"
        className="flex overflow-x-hidden"
      >
        {/* <div className="flex-shrink-0 w-full panel ">
          <HomeSliders />
        </div> */}
        <div className="flex-shrink-0 w-full panel ">
          <AboutUsOne />
        </div>
        <div className="flex-shrink-0 w-full panel ">
          <AboutUsTwo />
        </div>
        <div className="flex-shrink-0 w-full panel ">
          <Portfolio />
        </div>
        <div className="flex-shrink-0 w-full panel ">
          <News />
        </div>
        <div className="flex-shrink-0 w-full panel ">
          <Thoughts />
        </div>
        <div className="flex-shrink-0 w-full panel ">
          <Nav />
        </div>
      </section>
    </>
  );
};

export default MainScroll;
