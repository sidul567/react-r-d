import React from 'react'

type Props = {
    post: {
        userId: number;
        id: number;
        title: string;
        body: string
    };
}

const Post = ({post}: Props) => {
  return (
    <div className='p-4 shadow-md rounded text-gray-900 text-sm font-semibold max-w-[320px]'>
        <p>UserId: {post.userId}</p>
        <p>ID: {post.id}</p>
        <p>Title: {post.title}</p>
        <p>Body: {post.body}</p>
    </div>
  )
}

export default Post