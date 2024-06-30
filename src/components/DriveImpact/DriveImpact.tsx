import React from "react";
import driveimpact from "../../assets/driveimpact.png";
import paypal from "../../assets/paypal.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import videoplayer from "../../assets/videoplayer.png";

type Props = {};

const DriveImpact = (props: Props) => {
  return (
    <Carousel className="w-full max-w-[944px] mx-auto overflow-hidden mb-[100px]">
      <CarouselContent>
        <CarouselItem>
          <div className="min-w-[944px] mx-auto mt-[100px] flex items-center gap-[74px]">
            <div>
              <p className="max-h-[22px] px-2.5 py-1.5 bg-[#EFFEFF] rounded-[60px] justify-start items-start gap-2.5 inline-flex text-center text-[#0CBBC7] text-[8px] font-bold uppercase tracking-wide">
                Testimonials
              </p>
              <p className="max-w-[219px] text-black text-[28px] font-normal leading-tight mt-2.5">
                See how customers
                <br />
                <span className="font-bold">drive impact</span>
              </p>
              <button className="max-w-[154px]max-h-[38px] px-5 py-2.5 bg-[#0CBBC7] justify-center items-center gap-2.5 inline-flex text-white text-sm font-bold mt-10">
                See case studies
              </button>
            </div>
            <div className="relative">
              <div className="relative">
                <img src={driveimpact} alt="" className="max-w-max" />
                <div className="w-[70px] h-[70px] bg-[#0CBBC7] rounded-full flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img src={videoplayer} alt="" />
                </div>
              </div>
              <div className="bg-[#EDFEFF] pl-5 pr-[42px] pt-[20px] pb-[31px] absolute bottom-0 right-[calc(-100%+65px)]">
                <img src={paypal} alt="" />
                <p className="max-w-[296px] text-[#676767] text-base font-normal leading-[26px] mt-5">
                  "I used to have a bunch of different tools I had to pay for,
                  with Circle you get everything in one bundle."
                </p>
                <p className="text-[#333333] text-sm font-bold leading-tight mt-5">
                  Michel Dedrick
                </p>
                <p className="text-[#333333] text-sm font-normal leading-tight">
                  Senior Conversion Optimizer
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="min-w-[944px] mx-auto mt-[100px] flex items-center gap-[74px]">
            <div>
              <p className="max-h-[22px] px-2.5 py-1.5 bg-[#EFFEFF] rounded-[60px] justify-start items-start gap-2.5 inline-flex text-center text-[#0CBBC7] text-[8px] font-bold uppercase tracking-wide">
                Testimonials2
              </p>
              <p className="max-w-[219px] text-black text-[28px] font-normal leading-tight mt-2.5">
                See how customers
                <br />
                <span className="font-bold">drive impact</span>
              </p>
              <button className="max-w-[154px]max-h-[38px] px-5 py-2.5 bg-[#0CBBC7] justify-center items-center gap-2.5 inline-flex text-white text-sm font-bold mt-10">
                See case studies
              </button>
            </div>
            <div className="relative">
              <div className="relative">
                <img src={driveimpact} alt="" className="max-w-max" />
                <div className="w-[70px] h-[70px] bg-[#0CBBC7] rounded-full flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img src={videoplayer} alt="" />
                </div>
              </div>
              <div className="bg-[#EDFEFF] pl-5 pr-[42px] pt-[20px] pb-[31px] absolute bottom-0 right-[calc(-100%+65px)]">
                <img src={paypal} alt="" />
                <p className="max-w-[296px] text-[#676767] text-base font-normal leading-[26px] mt-5">
                  "I used to have a bunch of different tools I had to pay for,
                  with Circle you get everything in one bundle."
                </p>
                <p className="text-[#333333] text-sm font-bold leading-tight mt-5">
                  Michel Dedrick
                </p>
                <p className="text-[#333333] text-sm font-normal leading-tight">
                  Senior Conversion Optimizer
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="min-w-[944px] mx-auto mt-[100px] flex items-center gap-[74px]">
            <div>
              <p className="max-h-[22px] px-2.5 py-1.5 bg-[#EFFEFF] rounded-[60px] justify-start items-start gap-2.5 inline-flex text-center text-[#0CBBC7] text-[8px] font-bold uppercase tracking-wide">
                Testimonials3
              </p>
              <p className="max-w-[219px] text-black text-[28px] font-normal leading-tight mt-2.5">
                See how customers
                <br />
                <span className="font-bold">drive impact</span>
              </p>
              <button className="max-w-[154px]max-h-[38px] px-5 py-2.5 bg-[#0CBBC7] justify-center items-center gap-2.5 inline-flex text-white text-sm font-bold mt-10">
                See case studies
              </button>
            </div>
            <div className="relative">
              <div className="relative">
                <img src={driveimpact} alt="" className="max-w-max" />
                <div className="w-[70px] h-[70px] bg-[#0CBBC7] rounded-full flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img src={videoplayer} alt="" />
                </div>
              </div>
              <div className="bg-[#EDFEFF] pl-5 pr-[42px] pt-[20px] pb-[31px] absolute bottom-0 right-[calc(-100%+65px)]">
                <img src={paypal} alt="" />
                <p className="max-w-[296px] text-[#676767] text-base font-normal leading-[26px] mt-5">
                  "I used to have a bunch of different tools I had to pay for,
                  with Circle you get everything in one bundle."
                </p>
                <p className="text-[#333333] text-sm font-bold leading-tight mt-5">
                  Michel Dedrick
                </p>
                <p className="text-[#333333] text-sm font-normal leading-tight">
                  Senior Conversion Optimizer
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious
        className="absolute right-[30px] top-[100px] border-none w-5 h-5 justify-center items-center flex rounded-full disabled:opacity-30 bg-[#0CBBC7] text-white"
        size="sm"
      />
      <CarouselNext className="absolute right-0 border-none w-5 h-5 justify-center items-center inline-flex rounded-full bg-[#0CBBC7] text-white text-sm disabled:opacity-30 top-[100px]" />
    </Carousel>
  );
};

export default DriveImpact;
