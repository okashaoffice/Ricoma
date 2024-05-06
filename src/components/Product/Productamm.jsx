import React, { useState } from "react";
import { TiInfoLarge } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import Info from "./Info";
const Product = [
  {
    name: "EM-1010",
    img: "images/mainimg/machone.png",
    mac: "Starter Embroidery Machine",
    need: "10 NEEDLE",
    sign: "SINGLE-HEAD",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet volutpat nam ultrices sit cursus. Luctus diam ipsum amet sit",
    rate: "$5999",
    cutrate: "$7500",
  },
  {
    name: "TC-1501",
    img: "images/mainimg/mach2.png",
    mac: "Commercial Embroidery Machine",
    need: "15 NEEDLE",
    sign: "SINGLE-HEAD",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet volutpat nam ultrices sit cursus. Luctus diam ipsum amet sit",
    rate: "$7999",
    cutrate: "$75 00",
  },
  {
    name: "MT-1501",
    img: "images/mainimg/mach3.png",
    mac: "Commercial Embroidery Machine",
    need: "10 NEEDLE",
    sign: "SINGLE-HEAD",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet volutpat nam ultrices sit cursus. Luctus diam ipsum amet sit",
    rate: "$8999",
    cutrate: "$7500",
  },
];
function Productamm() {
  return (
    <div>
      <div className="flex justify-between p-4 gap-x-9 px-40 absolute z-10 top-64 mob:flex-col mob:relative mob:px-2 mob:top-2">
        {Product.map((data) => {
          return <SingleProduct productData={data} />;
        })}
      </div>
      <div className="w-full h-72 formbtnbg relative  overflow-hidden mob:hidden">
        <div className="border-[#FA6101] border-2 h-[23rem] w-[25rem] -top-[12rem] rounded-full   absolute -left-36 ">
          <div className="bg-[#FA5600] h-[21rem] w-96   rounded-full relative left-1  "></div>
        </div>
        <div className="border-[#FA6101] border-2 h-[22rem] w-[23rem]  rounded-full   absolute rotate-[90deg] -right-48  -top-24 ">
          <div className="bg-[#FA5600] h-[20rem] w-[22rem]   rounded-full relative left-1  "></div>
        </div>
        <div className="border-[#FA6101] border-2 h-[25rem] w-[27rem]  rounded-full   absolute -top-[15rem] left-1/2  ">
          <div className="bg-[#ffae3c] h-[24rem] w-[26rem]   rounded-full relative left-1  "></div>
        </div>
      </div>
    </div>
  );
}

export default Productamm;

function SingleProduct({ productData }) {
  const [infoClick, setInfoClick] = useState(false);
  const isPress = () => {
    setInfoClick((previouseshow) => !previouseshow);
  };

  return (
    <div className=" w-full rounded-4xl border-1  ">
      <div className="bg-[#C4C4C4] rounded-t-xl relative flex justify-center ">
        <img
          src={productData.img}
          alt="machine"
          className="h-56 relative top-3"
        />
        <div>
          <TiInfoLarge
            onClick={isPress}
            className="text-4xl bg-[white] text-[#374A59] rounded-full absolute top-3 right-3 p-1 cursor-pointer"
          />
          {infoClick ? <Info /> : null}
        </div>
      </div>
      <div className="bg-white rounded-b-xl  px-4 pt-5">
        <h1 className="text-black font-bold text-xl ">{productData.name}</h1>
        <p className="text-black text-sm pt-2 ">{productData.mac}</p>
        <div className="flex gap-x-6">
          <p className="text-[#162EC0] text-sm ">{productData.need}</p>
          <p className="text-[#162EC0] text-sm ">{productData.sign}</p>
        </div>
        <p className="text-[#6E798C] text-sm pt-4">{productData.lorem}</p>
        <div className="flex gap-x-5 items-center pt-2">
          <TiTick className="text-white text-4xl bg-[black] rounded-full" />
          <span className="bg-[#60C250] rounded-full h-9 w-9"></span>
          <span className="bg-[#370405] rounded-full h-9 w-9"></span>
        </div>
        <div className="flex justify-between pt-2 pb-5">
          <div className="flex gap-x-2 items-center">
            <p className="text-black font-semibold  text-2xl">
              {productData.rate}
            </p>
            <p className="text-lg line-through text-[#F17D21] ">
              {productData.cutrate}
            </p>
          </div>
          <button className="text-white bg-[#F17D21] p-2 text-sm font-semibold rounded-md tracking-[.2rem] px-7">
            ORDER
          </button>
        </div>
      </div>
    </div>
  );
}
