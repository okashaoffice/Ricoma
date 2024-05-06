import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";

const FooterData = [
  {btnName:"Massa", Fname:"Aliquet et.", Sname:"Donec.", Tname:"Neque nec feugiat.",},
  {btnName:"Enim.", Fname:"Lorem", Sname:"Kino.", Tname:"Donec",},
  {btnName:"Fusce.", Fname:"Ipsum", Sname:"Venim.", Tname:"Felis nec augue.",},
]

function Footer() {

  return (
    <div className="bg-[#022B5B] mainperafont">
      <div className="p-10 px-12 mob:px-4">
        <div className="lg:hidden md:hidden sm:hiddem flex justify-center pb-6">
          <img src="images/logo.png" alt="logo" className="h-12 " />
        </div>

        <div className="flex justify-between flex-wrap mob:flex-col-reverse ">
          <div>
            <img src="images/logo.png" alt="logo" className="h-12 mob:hidden" />

            <div className="flex gap-x-5 pt-8 text-white text-xl justify-center mob:gap-x-11">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
              <FaPinterestP />
            </div>
          </div>
          
            <div className="flex justify-between gap-x-20 mob:hidden">
              <div className="space-y-4  ">
                <p className="text-white text-base font-bold ">Massa.</p>
                <p className="text-sm text-[#A0A2A6] ">Aliquet et.</p>
                <p className="text-sm text-[#A0A2A6] ">Donec.</p>
                <p className="text-sm text-[#A0A2A6] ">Neque nec feugiat.</p>
              </div>
              <div className="space-y-4  ">
                <p className="text-white text-base font-bold ">Enim.</p>
                <p className="text-sm text-[#A0A2A6] ">Lorem.</p>
                <p className="text-sm text-[#A0A2A6] ">Ipsium</p>
                <p className="text-sm text-[#A0A2A6] ">Donec.</p>
              </div>
              <div className="space-y-4  ">
                <p className="text-white text-base font-bold ">Fusce.</p>
                <p className="text-sm text-[#A0A2A6] ">Amet.</p>
                <p className="text-sm text-[#A0A2A6] ">Tincidunt.</p>
                <p className="text-sm text-[#A0A2A6] ">Felis nec augue.</p>
              </div>
            </div>
            {FooterData.map((data) => {
              return<Dropdown dropdata={data} />
            })}

          <div className=" w-[20%] mob:w-full relative">
            <img src="images/footerimg.png" alt="" className=" mob:w-full  " />
            <button className="bg-[#E27838] rounded-full h-14 min-w-14  items-center pl-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
              <IoMdPlay className="text-white text-4xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="mob:bg-black mob:w-full px-12 flex justify-between mb-4 mob:flex-col mob:mb-0 mob:pb-2">
        <div className="flex mob:justify-center gap-x-14 mob:pt-4 ">
          <p className="text-white text-xs">Neque dictum.</p>
          <p className="text-white text-xs">Pulvinar.</p>
        </div>

        <div className="text-end mob:text-center mob:pt-6 ">
          <p className="text-white text-xs">
            Elementum lectus suspendisse ipsum.
          </p>
        </div>
      </div>

      <div className="bg-[#FCD002] border-t-[white] mob:sticky border-t-2 flex flex-wrap mob:justify-center justify-between p-2 items-center px-12 mob:px-0">
        <p className="text-black font-bold text-lg text-center">
          {" "}
          Nibh tincidunt.
        </p>
        <h1 className="text-black font-bold text-xl text-center mob:text-lg">
          {" "}
          2 DAYS : 15 HOURS : 03 MIN : 00 SEC
        </h1>
        <button className="text-white font-bold text-base rounded-3xl border-2 px-6 py-1 border-white bg-[#0076FF]  ">
          Lorem Ipsum{" "}
        </button>
      </div>
    </div>
  );
}

export default Footer;

function Dropdown({dropdata}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="sm:hidden">
      
        <div className=" px-4 pt-4">
        <button
          onClick={toggleDropdown}
          className="text-white border-b pb-2 px-2 flex justify-between items-center  w-full  "
        >
          {dropdata.btnName} <BiPlus className="text-[#7C7C7D]" />
        </button>
        <div>
          {isDropdownOpen ? (
            <ul className="text-[#A0A2A6] pl-4 space-y-2 text-sm pt-2">
              <li>{dropdata.Fname}</li>
              <li>{dropdata.Sname}</li>
              <li>{dropdata.Tname}</li>
            </ul>
          ) : null}
        </div>
      </div>
      
     
    </div>
  );
}
