import { Fragment } from "react";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

import n1 from "../../assets/images/News/n1.png";
import n2 from "../../assets/images/News/n2.png";
import n3 from "../../assets/images/News/n3.png";

const News = () => {
  return (
    <Fragment>
      <div className="flex-shrink-0 w-full h-full panel ">
        <div className="w-full h-full ">
          <div className="px-16 pt-20">
            <div>
              <div className="font-semibold text-gray-400 text-7xl">News</div>
              <div className="mt-6 ml-16 mr-32">
                <div className="grid grid-cols-3 ">
                  <div className="px-12 text-gray-400 border-r-2 border-gray-400">
                    <div className="flex flex-col flex-wrap">
                      <div className="mb-8">01</div>
                      <div className="w-full">
                        <img className="w-full" src={n1} alt="" />
                      </div>
                      <div className="my-4 text-3xl ">
                        Branding & Design Blog
                      </div>
                      <div className="leading-5 text-gray-600 ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Excepturi nihil voluptate fuga aut! Modi,
                        repudiandae!
                      </div>
                      <div className="mt-8 ">
                        <IoChevronForwardCircleOutline className="text-2xl " />
                      </div>
                    </div>
                  </div>
                  <div className="px-12 text-gray-400 border-r-2 border-gray-400">
                    <div className="flex flex-col flex-wrap">
                      <div className="mb-8">02</div>
                      <div className="w-full">
                        <img className="w-full" src={n2} alt="" />
                      </div>
                      <div className="my-4 text-3xl ">
                        Branding & Design Blog
                      </div>
                      <div className="leading-5 text-gray-600">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Excepturi nihil voluptate fuga aut! Modi,
                        repudiandae!
                      </div>
                      <div className="mt-8 ">
                        <IoChevronForwardCircleOutline className="text-2xl " />
                      </div>
                    </div>
                  </div>
                  <div className="px-12 text-gray-400">
                    <div className="flex flex-col flex-wrap">
                      <div className="mb-8">03</div>
                      <div className="w-full">
                        <img className="w-full" src={n3} alt="" />
                      </div>
                      <div className="my-4 text-3xl ">
                        Branding & Design Blog
                      </div>
                      <div className="leading-5 text-gray-600">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Excepturi nihil voluptate fuga aut! Modi,
                        repudiandae!
                      </div>
                      <div className="mt-8 ">
                        <IoChevronForwardCircleOutline className="text-2xl " />
                      </div>
                    </div>
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

export default News;
