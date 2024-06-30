import React from 'react'
import { useGetPostQuery } from '../../features/caching/cachingApi'

type Props = {}

const Child2 = (props: Props) => {
  const {data} = useGetPostQuery("2"); 
  return (
    <div>
        <h1 className='mb-3 font-bold text-4xl'>Child 2</h1>
        <p>User ID: <span className='font-bold'>{data && data.userId}</span></p>
        <p>ID: <span className='font-bold'>{data && data.id}</span></p>
        <p>Title: <span className='font-bold'>{data && data.title}</span></p>
        <p>Body: <span className='font-bold'>{data && data.body}</span></p>
    </div>
  )
}

export default Child2