import React from 'react'
import CatagoryPage from '../CatagoryPage/CatagoryPage'
import bgAll from '../../assets/all-banner.jpg'

const AllProducts = () => {
  return (
    <div>
       <CatagoryPage title="All Products" bgImage={bgAll} categories={['All']}/>
    </div>
  )
}

export default AllProducts