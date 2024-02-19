import { useRef, Fragment } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AboutUsTwo = () => {
  const container = useRef();
  useGSAP(
    //
    { scope: container }
  );

  return (
    <Fragment>
      <div className="flex items-center justify-center h-screen">
        <div className="h-[80%] bg-[#fff500] ">
          <div className="p-20">
            <div className="grid grid-cols-11">
              <div className="col-span-2 ">
                <div className="pr-4 text-xl font-medium text-right text-gray-500 ">
                  Capabilities
                </div>
              </div>
              <div ref={container} className="col-span-6 pl-4 text-gray-500 ">
                <div className="flex flex-col gap-20 pl-20">
                  <div className="flex opacity-25 ele">
                    <div className="">01</div>
                    <div className="hidden">-</div>
                    <div className="pl-8 text-5xl font-semibold">
                      Branding & Design
                    </div>
                  </div>
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
