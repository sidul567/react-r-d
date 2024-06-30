import React from "react";
import logo from '../../assets/logo.png'

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="max-w-[1696px] mx-auto h-[80px] flex justify-between items-center">
      <div className="flex gap-[50px] items-center">
        <p className="text-[#191619] text-sm font-normal">Features</p>
        <p className="text-[#191619] text-sm font-normal">Pricing</p>
        <p className="text-[#191619] text-sm font-normal">Testimonials</p>
        <p className="text-[#191619] text-sm font-normal">Resources</p>
      </div>
      <div className="max-w-[92.65px] max-h-[25px]">
        <img src={logo} alt="" />
      </div>
      <div className="flex gap-[50px] items-center">
        <p className="text-[#191619] text-sm font-normal">Company</p>
        <p className="text-[#191619] text-sm font-normal">Contact</p>
        <button className="max-w-[138px] max-h-[38px] px-[50px] py-2.5 border border-[#0CBBC7] border-solid bg-white justify-center items-center gap-2.5 inline-flex text-[#0CBBC7] text-sm font-bold">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
