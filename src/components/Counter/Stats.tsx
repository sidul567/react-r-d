import React from 'react'

type Props = {
  value: number;
}

const Stats = ({value}: Props) => {
  return (
    <div className='max-w-[400px] mx-auto p-4 rounded-lg shadow-md flex justify-center items-center flex-col gap-10 mb-3'>
        <p className='text-2xl font-semibold text-gray-900 mt-10'>Total: <span className='font-bold text-3xl'>{value}</span></p>
    </div>
  )
}

export default Stats