import React from "react";
import arrowBack from "../../assets/arrow-back 1.png";
import heroImage from "../../assets/hero-image.png";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="min-h-screen">
      <div className="bg-[#EDFEFF] pb-[248px] relative">
      <div className="max-w-[1696px] mx-auto text-center">
        <h2 className="max-w-[779px] mx-auto text-center text-[#191619] text-[44px] leading-tight font-bold pt-[50px] pb-5">
          A powerful online engagement tool that&apos;s intuitive and simple to
          use.
        </h2>
        <p className="max-w-[447px] mx-auto text-center text-[#878787] text-sm font-normal leading-[22px] pb-[30px]">
          With stellar one-click reports and unmatched support, see how Circle
          will make a difference in your business.
        </p>
        <button className="max-w-[188px] w-[188px] max-h-12 px-5 py-3.5 bg-cyan-500 justify-center items-center gap-2.5 inline-flex text-white text-base font-bold tracking-tight outline-none border-none">
          Get started free
          <img src={arrowBack} alt="" />
        </button>
      </div>
      <div className="absolute left-1/2 top-full" style={{transform: "translate(-50%, -50%)"}}>
        <img src={heroImage} alt=""/>
      </div>
    </div>
    </div>                     
  );
};

export default Hero;
