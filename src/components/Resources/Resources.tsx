import React, { createElement } from "react";
import Label from "../utils/Label";
import ResourceCard from "./ResourceCard";
import resource1 from "../../assets/resource1.png";
import resource2 from "../../assets/resource2.png";
import resource3 from "../../assets/resource3.png";

type Props = {};

const Resources = (props: Props) => {
  return (
    <div className="">
      <div className="w-[944px] mx-auto h-[0px] opacity-5 border border-solid border-black mb-[100px]"></div>
      <Label title="Resources" />
      <p className="text-center text-black text-[28px] leading-tight mt-2.5 mb-[238px]">
        <span className="font-bold">Stay</span> in the{" "}
        <span className="font-bold">know</span>
      </p>
      <div className="bg-[#EDFEFF] relative min-h-[445px]">
        <div className="flex justify-center gap-8 absolute -top-[43%] left-1/2 -translate-x-1/2">
          <ResourceCard
            description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos <br/> <br/> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli"
            image={resource1}
            title="Excepteur sint occaecat cupidatat non proident"
          />
          <ResourceCard
            description="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
          <br/> <br/>
          nisi ut aliquid ex ea commodi consequatur autem vel eum iure reprehenderit "
            image={resource2}
            title="Quis nostrum exercitationem ullam corporis suscipit laboriosam"
          />
          <ResourceCard
            description="Coluptatem accusantium doloremque laudantium, totam rem aperiam <br/> <br/>
          Aaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            image={resource3}
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </div>
  );
};

export default Resources;
