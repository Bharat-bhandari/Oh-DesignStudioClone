import { Fragment } from "react";

import c1 from "../assets/images/c1.png";

const Clients = () => {
  return (
    <Fragment>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full h-[80%]  flex flex-col justify-center items-center">
          <div className="font-semibold text-gray-400 text-7xl"> Clients</div>
          <div>
            <img src={c1} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Clients;
