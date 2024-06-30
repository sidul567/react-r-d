import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useGetPostsQuery } from "../../features/posts/postApi";

type Props = {};

const Posts = (props: Props) => {
    const [posts, setPosts] = useState([]);
    const {data, isSuccess, error, isLoading} = useGetPostsQuery("");
    const [errorData, setErrorData] = useState("");

    useEffect(()=>{
        if(isSuccess){
            setPosts(data);
        }
        if(error){
            const errorMessage = error as any;
            setErrorData(errorMessage?.error || "Something went wrong!");
        }
    }, [data, isSuccess, error])

  return (
    <div className="flex justify-between flex-wrap gap-4">
        {errorData && <p className="text-red-600 font-semibold text-sm">{errorData}</p>}
        {
            isLoading ? <h4 className="text-green-600 text-sm font-semibold">Loading...</h4> : (
                <>
                    {
                        posts.map((post:any)=>(
                            <Post key={post.id} post={post} />
                        ))
                    }
                </>
            )
        }
    </div>
  );
};

export default Posts;
