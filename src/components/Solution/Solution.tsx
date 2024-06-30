import React from "react";
import solution from "../../assets/solution.png"

type Props = {};

const Solution = (props: Props) => {
  return (
    <div className="max-w-[944px] mx-auto mb-[100px]">
      <div className="w-[944px] mx-auto h-[0px] opacity-5 border border-solid border-black mb-[100px]"></div>
      <div className="flex justify-between items-center">
        <div>
          <p className="max-w-[286px] text-black text-[28px] font-normal leading-tight">
            Looking for a <span className="font-bold">solution</span> for your
            business?
          </p>
          <p className="max-w-[359px] text-[#676767] text-base font-normal mt-[15px]">
            Check out Sogolytics enterprise feedback and experience management
            platform.
          </p>
          <div className="flex mt-[33px] gap-5">
            <button className="max-w-[117px] max-h-[38px] px-5 py-2.5 bg-[#0CBBC7] text-white text-sm font-bold">Learn more</button>
            <button className="max-w-[205px] max-h-[38px] px-5 py-2.5 bg-white text-[#0CBBC7] text-sm font-bold border border-[#0CBBC7]">Schedule a consultation</button>
          </div>
        </div>
        <img src={solution} alt="" />
      </div>
    </div>
  );
};

export default Solution;
