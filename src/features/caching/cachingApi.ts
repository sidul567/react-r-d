import { apiSlice } from "../api/apiSlice";

export const cachingApi = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getPost: builder.query({
            query: (postId)=>({
                url:`posts/${postId}`,
                method: "GET"
            })
        }),
        getPosts: builder.query({
            query: ()=>({
                url:`posts`,
                method: "GET"
            })
        }),
    })
})

export const {useGetPostQuery, useGetPostsQuery} = cachingApi;