import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Nav = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".about", {
        opacity: 0,
        duration: 3,
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="flex items-center justify-center h-screen">
      <div className="w-full h-[80%] flex justify-center items-center">
        <div>
          <div className="px-4 tracking-tighter text-9xl bg-[#fff500] about">
            About.
          </div>
          <div className="px-4 tracking-tighter text-9xl">Contact</div>
          <div className="px-4 tracking-tighter text-9xl">Print</div>
          <div className="px-4 tracking-tighter text-9xl">Portfolio</div>
          <div className="px-4 tracking-tighter text-9xl">News</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
