import React from "react";
import { IoStar } from "react-icons/io5";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Slider from "./Slider";
import { useState, useEffect } from "react";

const Slideimg = [
  { img: "images/mainimg/mach3.png", hiding: "TC-1501", amm: "15 needles" },
  { img: "images/mainimg/mach2.png", hiding: "EM-1010", amm: "10 needles" },
  { img: "images/mainimg/machone.png", hiding: "MT-1501", amm: "15 needles" },
];
function Maincard() {
  const [width, setWidth] = useState({winWidth : window.innerWidth});
  const breakpoint = 800;
  const detectSize = () => {
  setWidth({
    winWidth : window.innerWidth,
  })
  }
  useEffect (() => {
    window.addEventListener('resize', detectSize)
    return () =>{
      window.removeEventListener('resize', detectSize)
    }
  },[width]) 
  
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-white bg-[#0F64C8] rounded-t-lg px-6 text-center py-2 tab:mt-6 ">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit.
        </h1>
        <div>
          <div className="">
            <div className="relative">
              <div className="bg-[#F5F5F5] pt-6 pb-6">
                <Splide
                  hasTrack={false}
                  options={{
                    perPage: 2,
                    type: "loop",
                    padding: { left: "9rem", right: "0rem" },
                    arrows: false,
                    pagination: false,
                    focus: "center",
                    fixedWidth: "14.5rem",
                  }}
                >
                  <SplideTrack>
                    {Slideimg.map((slideimg) => {
                      return (
                        <SplideSlide>
                          <div>
                            <img
                              src={slideimg.img}
                              alt=""
                              className="h-40 border-r-2 pr-6"
                            />
                            <h1 className="text-lg font-bold pl-6 pt-4">
                              {slideimg.hiding}
                            </h1>
                            <p
                              className="text-[#EE1D24] text-sm pl-7
                             font-semibold pb-12"
                            >
                              {slideimg.amm}
                            </p>
                          </div>
                        </SplideSlide>
                      );
                    })}
                  </SplideTrack>
                </Splide>
                <div className="w-[1px] h-full mob:h-1/2 absolute top-0 right-0  boxshadowcolor bg-transparent"></div>
              </div>

              {/* iNNER cARD 2 */}
              {window.innerWidth > breakpoint ? (
                <div>
                  <div className="px-12 absolute w-full -bottom-[6.5rem] ">
                    <div className="bg-[#FFFFFF] p-4 mt-8 relative shadow-sm shadow-slate-300">
                      <img
                        src="images/mainimg/fblogo.png"
                        alt=""
                        className="h-6"
                      />
                      {/* review  */}
                      <div className="flex gap-x-6 items-center ">
                        <div className="pl-4">
                          <img
                            src="images/mainimg/dp3.png"
                            alt=""
                            className="rounded-full h-20"
                          />
                        </div>
                        <div>
                          <h1 className="font-bold text-sm italic  pb-2 ">
                            Ac potenti
                          </h1>
                          <p className="text-sm pb-2">
                            Consectetur porttitor nunc id nunc quis.
                          </p>
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
                          <img
                            src="images/mainimg/coma.png"
                            alt=""
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 1 end */}

                  {/* Card 2 */}
                  <div className="px-12 absolute pt-20">
                    <div className="bg-white p-4 mt-8 relative shadow-sm shadow-slate-300">
                      <img
                        src="images/mainimg/fblogo.png"
                        alt=""
                        className="h-6"
                      />
                      {/* review  */}
                      <div className="flex gap-x-6 items-center">
                        <div className="pl-4">
                          <img
                            src="images/mainimg/dp4.png"
                            alt=""
                            className="rounded-full h-20 min-w-20 mob:h-12"
                          />
                        </div>
                        <div>
                          <h1 className="font-bold text-sm italic  pb-2 ">
                            Vitae tortor.
                          </h1>
                          <p className="text-sm pb-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Faucibus eget morbi sit amet.
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
                        <div className="h-12 w-12 p-2  bg-[#FFAA00] absolute -top-3  ">
                          <img
                            src="images/mainimg/coma.png"
                            alt=""
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Slider />
              )}
            </div>
            {/* Card 2 end */}
            <div className="pt-[16rem] mob:pt-[1rem] px-12 mob:pb-4 tab:pt-0 tab:pb-6">
              <p className="text-sm pt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur auctor malesuada hendrerit nec, porttitor nunc
                tristique. Egestas eget fermentum at eget nunc et nisi eu lorem.
              </p>
              <button className="text-xl font-bold text-white w-full  h-16 bg-[#FE8101] mt-4 shadow-sm shadow-slate-300">
                Cursus.
              </button>
            </div>
          </div>
        </div>
        {/* iNNER cARD 2 END */}
      </div>
    </div>
  );
}

export default Maincard;
