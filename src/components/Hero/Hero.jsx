import React from 'react'
import Grocery from '../../assets/Grocery.png'
import Button from '../Button/Button'


const Hero = () => {
    return (
        <section>
            <div className='max-w-[1400px] min-h-screen mx-auto px-10 flex md:flex-row flex-col items-center md:pt-25 p-35'>
                {/* hero content */}
                <div className='flex-1'>
                    <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Quality...</span>
                    <h1 className='md:text-7xl/18 text-5xl/14 mt-4 font-bold'>
                        Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span> In Your City</h1>
                    <p className='text-zinc-800 md:text-xl text-md max-w-[530px mt-3 mb-8 '>Bred for a high content of beneficial substances. Our products are  all  fresh and healthy.
                    </p>
                    <Button content="Shop Now"/>~
                </div>
                {/* hero image */}

                <div className='flex-1'>
                    <img src={Grocery} alt="Hero png" />
                </div>
            </div>
        </section>
    )
}

export default Hero