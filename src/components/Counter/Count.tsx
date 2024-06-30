import React from "react";
import Button from "./Button";

type Props = {
  value: string;
};

const Count = ({value}: Props) => {
  return (
    <p className="text-3xl font-bold text-gray-900 mt-10">{value}</p>
  );
};

export default Count;
