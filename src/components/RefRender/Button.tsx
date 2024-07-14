import React from "react";

type Props = {
  getRef: any;
  loading: boolean;
};

const Button = ({ getRef, loading }: Props) => {
  return (
    <button
      className="bg-red-500 text-white text-lg px-4 py-2 rounded-md hover:bg-red-600 duration-300 disabled:bg-slate-200"
      ref={getRef}
      disabled={loading}
    >
      Click me
    </button>
  );
};

export default Button;
