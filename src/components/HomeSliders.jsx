import React from "react";
import hs1image from "../assets/images/hs1.png";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";

import logo from "../assets/images/logo.jpg";

const HomeSliders = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="h-[80%] bg-white w-full">
        <div className="relative flex flex-col justify-center w-full h-full">
          {/* <div className="flex items-center justify-between">
          <img src={logo} alt="" />
          <IoMenuOutline className="mr-10 cursor-pointer size-8" />
        </div> */}

          <div className="relative">
            <img
              className="object-cover w-full h-full"
              src={hs1image}
              alt="Slider"
            />
            <div className="absolute font-semibold text-white bottom-16 left-24">
              <div className="text-lg">CLIENT NAME</div>
              <div className="text-3xl">WE CREATE </div>
              <div className="text-3xl">GAME CHANGING BRANDS</div>
              <div className="flex items-center mt-4">
                <div className="text-yellow-500">GO TO PROJECTS</div>
                <IoChevronForwardCircleOutline />
              </div>
            </div>
            <div className="absolute flex gap-2 text-white bottom-16 right-16">
              <FaCircle className="h-3.5" />
              <FaCircle className="h-3.5" />
              <FaCircle className="h-3.5" />
              <FaCircle className="h-3.5" />
              <FaCircle className="h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSliders;
