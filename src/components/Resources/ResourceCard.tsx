import React from "react";

type Props = {
    title: string;
    description: string;
    image: string;
};

const ResourceCard = ({description, image, title}: Props) => {
    
  return (
    <div className="max-w-[359px] max-h-[533px] rounded shadow pl-[35px] pt-[38px] pr-[34px] pb-[40px] bg-white">
      <img src={image} alt="" className="max-w-max" />
      <p className="max-w-[280px] text-black text-base font-bold leading-relaxed mt-[25px]">
        {title}
      </p>
      <p className="max-w-[280px] text-[#676767] text-sm font-normal leading-[22px] mt-[11px]" dangerouslySetInnerHTML={{ __html: description }} />
      <button className="w-[114px] h-[38px] px-5 py-2.5 bg-[#0CBBC7] border-none text-white text-sm font-bold mt-[25px]">Read more</button>
    </div>
  );
};

export default ResourceCard;
