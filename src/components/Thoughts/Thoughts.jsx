import { Fragment } from "react";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

const Thoughts = () => {
  return (
    <Fragment>
      <div className="flex-shrink-0 w-full h-full overflow-clip panel">
        <div className="w-full h-full ">
          <div className="px-16 pt-20">
            <div>
              <div className="font-semibold text-gray-400 text-7xl">
                Thoughts
              </div>
              <div className="mt-8 ml-16 mr-32">
                <div className="grid grid-cols-3 ">
                  <div className="px-12 text-gray-400 border-r-2 border-gray-400">
                    <div className="flex flex-col flex-wrap">
                      <div className="mb-4">01</div>

                      <div className="mb-4 text-3xl ">
                        Branding & Design Blog Header
                      </div>
                      <div className="leading-5 text-gray-600 ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolor, animi provident alias fugiat ut cum
                        necessitatibus, quod enim nemo error exercitationem
                        eligendi incidunt repellat illo sit quaerat delectus
                        soluta magni. Beatae suscipit labore delectus eaque
                        provident rerum ea quis optio.
                      </div>
                      <div className="mt-12 ">
                        <IoChevronForwardCircleOutline className="text-2xl " />
                      </div>
                    </div>
                  </div>
                  <div className="px-12 text-gray-400 border-r-2 border-gray-400">
                    <div className="flex flex-col flex-wrap">
                      <div className="mb-4">02</div>

                      <div className="mb-4 text-3xl ">
                        Branding & Design Blog Header
                      </div>
                      <div className="leading-5 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolor, animi provident alias fugiat ut cum
                        necessitatibus, quod enim nemo error exercitationem
                        eligendi incidunt repellat illo sit quaerat delectus
                        soluta magni. Beatae suscipit labore delectus eaque
                        provident rerum ea quis optio.
                      </div>
                      <div className="mt-12 ">
                        <IoChevronForwardCircleOutline className="text-2xl " />
                      </div>
                    </div>
                  </div>
                  <div className="px-12 text-gray-400">
                    <div className="flex flex-col flex-wrap">
                      <div className="mb-4">03</div>

                      <div className="mb-4 text-3xl ">
                        Branding & Design Blog Header
                      </div>
                      <div className="leading-5 text-gray-600 ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolor, animi provident alias fugiat ut cum
                        necessitatibus, quod enim nemo error exercitationem
                        eligendi incidunt repellat illo sit quaerat delectus
                        soluta magni. Beatae suscipit labore delectus eaque
                        provident rerum ea quis optio.
                      </div>
                      <div className="mt-12 ">
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

export default Thoughts;
