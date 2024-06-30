import React from "react";
import Button from "./Button";
import Stats from "./Stats";
import Count from "./Count";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../features/counters/countersSlice";

type Props = {};

const Counter = (props: Props) => {
  const counters = useSelector((state: any) => state.counters);
  const dispatch = useDispatch();

  const total = counters.reduce((sum:number, counter:any) => sum + counter.value, 0);

  const handleIncrement = (counterId: number) => {
    dispatch(increment(counterId));
  };
  const handleDecrement = (counterId: number) => {
    dispatch(decrement(counterId));
  };
 
  return (
    <>
      {counters.map((counter: any) => (
        <div
          className="max-w-[400px] mx-auto p-4 rounded-lg shadow-md flex justify-center items-center flex-col gap-10 mb-3"
          key={counter.id}
        >
          <Count value={counter.value} />
          <div className="flex gap-5">
            <Button type="inc" onClick={() => handleIncrement(counter.id)}>
              Increment
            </Button>
            <Button type="dec" onClick={() => handleDecrement(counter.id)}>
              Decrement
            </Button>
          </div>
        </div>
      ))}
      <Stats value={total} />
    </>
  );
};

export default Counter;
