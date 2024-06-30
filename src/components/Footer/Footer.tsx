import React from "react";
import footermap from "../../assets/footermap.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-[#232323]">
      <div className="max-w-[1140px] mx-auto pl-[143px] pr-[174px] pt-[50px] pb-[80px]">
        <div className="flex gap-[191.5px] items-center">
          <div className="relative">
            <img src={footermap} alt="" />
            <p className="text-white text-xs font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[214px]">Made with lots of ❤️ in San Francisco</p>
          </div>
          <div className="flex justify-between flex-1">
            <div>
              <h4 className="text-white text-lg font-bold leading-[18px] tracking-tight">
                Products
              </h4>
              <div className="mt-[30px]">
                <p className="text-[#7C7C7C] text-sm font-medium leading-10">
                  Delta
                </p>
                <p className="text-[#7C7C7C] text-sm font-medium leading-10">
                  Sigma
                </p>
                <p className="text-[#7C7C7C] text-sm font-medium leading-10">
                  Zeta
                </p>
                <p className="text-[#7C7C7C] text-sm font-medium leading-10">
                  Alpha
                </p>
                <p className="text-[#7C7C7C] text-sm font-medium leading-10">
                  Acumen
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold leading-[18px] tracking-tight">
                Resources
              </h4>
              <div className="mt-[30px]">
                <p className="text-[#7C7C7C] text-sm font-medium leading-10">
                  Help
                </p>
                <p className="text-[#7C7C7C] text-sm font-medium leading-10">
                  Training Videos
                </p>
                <p className="text-[#7C7C7C] text-sm font-medium leading-10">
                  Webinars
                </p>
                <p className="text-[#7C7C7C] text-sm font-medium leading-10">
                  Request a Demo
                </p>
                <p className="text-[#7C7C7C] text-sm font-medium leading-10">
                  Create Surveys
                </p>
                <p className="text-[#7C7C7C] text-sm font-medium leading-10">
                  Quiz Maker
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold leading-[18px] tracking-tight">
                Company
              </h4>
              <div className="mt-[30px]">
                <p className="text-[#7C7C7C] text-sm font-medium leading-10">
                  About Us
                </p>
                <p className="text-[#7C7C7C] text-sm font-medium leading-10">
                  Careers
                </p>
                <p className="text-[#7C7C7C] text-sm font-medium leading-10">
                  Team
                </p>
                <p className="text-[#7C7C7C] text-sm font-medium leading-10">
                  Contact Us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1140px] mx-auto h-[0px] opacity-10 border border-white" />
      <div className="max-w-[1140px] mx-auto flex items-center pt-[40px] pb-[50px]">
            <p className="text-[#9B9B9B] text-xs font-medium min-w-[536px]">Copyright 2022 Circle. All rights reserved.</p>
            <div className="flex justify-center items-center gap-5">
                <img src={linkedin} alt="" />
                <img src={twitter} alt="" />
            </div>
            <div className="flex justify-center items-center ml-auto">
                <p className="text-[#9B9B9B] text-xs font-medium border-r border-[#9B9B9B] border-solid pr-4">Privacy Policy</p>
                <p className="text-[#9B9B9B] text-xs font-medium border-r border-[#9B9B9B] border-solid px-4">Data & Security</p>
                <p className="text-[#9B9B9B] text-xs font-medium border-r border-[#9B9B9B] border-solid px-4">Terms of Service</p>
                <p className="text-[#9B9B9B] text-xs font-medium pl-4">Data & Security</p>
            </div>
      </div>
    </div>
  );
};

export default Footer;
