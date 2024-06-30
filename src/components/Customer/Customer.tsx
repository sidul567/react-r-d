import React from "react";
import company1 from "../../assets/company1.png";
import company2 from "../../assets/company2.png";
import company3 from "../../assets/company3.png";
import company4 from "../../assets/company4.png";
import company5 from "../../assets/company5.png";
import company6 from "../../assets/company6.png";
import check from "../../assets/check.png";
import Label from "../utils/Label";

type Props = {};

const Customer = (props: Props) => {
  return (
    <div className="max-w-[1696px] mx-auto">
      <Label title="Our Customers" />
      <p className="text-center text-black text-[28px] leading-tight max-h-[35px] mt-[11px]">
        Trusted by <span className="font-bold">100,000+ customers</span> in 90+
        countries
      </p>
      <div className="flex gap-[51px] justify-center items-center h-[73px] mt-[30px]">
        <img src={company1} alt="" />
        <img src={company2} alt="" />
        <img src={company3} alt="" />
        <img src={company4} alt="" />
        <img src={company5} alt="" />
        <img src={company6} alt="" />
      </div>
      <div className="flex justify-center gap-[35px] mt-[30px] mb-[100px]">
        <div className="max-w-[199px] max-h-[18px] justify-center items-center gap-[10.05px] inline-flex text-black text-sm font-normal">
          <img src={check} alt="" />
          <p><span className="text-[#0CBBC7] font-bold ">1828 </span>signed up last month</p>
        </div>
        <div className="max-w-[199px] max-h-[18px] justify-center items-center gap-[10.05px] inline-flex text-black text-sm font-normal">
          <img src={check} alt="" />
          <p><span className="text-[#0CBBC7] font-bold">GDPR</span>- & <span className="text-[#0CBBC7] font-bold">CCPA</span>-ready</p>
        </div>
        <div className="max-w-[199px] max-h-[18px] justify-center items-center gap-[10.05px] inline-flex text-black text-sm font-normal">
          <img src={check} alt="" />
          <p><span className="text-[#0CBBC7] font-bold">GDPR</span>- & <span className="text-[#0CBBC7] font-bold">CCPA</span>-ready</p>
        </div>
      </div>
    </div>
  );
};

export default Customer;
