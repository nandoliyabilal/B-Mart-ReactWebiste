import React from 'react'

const Banner = ({title, bgImage}) => {
  return (
    <div className=' h-[50vh]  flex justify-center p-5 mt-24 items-center bg-center bg-cover relative'
    style={{backgroundImage: `url(${bgImage})`}}>
        <h2 className='text-zinc-800 font-bold text-5xl rounded-xl h-[60px] bg-white z-10 '>{title}</h2>
        <div className='bg-black/50 absolute inset-0'></div>
    </div>
  )
}

export default Banner