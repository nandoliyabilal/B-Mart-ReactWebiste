import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from 'react-icons/tb'
import { PiFactory, PiPlant } from 'react-icons/pi'
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";



const Process = () => {

  const renderSteps = Steps.map(item => {
    return (
      <div className={` flex-1   ${item.id % 2 ===0 ? 'md:-mt-100' :''}`}>
        <span className='w-18 h-18 text-8xl bg-zinc-800 text-white flex justify-center items-center rounded-full outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed mx-auto'>{item.number}</span>

        <div className='flex items-center mt-10 gap-x-5'>

          <span className='flex justify-center items-center text-3xl bg-gradient-to-b from-orange-400 to-orange-600 text-white w-15 h-15 rounded-full '>{item.icon}</span>


          <div className='flex-1' >
            <h4 className='text-zinc-800 text-2xl font-bold '>{item.title}</h4>
            <p className=' text-zinc-600 mt-2'>{item.para}</p>
          </div>
        </div>
      </div>
    )
  })
  return (
    <section>
      <div className='max-w-[1400px] px-10 mx-auto py-20'>
        <div className='w-fit mr-auto md:ms-0 ms-12'>
          <Heading highlight="Our" heading="Process" />
        </div>

        <div className='flex flex-wrap gap-y-17 items-center justify-center  md:mt-20 mt-10 md:pt-50 '>
          {renderSteps}
        </div>
      </div>
    </section>
  )
}

export default Process

const Steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: 'Sourcing',
    para: 'It is a long established fact that a reader',
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: 'Manufacturing',
    para: 'It is a long established fact that a reader',
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: 'Quality Control',
    para: 'It is a long established fact that a reader',
    icon: <SlBadge />
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: 'Logistics',
    para: 'It is a long established fact that a reader',
    icon: <BsTruck />,
  },
]