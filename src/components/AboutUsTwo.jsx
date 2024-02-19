import { useRef, Fragment } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AboutUsTwo = () => {
  const container = useRef();

  const onMouseEnter = () => {
    const tl = gsap.timeline();

    tl.to(".firstele", { opacity: 1 })
      .to(
        ".firstLine",
        {
          scaleX: 18, // Increase the width of the line to ten times on hover
          transformOrigin: "right center",
          ease: "none",
          opacity: 0.5,
          duration: 0.5, // Keep the same duration for line animation
        },
        0
      ) // Start at the same time as previous animation
      .to(
        ".firstNumber",
        {
          x: -72,
          ease: "none",
          duration: 0.5, // Keep the same duration for number animation
        },
        0
      ); // Start at the same time as previous animation
  };

  const onMouseLeave = () => {
    const tl = gsap.timeline();

    tl.to(".firstele", { opacity: 0.25 });

    tl.to(".firstLine", { scaleX: 1, duration: 1, opacity: 0 }, 0); // Revert line width to original size
    tl.to(".firstNumber", { x: 0, duration: 1 }, 0); // Revert number position to original
  };

  return (
    <Fragment>
      <div
        ref={container}
        className="flex items-center justify-center h-screen"
      >
        <div className="h-[80%] bg-[#fff500] ">
          <div className="p-20">
            <div className="grid grid-cols-11">
              <div className="col-span-2 ">
                <div className="pr-4 text-xl font-medium text-right text-gray-500 ">
                  Capabilities
                </div>
              </div>
              <div ref={container} className="col-span-6 pl-4 text-gray-500 ">
                <div className="flex flex-col gap-20 pl-20 ">
                  {/* 1st */}
                  <div className="flex opacity-25 firstele">
                    <div className="firstNumber">01</div>
                    <div className="font-extrabold opacity-0 firstLine size-1">
                      -
                    </div>
                    <div
                      className="pl-8 text-5xl font-semibold cursor-pointer"
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                    >
                      Branding & Design
                    </div>
                  </div>
                  {/* 1st */}

                  <div className="flex opacity-25">
                    <div className="">02</div>
                    <div className="hidden">-</div>
                    <div className="pl-8 text-5xl font-semibold">
                      Packaging Design
                    </div>
                  </div>
                  <div className="flex opacity-25">
                    <div>03</div>
                    <div className="hidden">-</div>
                    <div className="pl-8 text-5xl font-semibold">
                      Digital Marketing
                    </div>
                  </div>
                  <div className="flex opacity-25">
                    <div>04</div>
                    <div className="hidden">-</div>
                    <div className="pl-8 text-5xl font-semibold">
                      Environmental Graphics
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-3 ">
                <div>
                  <div className="leading-5 ">
                    Since Michael Ferdman founded Firstborn in 1997, we&apos;ve
                    seen the digital landscape change dramatically. Our industry
                    has transformed, our client&apos;s businesses and their
                    challenges have become more complex, consumer behavior has
                    shifted, and we, as a company,
                  </div>
                  <div>
                    <div>- SUB HEADER</div>
                    <div>- SUB HEADER</div>
                    <div>- SUB HEADER</div>
                    <div>- SUB HEADER</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUsTwo;
