import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Category from '../category/category'
import Values from '../Values/Values'
import Products from '../Products/Products'
import Discount from '../Discount/Discount'
import Process from '../Process/Process'
import Custormers from '../Custormers/Custormers'
import Footer from '../Footer/Footer'



const Home = () => {
    return (
        <>
           
            <Hero />
            <Category/>
            <Values/>
            <Products/>
            <Discount/>
            <Process/>
            <Custormers/>
                  
            
        </>
    )
}

export default Home