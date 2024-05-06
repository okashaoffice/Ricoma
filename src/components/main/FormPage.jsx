import { IoStar } from "react-icons/io5";

import React from "react";

function FormPage() {
  return (
    <div className="w-[35%] mob:w-full mob:-mt-0 -mt-16 tab:w-full tab:mt-1  ">
      <div className="flex  w-full h-18 ">
        <div className="bg-[#002045] h-24 w-[50%] rounded-t-3xl mob:h-28 mob:w-[22rem]  z-20 mob:mx-7 "></div>
        <div className="bg-[#ffffffad] h-24  w-56 rounded-t-3xl right-28 top-[8rem]   mob:w-80 mob:right-[2.9rem] z-10 absolute mob:z-30 tab:top-[16rem]">
          <img
            src="images/mainimg/Rectangle.png"
            alt=""
            className="  h-full w-full "
          />
        </div>

        <div>
          <div className="formbtnbg h-20 rounded-t-2xl absolute w-72 overflow-hidden z-40 right-[6rem] mob:top-[16.3rem] mob:right-[10rem] top-[10.5rem]  tab:right-[.5rem]   mob:z-40  ">
            <div className="flex justify-center ">
              <div className=" w-36 pb-2 px-1 h-22 border-2  border-[#FA6101] rounded-[1000rem]  relative  bottom-20 ">
                <div className=" bg-[#FF9B13]   h-28  min-w-20  rounded-[1000rem]  "></div>{" "}
              </div>
            </div>
            <div className="flex justify-end ">
              <div
                className=" min-w-24 pb-3 px-1 h-22 border-2  border-[#FA6101] rounded-[1000rem] bottom-36 left-[3rem]
                                        relative rotate-90 "
              >
                <div className="bg-[#FA3800] h-28  min-w-28  rounded-[1000rem]  "></div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white  p-3 rounded-b-xl mob:mt-0">
        <div className="formfont  rounded-b-xl ">
          <h1 className="text-semibold text-center pt-2 text-lg text-[#071235]">
            Dictumst dui egestas.
          </h1>
          <div className="flex items-center gap-x-2 tab:justify-between">
            <div className="tab:w-full">
              <label
                htmlFor=""
                className="text-sm font-semibold text-[#515152] pl-2"
              >
                First Name
              </label>
              <br />
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your first name"
                className="outline-none pl-2 border-[1px] placeholder:text-sm placeholder:text-[#929292] placeholder:italic
                            py-2 placeholder:text-center border-[#315787] rounded-md placeholder:font-normal
                            w-full 
                            "
              />
            </div>
            <div className="tab:w-full">
              <label
                htmlFor=""
                className="text-sm font-semibold text-[#515152] pl-2"
              >
                Last Name
              </label>
              <br />
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your last name"
                className=" 
                                pl-2 outline-none  border-[1px] placeholder:text-sm placeholder:text-[#929292] placeholder:italic border-[#315787] rounded-md
                            py-2 placeholder:text-center placeholder:font-light
                            w-full 
                            "
              />
            </div>
          </div>
          <div className="flex items-center gap-x-2 pt-2 tab:justify-between">
            <div className="tab:w-full">
              <label
                htmlFor=""
                className="text-sm font-semibold text-[#515152] pl-2"
              >
                Email Address
              </label>
              <br />
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your email address"
                className="outline-none pl-2 border-[1px] placeholder:text-sm placeholder:text-[#929292] placeholder:italic
                            py-2 placeholder:text-center border-[#315787] rounded-md placeholder:font-normal w-full
                            mob:placeholder:text-xs
                            "
              />
            </div>
            <div className="tab:w-full">
              <label
                htmlFor=""
                className="text-sm font-semibold text-[#515152] pl-2"
              >
                Phone Number
              </label>
              <br />
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your phone number"
                className=" outline-none pl-2 border-[1px] placeholder:text-sm placeholder:text-[#929292] placeholder:italic border-[#315787] rounded-md
                            py-2 placeholder:text-center placeholder:font-light
                            w-full mob:placeholder:text-xs
                            "
              />
            </div>
          </div>
          <div className="tab:w-full">
            <label
              htmlFor=""
              className="text-sm font-semibold text-[#515152] pl-2"
            >
              Country
            </label>
            <br />
            <input
              type="text"
              name=""
              id=""
              className=" w-full outline-none pl-2 border-[1px]  
                            py-2  border-[#315787] rounded-md 
                            "
            />
          </div>

          <div>
            <button className="text-lg font-bold text-white w-full bg-orange-800 h-14 rounded-sm formbtnbg mt-3">
              Et nibh lacus elit.
            </button>
          </div>
          <div className="flex justify-center gap-x-3 pt-6">
            <img src="images/mainimg/sec.png" alt="" className="h-11" />
            <img src="images/mainimg/BBB.png" alt="" className="h-11" />
            <img src="images/mainimg/Aplus.png" alt="" className="h-11" />
          </div>

          <div className="bg-[#F3F4F5] p-4 mt-8">
            <h1 className="font-bold text-sm   ">Sit eu.</h1>
            <div
              className="flex justify-end items-end 
                                 "
            >
              <div className="h-10 w-10 p-2     -top-[2.5rem]  bg-[#FF7701] relative  ">
                <img src="images/mainimg/coma.png" alt="" className="" />
              </div>
            </div>

            <div>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta
                venenatis, lobortis proin justo, in vel elementum. Convallis.
              </p>
            </div>
            <div className="flex gap-x-2 ">
              <IoStar className="text-[#FFA900] text-lg" />
              <IoStar className="text-[#FFA900] text-lg " />
              <IoStar className="text-[#FFA900] text-lg" />
              <IoStar className="text-[#FFA900] text-lg" />
              <IoStar className="text-[#FFA900] text-lg" />
            </div>
          </div>
        </div>
        <p className="text-[#515152] text-xs text-center px-6 py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          risus, faucibus sit viverra cras aliquam parturient. Interdum amet
          imperdiet sit feugiat donec. Proin.
        </p>
      </div>
    </div>
  );
}

export default FormPage;
