import React, { useEffect, useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import {
  useGetPostQuery,
  useGetPostsQuery,
} from "../../features/caching/cachingApi";
import Tab from "./Tab";
import { useSelector } from "react-redux";

type Props = {};

const Parent = (props: Props) => {
  const cachings = useSelector((state: any) => state.cachings);

  const { data, isLoading } = useGetPostsQuery("");

  const [post, setPost] = useState<any>();

  useEffect(() => {
    if (data && cachings.id) {
      setPost(data[cachings.id - 1]);
    }
  }, [data, cachings]);

  return (
    <div className="flex flex-col gap-6">
      {/* <Child1 />
        <Child2 /> */}
      <Tab />
      <div>
        <h1 className="mb-3 font-bold text-4xl">Child 1</h1>
        {isLoading ? (
          <p className="text-xl font-bold">Loading...</p>
        ) : (
          <>
            <p>
              User ID: <span className="font-bold">{post?.userId}</span>
            </p>
            <p>
              ID: <span className="font-bold">{post?.id}</span>
            </p>
            <p>
              Title: <span className="font-bold">{post?.title}</span>
            </p>
            <p>
              Body: <span className="font-bold">{post?.body}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Parent;
