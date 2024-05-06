import React from "react";
import Nav from "../Navbar/Nav";
import Footer from "../main/Footer";
import Productamm from "./Productamm";

function Product() {
  return (
    <div>
      <div>
        <Nav />

        <div className="mainperafont ">
          <div>
            <div className="pb-96 p-20 pl-40 mob:pl-4 mob:pb-4 mob:p-2">
            <h1 className="text-[#002045] text-4xl font-bold">
              Dui augue lectus
            </h1>
            <p className="text-[#002045] text-base mob:pt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa leo <br className="mob:hidden " /> nec ultrices sit risus nisi non fermentum morbi. Tristique.</p>
            </div>
            <Productamm />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Product;
