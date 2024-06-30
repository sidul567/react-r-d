import React from "react";

import buildForPeople from  "../../assets/buildForPeople.png";

type Props = {};

const BuiltForPeople = (props: Props) => {
  return (
    <div className="max-w-[1696px] mx-auto mb-[100px]">
      <div className="w-[944px] mx-auto h-[0px] opacity-5 border border-solid border-black"></div>
      <div className="max-w-[944px] mx-auto mt-12 flex items-center justify-between">
        <div className="w-[446px] h-[367px] relative flex-col justify-start items-start inline-flex">
          <h3 className="px-2.5 py-1.5 bg-[#EFFEFF] rounded-[60px] justify-start items-start gap-2.5 inline-flex text-center text-[#0CBBC7] text-[8px] font-bold uppercase tracking-wide leading-tight mb-5">OUR PROMISE</h3>
          <p className="text-black text-[28px] leading-tight mb-5">
            Tool <span className="font-bold">built for people.</span>
          </p>
          <p className="w-[365px] text-[#676767] text-base font-normal leading-relaxed mb-[50px]">
            Whether you want to edit your Google Docs, resolve Jira issues, or
            collaborate over Zoom. <br /> <br />
            Circle has 100+ integrations with tools you already use and love.
        </p>
          <button className="px-5 py-3.5 bg-[#0CBBC7] justify-center items-center gap-2.5 border-none inline-flex text-white text-base font-bold tracking-tight">
              Get started free
          </button>
        </div>
        <img src={buildForPeople} alt="" />
      </div>
    </div>
  );
};

export default BuiltForPeople;
