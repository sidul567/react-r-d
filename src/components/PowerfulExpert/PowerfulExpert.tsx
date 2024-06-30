import React from "react";
import Label from "../utils/Label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import tabImage from "../../assets/tabImage.png";

type Props = {};

const PowerfulExpert = (props: Props) => {
  return (
    <div className="max-w-[1696] mx-auto">
      <div className="w-[944px] mx-auto h-[0px] opacity-5 border border-solid border-black mb-[100px]"></div>
      <Label title="built for people" />
      <p className="text-center text-black text-[28px] leading-tight font-normal mt-2.5 mb-[50px]">
        <span className="font-bold">Easy</span> for beginners.{" "}
        <span className="font-bold">Powerful</span> for experts.
      </p>
      <Tabs defaultValue="Create" className="">
        <TabsList className="flex justify-between max-w-[903px] mx-auto">
          <TabsTrigger
            value="Create"
            className="text-base font-light text-[#676767] flex-1 border-b-[3px] border-transparent pb-[17px] data-[state=active]:border-b-[3px] data-[state=active]:border-[#0CBBC7] data-[state=active]:text-[#0CBBC7] data-[state=active]:font-semibold"
          >
            Create
          </TabsTrigger>
          <TabsTrigger
            value="Distribute"
            className="opacity-80 text-base font-light text-[#676767] pb-[17px] flex-1 border-b-[3px] border-transparent data-[state=active]:border-b-[3px] data-[state=active]:border-[#0CBBC7] data-[state=active]:text-[#0CBBC7] data-[state=active]:font-semibold"
          >
            Distribute
          </TabsTrigger>
          <TabsTrigger
            value="Collect"
            className="opacity-80 text-base font-light text-[#676767] pb-[17px] flex-1 border-b-[3px] border-transparent data-[state=active]:border-b-[3px] data-[state=active]:border-[#0CBBC7] data-[state=active]:text-[#0CBBC7] data-[state=active]:font-semibold"
          >
            Collect
          </TabsTrigger>
          <TabsTrigger
            value="Analyze"
            className="opacity-80 text-base font-light text-[#676767] pb-[17px] flex-1 border-b-[3px] border-transparent data-[state=active]:border-b-[3px] data-[state=active]:border-[#0CBBC7] data-[state=active]:text-[#0CBBC7] data-[state=active]:font-semibold"
          >
            Analyze
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Create" className="bg-[#EDFEFF] py-[62px]">
          <div className="max-w-[903px] mx-auto flex gap-[125px]">
            <div>
              <p className="text-black text-[28px] font-semibold leading-tight">
                Create
              </p>
              <p className="text-black text-base font-bold mt-5">
                Advanced research software
              </p>
              <p className="max-w-[359px] text-[#676767] text-base font-normal mt-2.5">
                Ask the right questions and get the answers you need with the
                most secure and collaborative survey platform on the market
                featuring powerful logic, sophisticated analytics, and built-in
                automation and integration.
              </p>
              <button className="w-[193px] h-12 px-5 py-3.5 bg-[#0CBBC7] justify-center items-center gap-2.5 inline-flex outline-none text-white text-base font-bold tracking-tight mt-[30px]">
                Get started for free
              </button>
            </div>
            <img src={tabImage} alt="" />
          </div>
        </TabsContent>
        <TabsContent value="Distribute" className="bg-[#EDFEFF] py-[62px]">
          <div className="max-w-[903px] mx-auto flex gap-[125px]">
            <div>
              <p className="text-black text-[28px] font-semibold leading-tight">
                Distribute
              </p>
              <p className="text-black text-base font-bold mt-5">
                Advanced research software
              </p>
              <p className="max-w-[359px] text-[#676767] text-base font-normal mt-2.5">
                Ask the right questions and get the answers you need with the
                most secure and collaborative survey platform on the market
                featuring powerful logic, sophisticated analytics, and built-in
                automation and integration.
              </p>
              <button className="w-[193px] h-12 px-5 py-3.5 bg-[#0CBBC7] justify-center items-center gap-2.5 inline-flex outline-none text-white text-base font-bold tracking-tight mt-[30px]">
                Get started for free
              </button>
            </div>
            <img src={tabImage} alt="" />
          </div>
        </TabsContent>
        <TabsContent value="Collect" className="bg-[#EDFEFF] py-[62px]">
          <div className="max-w-[903px] mx-auto flex gap-[125px]">
            <div>
              <p className="text-black text-[28px] font-semibold leading-tight">
                Collect
              </p>
              <p className="text-black text-base font-bold mt-5">
                Advanced research software
              </p>
              <p className="max-w-[359px] text-[#676767] text-base font-normal mt-2.5">
                Ask the right questions and get the answers you need with the
                most secure and collaborative survey platform on the market
                featuring powerful logic, sophisticated analytics, and built-in
                automation and integration.
              </p>
              <button className="w-[193px] h-12 px-5 py-3.5 bg-[#0CBBC7] justify-center items-center gap-2.5 inline-flex outline-none text-white text-base font-bold tracking-tight mt-[30px]">
                Get started for free
              </button>
            </div>
            <img src={tabImage} alt="" />
          </div>
        </TabsContent>
        <TabsContent value="Analyze" className="bg-[#EDFEFF] py-[62px]">
          <div className="max-w-[903px] mx-auto flex gap-[125px]">
            <div>
              <p className="text-black text-[28px] font-semibold leading-tight">
                Analyze
              </p>
              <p className="text-black text-base font-bold mt-5">
                Advanced research software
              </p>
              <p className="max-w-[359px] text-[#676767] text-base font-normal mt-2.5">
                Ask the right questions and get the answers you need with the
                most secure and collaborative survey platform on the market
                featuring powerful logic, sophisticated analytics, and built-in
                automation and integration.
              </p>
              <button className="w-[193px] h-12 px-5 py-3.5 bg-[#0CBBC7] justify-center items-center gap-2.5 inline-flex outline-none text-white text-base font-bold tracking-tight mt-[30px]">
                Get started for free
              </button>
            </div>
            <img src={tabImage} alt="" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PowerfulExpert;
