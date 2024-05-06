import React from "react";

import { IoStar } from "react-icons/io5";
function Mainfcard() {
  return (
    <div>
      <div className="px-12 absolute w-full -bottom-[5rem] ">
        <div className="bg-[#FFFFFF] p-4 mt-8 relative shadow-sm shadow-slate-300">
          <img src="images/mainimg/fblogo.png" alt="" className="h-6" />
          {/* review  */}
          <div className="flex gap-x-6 items-center ">
            <div className="pl-4">
              <img
                src="images/mainimg/dp1.png"
                alt=""
                className="rounded-full h-20"
              />
            </div>
            <div>
              <h1 className="font-bold text-sm italic  pb-2 ">Viverra.</h1>
              <p className="text-sm pb-2">Sem scelerisque sit viverra.</p>
              <div className="flex gap-x-2  ">
                <IoStar className="text-[#FFA900] text-lg" />
                <IoStar className="text-[#FFA900] text-lg " />
                <IoStar className="text-[#FFA900] text-lg" />
                <IoStar className="text-[#FFA900] text-lg" />
                <IoStar className="text-[#FFA900] text-lg" />
              </div>
            </div>
          </div>

          {/* review  end*/}

          <div className="flex justify-end items-end ">
            <div className="h-12 w-12 p-2  bg-[#FFAA00] absolute -top-3  ">
              <img src="images/mainimg/coma.png" alt="" className="" />
            </div>
          </div>
        </div>
      </div>

      {/* review */}

      <div className="px-12 pt-24 absolute w-full">
        <div className="bg-[#FFFFFF] p-4 mt-8 relative  shadow-sm shadow-slate-300">
          <img src="images/mainimg/fblogo.png" alt="" className="h-6" />
          {/* review  */}
          <div className="flex gap-x-6 items-center">
            <div className="pl-4">
              <img
                src="images/mainimg/dp2.png"
                alt=""
                className="rounded-full h-20"
              />
            </div>
            <div>
              <h1 className="font-bold text-sm italic  pb-2 ">Sed faucibus.</h1>
              <p className="text-sm pb-2">
                Justo fames orci enim ornare quis lectus odio.
              </p>
              <div className="flex gap-x-2 ">
                <IoStar className="text-[#FFA900] text-lg" />
                <IoStar className="text-[#FFA900] text-lg " />
                <IoStar className="text-[#FFA900] text-lg" />
                <IoStar className="text-[#FFA900] text-lg" />
                <IoStar className="text-[#FFA900] text-lg" />
              </div>
            </div>
          </div>
          {/* review  end*/}

          <div className="flex justify-end items-end ">
            <div className="h-12 w-12 p-2  bg-[#FFAA00] absolute -top-1  ">
              <img src="images/mainimg/coma.png" alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainfcard;
