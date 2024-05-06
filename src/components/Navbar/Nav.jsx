import React from "react";
import { MdMenu, MdOnDeviceTraining } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdOutlineHome } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Products = [
  {
    img: "images/mainimg/machone.png",
    id: "EM-1010",
    price: "$5999",
    sname: "Starter Embroidery Machine",
    need: "10-needle | Single-h Copy",
  },
  {
    img: "images/mainimg/mach2.png",
    id: "MT-1501",
    price: "$6999",
    sname: "Commercial Embroider Copy 6",
    need: "15-needle | Single-h Copy 5",
  },
];

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [cartOpen, setCardOpen] = useState(false);

  const Cart = () => {
    setCardOpen((prevCount) => !prevCount);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navfont relative w-full bg-[rgb(0,32,69)] py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between  px-4 py-2 sm:px-6 lg:px-8">
        <div className=" items-center mob:">
          <img src="images/logo.png" alt="" className="h-6 " />
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            <li className="text-sm font-medium text-white ">
              <Link to="/">HOME</Link>
            </li>
            <li className="text-sm font-medium text-white ">
              <Link to="/products">PRODUCTS</Link>
            </li>
            <li className="text-sm font-medium text-white ">
              <Link>ABOUT</Link>
            </li>
          </ul>
        </div>
        <div className="flex ">
          <div className="flex hover:cursor-pointer relative  ">
            <RiShoppingCartLine
              onClick={Cart}
              className="text-white text-xl  right-3"
            />
            <p className="h-3 min-w-3 text-[0.55rem] absolute   text-center rounded-full bg-[#0076FF] text-white">
              2
            </p>
            {cartOpen ? (
              <div className=" bg-black ">
                <div className=" absolute top-10 -left-[26rem]  z-50 mob:-left-[18rem]   mainperafont w-[28rem] mob:w-[22rem] bg-white overflow-hidden ">
                  <div className="flex border-b-2 px-12 border-[#F0F0F5] item-center pt-10  justify-between ">
                    <h1 className="text-black font-bold text-xl ">Your cart</h1>
                    <RxCross2
                      className="text-[#82828B]  text-xl"
                      onClick={Cart}
                    />
                  </div>
                  {Products.map((data) => {
                    return <ProductsType prouctsData={data} />;
                  })}
                  <div className="flex justify-between pt-8 px-10 mob:px-6
                   ">
                    <p className="text-black text-xl">Order total</p>
                    <p className="text-black text-xl">$14 226</p>
                  </div>
                  <div className="flex justify-center pt-20 pb-6">
                    <button className="text-white bg-[#0076FF] w-40 h-12 rounded-lg flex justify-center  items-center gap-x-2">
                      Checkout
                      <FaArrowRightLong />
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="lg:hidden">
            <MdMenu
              onClick={toggleMenu}
              className="h-6 w-6 cursor-pointer text-white"
            />
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0  z-50 origin-top-right transform pl-20  transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-[#002045] shadow-lg ring-1 ring-black ring-opacity-5 min-h-screen">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between ">
                  <div className="inline-flex items-center space-x-2">
                    <img src="images/reslogo.png" alt="logo" className="h-6" />
                    <span className="font-bold text-white text-base">
                      Distributor Portal
                    </span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <RxCross2 className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    <div
                      className="flex item-center gap-x-2
                                        hover:bg-[#0F2E69] w-1/3 mob:w-1/2
                                        py-2 rounded-lg
                                        px-2"
                    >
                      <MdOutlineHome className="hover:text-white text-[#8492AA] text-lg" />

                      <li className="list-none text-sm font-medium hover:text-white text-[#8492AA] ">
                        <Link to="/">HOME</Link>
                      </li>
                    </div>
                    <div
                      className="flex gap-x-2 items-center hover:bg-[#0F2E69] w-1/3 mob:w-1/2
                                        py-2 rounded-lg
                                        px-2 "
                    >
                      <img
                        src="images/Navimg/product.png"
                        alt=""
                        className="h-4"
                      />
                      <li className="list-none text-sm font-medium  hover:text-white text-[#8492AA]">
                        <Link to="/products">PRODUCTS</Link>
                      </li>
                    </div>
                    <div
                      className="flex gap-x-2 items-center hover:bg-[#0F2E69] w-1/3 mob:w-1/2
                                        py-2 rounded-lg
                                        px-2 "
                    >
                      <img
                        src="images/Navimg/about.png"
                        alt=""
                        className="h-4"
                      />
                      <li className="list-none text-sm font-medium hover:text-white text-[#8492AA] ">
                        About
                      </li>
                    </div>
                  </nav>
                </div>
                <div>
                  <p className="text-white font-normal text-[0.65rem] pt-48">
                    Terms of Service
                  </p>
                  <p className="text-white font-normal text-[0.65rem] pt-4">
                    ©2020 Ricoma Interna
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Nav;

function ProductsType({ prouctsData }) {
  const [isTick, setIsTick] = useState(false);
  const [isAdd, setIsAdd] = useState(1);
  const tick = () => {
    setIsTick((prevState) => !prevState);
  };
  return (
    <div className="flex gap-x-4 px-10 mob:px-0 items-center  pt-8">
      <img src={prouctsData.img} alt="" className="h-24 mob:h-20" />
      <div className="">
        <div className="flex justify-between">
          <h1 className="text-lg font-black text-[#002045]">
            {prouctsData.id}
          </h1>
          <p className="text-black font-base">{prouctsData.price}</p>
        </div>
        <p className="text-[#565657]  text-sm">{prouctsData.sname}</p>
        <p className="text-[#565657] text-sm">{prouctsData.need}</p>
        <div className="flex justify-between items-center pt-4 ">
          <div className="flex gap-x-3   items-center">
            <button
              onClick={() => {
                setIsAdd((isAdd) => isAdd - 1);
              }}
              className="bg-[#F0F0F5] p-2 rounded-full"
            >
              <FiMinus className="text-[#6E70FF]" />
            </button>
            <p>{isAdd}</p>
            <button
              onClick={() => {
                setIsAdd((isAdd) => isAdd + 1);
              }}
              className="bg-[#F0F0F5] p-2 rounded-full"
            >
              <FiPlus className="text-[#6E70FF]" />
            </button>
            <div className="flex items-center gap-x-3"></div>
            <p className="mob:text-sm">Colors</p>
            <div className="flex gap-x-2 items-center   bg-[#D0D0D0CC]  rounded-3xl px-2 py-2">
              {["#22144A", "#60C250", "#370405"].map((color) => {
                return (
                  <button
                    onClick={tick}
                    className="text-white text-lg  h-5 w-5 pl-[.1rem]   mob:w-4 mob:h-4   rounded-full"
                    style={{ background: color }}
                  >
                    {isTick ? <TiTick /> : null}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
