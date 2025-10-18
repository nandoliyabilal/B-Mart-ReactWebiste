import React from 'react'
import CatagoryPage from '../CatagoryPage/CatagoryPage'
import bgSeaFood from '../../assets/seafood-banner.jpg'

const SeeFood = () => {
  return (
    <div>
        <CatagoryPage title="Meat & SeaFood" bgImage={bgSeaFood} categories={['Meat','SeaFood']}/>
    </div>
  )
}

export default SeeFood