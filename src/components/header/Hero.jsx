import React from "react";
import Button from "../../components/Button";

function Hero() {
  return (
    <div className="hero flex justify-center items-start flex-col m-auto px-12 py-20 ">
      <h1 className="font-extrabold text-4xl">Care</h1>
      <h1 className="text-[#FFBC00] font-extrabold text-4xl">Education</h1>
      <h1 className="font-extrabold text-4xl">Empowerment</h1>
      <p className="mt-3">
        Empowering children to be their best, recreating our future
      </p>
      <button className=" mt-7 bg-[#ffbc00] py-2 px-5">Get Involved</button>
    </div>
  );
}

export default Hero;
