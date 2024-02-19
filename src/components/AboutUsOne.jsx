import { Fragment } from "react";
import au1 from "../assets/images/au1.png";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

const AboutUsOne = () => {
  return (
    <Fragment>
      <div className="flex items-center justify-center h-screen">
        <div className="grid w-full h-[80%] bg-white grid-cols-12">
          <div className="col-span-9 bg-[#fff500]">
            <div className="flex flex-col flex-wrap justify-center m-20 ">
              <div className="mb-10 font-semibold text-gray-400 text-7xl">
                Character is a branding and design agency with studios in New
                York and San Francisco.
              </div>
              <div className="mr-[35%] mb-12 ">
                Since Michael Ferdman founded Firstborn in 1997, we&apos;ve seen
                the digital landscape change dramatically. Our industry has
                transformed, our clients businesses and their challenges have
                become more complex, consumer behavior has shifted, and we, as a
                company, have evolved with those changes along with it.
              </div>
              <div className="flex items-center mt-4 font-semibold">
                <div className="pr-3 text-black">ABOUT US</div>
                <IoChevronForwardCircleOutline />
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <img src={au1} className="w-full h-full" alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUsOne;
