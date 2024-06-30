import React from "react";
import Label from "../utils/Label";
import win1 from "../../assets/win1.png";
import win2 from "../../assets/win2.png";
import win3 from "../../assets/win3.png";
import win4 from "../../assets/win4.png";
import win5 from "../../assets/win5.png";
import win6 from "../../assets/win6.png";
import Card from "../utils/Card";

type Props = {};

const WinningPlatform = (props: Props) => {
  return (
    <div className="max-w-[1696] mx-auto mb-[100px]">
      <div className="w-[944px] mx-auto h-[0px] opacity-5 border border-solid border-black mb-[100px]"></div>
      <Label title="Awards" />
      <p className="text-center text-black text-[28px] leading-tight font-normal mt-2.5">
        An <span className="font-bold">award winning</span> platform,{" "}
        <span className="font-bold">loved by customers</span>.
      </p>
      <div className="max-w-[903px] mx-auto mt-[61px] flex flex-wrap justify-between gap-y-[50px]">
        <Card img={win1} title="Market leader across 18 categories" bg="#FFF5F3" />
        <Card img={win2} title="Most loved SaaS tool in 2021" bg="#FFF0F9" />
        <Card img={win3} title="Category leader in 2022" bg="#ECFFFF" />
        <Card img={win4} title="Most recommended tool in 2021" bg="#F6F4FF" />
        <Card img={win5} title="Champion in survey tool 2022" bg="#FFF9E7" />
        <Card img={win6} title="Top performer spring 2021" bg="#FFEDE4" />
      </div>
    </div>
  );
};

export default WinningPlatform;
