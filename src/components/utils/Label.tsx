import React from "react";

type Props = {
    title: string;
};

const Label = ({title}: Props) => {
  return (
    <h2 className="max-w-[100px] max-h-[22px] mx-auto px-2.5 py-1.5 bg-[#EFFEFF] rounded-[60px] text-center text-[#0CBBC7] text-[8px] font-bold uppercase tracking-wide">
      {title}
    </h2>
  );
};

export default Label;
