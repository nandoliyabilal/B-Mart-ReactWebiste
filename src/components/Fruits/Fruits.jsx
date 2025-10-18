import React from 'react'
import CatagoryPage from '../CatagoryPage/CatagoryPage'
import bgFruits from '../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
   <div>
    <CatagoryPage title="Fruites & Veggeis" bgImage={bgFruits} categories={['Fruits','Vegetables']}/>
   </div>
  )
}

export default Fruits