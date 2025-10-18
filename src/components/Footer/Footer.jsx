import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Footer = () => {
    return (
        <footer className='bg-zinc-100 py-20 mt-20'>
            <div className='flex flex-wrap gap-y-10 max-w-[1400px] mx-auto px-10 '>
                <div className='flex-1 basis-[300px]'>
                    <a href="#" className='font-bold text-[3rem]'>B-
                        <span className='text-orange-600'>M</span>
                        art</a>

                    <p className='text-zinc-600 mt-4 max-w-[350px]'>Bred for a high content of beneficial substances. Our products are all fresh and healthy.

                    </p>
                    <p className='text-zinc-800 mt-6 '>
                        2025 &copy; all rights Reserved
                    </p>

                </div>
          

            <ul className='flex-1'>
                <li>
                    <h5 className='text-zinc-800 text-2xl font-bold'>Company</h5>

                </li>
                <li className='mt-6'>
                    <a href="#" className='text-zinc-800 hover:text-orange-500 mt-6 '>About</a>
                </li>
                <li className='mt-6'>
                    <a href="#" className='text-zinc-800 hover:text-orange-500 mt-6 '>FAQ'S</a>
                </li>
            </ul>

            <ul className='flex-1'>
                <li>
                    <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>

                </li>
                <li className='mt-6'>
                    <a href="#" className='text-zinc-800 hover:text-orange-500 mt-6 '>Support Center</a>
                </li>
                <li className='mt-6'>
                    <a href="#" className='text-zinc-800 hover:text-orange-500 mt-6 '>Feedback</a>
                </li>
                <li className='mt-6'>
                    <a href="#" className='text-zinc-800 hover:text-orange-500 mt-6 '>Contect Us</a>
                </li>
            </ul>

            <div className='flex-1' >
                <h5 className='text-zinc-800 text-2xl font-bold'>Stay Connected</h5>

                <p className='mt-6 text-zinc-600'>
                    Questions or Feedback? <br />
                    we'd love to hear from you
                </p>

                <div className='flex  p-1 rounded-lg mt-6 '>
                    <input type="email" name="email" id="email" className='h-[5vh]  flex-1 focus:outline-none' autoComplete='off' placeholder='Email Address...' />
                    <button className='bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer '>
                        <IoIosArrowForward/>
                    </button>
                </div>
            </div>
              </div>
        </footer>
    )
}

export default Footer