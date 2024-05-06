import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { IoStar } from "react-icons/io5";
const Card = [
  { star: <IoStar /> },
  { star: <IoStar /> },
  { star: <IoStar /> },
  { star: <IoStar /> },
  { star: <IoStar /> },
];
function Slider() {
  return (
    <div className="w-full shadow-md shadow-slate-400 ">
      <Splide
        hasTrack={false}
        options={{
          perPage: 1,
          arrows: false,
          pagination: true ,
          rewind: true,
        }}
      >
        <SplideTrack>
          <SplideSlide>
            <div className="bg-[#FFFFFF] p-4 mt-8 relative ">
              <img src="images/mainimg/fblogo.png" alt="" className="h-6" />
              <div className="gap-x-6 items-center pl-4">
                <div className="flex justify-center">
                <img
                  src="images/mainimg/dp1.png"
                  alt=""
                  className="rounded-full h-20 "
                />
                </div>
                <div>
                  <p className="text-sm pb-2 text-center">
                  Sem scelerisque sit viverra.
                  </p>
                  <h1 className="font-bold text-sm italic text-center  pb-2 ">
                  Viverra.
                  </h1>

                  <div className="flex gap-x-2 justify-center">
                    {Card.map((star) => {
                      return (
                        <div className="text-[#E27838] text-lg pb-6">
                          {star.star}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex justify-end items-end ">
                <div className="h-12 w-12 p-2   bg-[#E27838] rounded-md absolute -top-1  ">
                  <img src="images/mainimg/coma.png" alt="" className="pt-1" />
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
          <div className="bg-[#FFFFFF] p-4 mt-8 relative">
              <img src="images/mainimg/fblogo.png" alt="" className="h-6" />
              <div className="gap-x-6 items-center pl-4">
                <div className="flex justify-center">
                <img
                  src="images/mainimg/dp2.png"
                  alt=""
                  className="rounded-full h-20 "
                />
                </div>
                <div>
                  <p className="text-sm pb-2 text-center pt-2">
                  Justo fames orci enim ornare quis lectus odio.
                  </p>
                  <h1 className="font-bold text-sm italic text-center  pb-2 ">
                  Sed faucibus.
                  </h1>

                  <div className="flex gap-x-2 justify-center">
                    {Card.map((star) => {
                      return (
                        <div className="text-[#E27838] text-lg pb-6">
                          {star.star}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex justify-end items-end ">
                <div className="h-12 w-12 p-2   bg-[#E27838] rounded-md absolute -top-1  ">
                  <img src="images/mainimg/coma.png" alt="" className="pt-1" />
                </div>
              </div>
            </div>
          </SplideSlide>
        </SplideTrack>
      </Splide>
    </div>
  );
}

export default Slider;
