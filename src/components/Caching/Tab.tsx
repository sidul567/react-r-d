import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setId } from "../../features/caching/cachingState";

type Props = {};

const Tab = (props: Props) => {
  const dispatch = useDispatch();
  const cachings = useSelector((state:any)=>state.cachings);
  const [tabs, setTabs] = useState([1, 2, 3]);
  const handleAddTab = () => {
    setTabs([...tabs, tabs[tabs.length - 1] + 1]);
  };
  return (
    <div className="flex m-6 gap-2">
      {tabs.map((item, index) => (
        <button
          className={`p-2 px-4 font-bold hover:bg-green-400 hover:text-white duration-300 border ${item === cachings.id && "bg-green-400 text-white"}`}
          key={index}
          onClick={() => dispatch(setId(item))}
        >
          {item}
        </button>
      ))}
      <button
        className="p-2 px-4 font-bold hover:bg-green-400 hover:text-white border"
        onClick={handleAddTab}
      >
        Add
      </button>
    </div>
  );
};

export default Tab;
