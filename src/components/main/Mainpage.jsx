import React, { useState, useEffect  } from "react";
import Nav from "../Navbar/Nav";
import FormPage from "./FormPage";
import { IoMdPlay } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Maincard from "./Maincard";
import Footer from "./Footer";
import Mainfcard from "./Mainfcard";
import Slider from "./Slider";

function Mainpage() {
  const [isPopup, setisPopup] = useState(false);
  const [width, setWidth] = useState({winWidth : window.innerWidth});
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
  const breakpoint = 800;

  const inClick = () => {
    setisPopup((prevpopup) => !prevpopup);
  };
  return (
    <div>
      <Nav />
      {/* Below Customer lorem ips */}
      <div>
        <div>
          <div className="bg-[#046ee7]  bgimg">
            <span>
              <h1 className="text-white font-bold text-4xl mainperafont pt-12 pb-6 pl-24 mob:pl-2 mob:text-center">
                Dui Augue Lectus <br />
                In Ut At Lorem
              </h1>
            </span>

            <div className=" px-24 flex justify-between gap-x-32 pb-24 mob:p-2 mob:flex-col-reverse tab:p-2 tab:flex-col-reverse ">
              <div className="w-1/2 mob:w-full tab:w-full">
                <div className="mainperafont  ">
                  <p className="text-white text-base font-light pt-12 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem nec aenean leo pulvinar morbi pulvinar sagittis, hac
                    massa. Vulputate bibendum et in mattis nec duis nec, magna.
                    Nunc, mattis purus dolor risus commodo. Tempus molestie
                    morbi ultrices nunc.{" "}
                    <span className="text-black bg-yellow-300 font-bold text-lg">
                      Semper nam ridiculus duis bibendum risus, arcu arcu.
                    </span>
                  </p>
                  <p className="text-white text-base font-thin pt-12 text-justify ">
                    Nulla ut elementum, nibh viverra pharetra eu. Aliquet sem
                    condimentum posuere cursus quis risus. Mauris, auctor
                    ridiculus blandit lacus.
                    <span className="text-black font-bold bg-yellow-300 text-lg">
                      {" "}
                      Porttitor diam a amet pharetra tellus, senectus augue. Id
                      sed a quis morbi ac odio cursus metus sit. Sapien ut non
                      eu non egestas non mauris.
                    </span>{" "}
                    Elit, scelerisque mauris aenean justo.{" "}
                  </p>
                </div>
                <div className="relative w-[60%] mob:w-full  pt-12 pb-12 tab:w-full">
                  <img
                    src="images/mainimg/video.png"
                    alt=""
                    className="h-56 mob:w-full tab:w-full"
                  />
                  <button
                    className="bg-[#E27838] rounded-full h-16 min-w-16   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  items-center pl-3"
                    onClick={inClick}
                  >
                    <IoMdPlay className="text-white text-5xl" />
                  </button>
                </div>
              </div>
              <FormPage />
            </div>
          </div>
          <div className="px-36 relative mob:px-8 -top-10 tab:px-6 ">
            <div className=" bg-white rounded-lg shadow-md shadow-slate-600-500/50  ">
              <div className="mainperafont flex flex-wrap justify-between">
                <div className="flex item center gap-x-10 p-12 items-center ">
                  <div className="bg-[#FFECEC]  rounded-full min-w-[3rem] min-h-[3rem] flex justify-center ">
                    <img
                      src="images/mainimg/Customer Support.png"
                      alt=""
                      className="h-7 mt-2"
                    />
                  </div>
                  <div>
                    <h1 className="font-bold text-xl">24/7</h1>
                    <p className="font-semibold text-[#4F5665] text-lg">
                      Lorem Ipsum
                    </p>
                  </div>
                </div>
                <div className="flex item center gap-x-10 p-12 items-center ">
                  <div className="bg-[#FFECEC]  rounded-full min-w-[3rem] min-h-[3rem] flex justify-center ">
                    <img
                      src="images/mainimg/Direct From Factory.png"
                      alt=""
                      className="h-7 mt-2"
                    />
                  </div>
                  <div>
                    <h1 className="font-bold text-xl">30+</h1>
                    <p className="font-semibold text-[#4F5665] text-lg">
                      Lorem Ipsum
                    </p>
                  </div>
                </div>
                <div className="flex item center gap-x-10 p-12 items-center ">
                  <div className="bg-[#FFECEC]  rounded-full min-w-[3rem] min-h-[3rem] flex justify-center ">
                    <img
                      src="images/mainimg/Highest Quality.png"
                      alt=""
                      className="h-7 mt-2"
                    />
                  </div>
                  <div>
                    <h1 className="font-bold text-xl">50+</h1>
                    <p className="font-semibold text-[#4F5665] text-lg">
                      Lorem Ipsum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Below Customer lorem ips end*/}

      <div className="pt-4 p-12 mob:px-3">
        <h1 className="text-5xl font-bold text-center pb-8 mob:text-3xl">
          Pellentesque Tortor <br />
          Aliquet Arcu Nunc.
        </h1>
        <div className="flex mob:flex-col justify-between gap-x-10 tab:flex-col">
          {/* first card  */}
          <div className="w-1/2 mob:w-full  bg-white shadow-lg shadow-slate-400 tab:w-full">
            <div>
              <h1 className="text-2xl font-bold text-white bg-[#0F64C8] rounded-t-lg px-6 text-center py-2">
                Lorem ipsum dolor sit <br />
                amet, consectetur{" "}
              </h1>
              <div className=" pb-8 relative ">
                <div className="grid justify-center pt-6 bg-[#F5F5F5]">
                  <img
                    src="images/mainimg/machone.png"
                    alt=""
                    className="h-44"
                  />
                  <h1 className="text-xl font-bold text-center pt-4 ">
                    EM-1010
                  </h1>
                  <p className="text-[#EE1D24] text-center text-sm font-semibold pb-12">
                    10 needles
                  </p>
                </div>

                {/* inner review first  */}
                {window.innerWidth > breakpoint ? <Mainfcard /> : <Slider />}
              </div>
              {/* review2 end */}
              <div className="px-12 pt-56 mob:pt-0 tab:pt-0">
                <p className="text-base pt-6 bg-[white]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consectetur auctor malesuada hendrerit nec, porttitor nunc
                  tristique. Egestas eget fermentum at eget nunc et nisi eu
                  lorem.
                </p>
                <button className="text-xl font-bold text-white w-full  h-16 bg-[#FE8101] mt-4 mb-8 shadow-sm shadow-slate-300">
                  Dolor.
                </button>
              </div>

              {/* inner review first end */}
            </div>
          </div>
          {/* first card end */}
          {/* Sec card */}
          <div className="w-1/2 bg-white shadow-lg shadow-slate-400 mob:w-full mob:mt-12 tab:w-full  ">
            <Maincard />
          </div>

          {/* Sec card div */}
        </div>
      </div>
      <div>
        <Footer />
      </div>
      {/* Popup */}
      {isPopup ? (
        <div className="bg-[#00000099] w-full h-full fixed top-0  z-50 mob:bg-black  ">
          <div className="  flex justify-center items-center  top-96">
            <div className="w-[50%]  mob:w-full  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 absolute">
              <div className="flex  justify-end pr-4">
                <button
                  type="button"
                  className=" rounded-md p-2 text-white  hover:text-gray-700 "
                  onClick={inClick}
                >
                  <RxCross2 className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <img src="images/mainimg/video.png" alt="" />

              <div>
                {/* <video >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/W608u6sBFpo?si=Q3bYnncpTvqI_LP6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


              </video> */}

                <div className=" items-center -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
                  <button className="bg-[#00000066]  h-20 min-w-20 flex justify-center items-center pl-2">
                    <IoMdPlay className="text-white text-5xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Mainpage;
