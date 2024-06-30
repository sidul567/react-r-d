import React from "react";

type Props = {
    img: any;
    title: string;
    bg: string;
};

const Card = ({img, title, bg}: Props) => {
  console.log(bg);
  
  return (
    <div className="max-w-[261px] max-h-[259px] px-[45px] pt-[50px] pb-[47px] rounded flex flex-col items-center justify-center gap-2.5" style={{backgroundColor: bg}}>
      <img src={img} alt="" />
      <p className="text-center text-black text-base font-bold leading-relaxed">
        {title}
      </p>
    </div>
  );
};

export default Card;
